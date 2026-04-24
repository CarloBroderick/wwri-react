"""Trim fully-transparent borders from PNG (and other RGBA) images.

Walks a directory tree and, for each image with an alpha channel, crops to the
bounding box of non-transparent pixels. Originals should be preserved elsewhere
because this overwrites in place by default.

Usage:
    python3 scripts/image-tools/trim_transparent.py [PATH] [options]

If PATH is omitted, defaults to the public-website-redesign images folder.

Examples:
    # Dry-run over the default folder
    python3 scripts/image-tools/trim_transparent.py

    # Actually write changes, ignore trims smaller than 10px total
    python3 scripts/image-tools/trim_transparent.py --write --min-trim 10

    # Target a subfolder, treat alpha <= 8 as transparent
    python3 scripts/image-tools/trim_transparent.py src/assets/.../domains/air \\
        --write --threshold 8
"""

from __future__ import annotations

import argparse
import sys
from dataclasses import dataclass
from pathlib import Path

from PIL import Image

DEFAULT_ROOT = Path("src/assets/public-website-redesign/images")
IMAGE_EXTS = {".png", ".webp", ".tiff", ".tif"}


@dataclass
class TrimResult:
    path: Path
    original_size: tuple[int, int]
    new_size: tuple[int, int] | None
    trim_ltrb: tuple[int, int, int, int] | None
    skipped_reason: str | None = None

    @property
    def total_trim(self) -> int:
        if self.trim_ltrb is None:
            return 0
        return sum(self.trim_ltrb)

    @property
    def changed(self) -> bool:
        return self.new_size is not None and self.new_size != self.original_size


def iter_images(root: Path) -> list[Path]:
    if root.is_file():
        return [root] if root.suffix.lower() in IMAGE_EXTS else []
    return sorted(p for p in root.rglob("*") if p.is_file() and p.suffix.lower() in IMAGE_EXTS)


def compute_bbox(image: Image.Image, threshold: int) -> tuple[int, int, int, int] | None:
    """Return bbox of pixels whose alpha > threshold, or None if fully transparent."""
    if image.mode != "RGBA":
        return None
    alpha = image.split()[-1]
    if threshold <= 0:
        mask = alpha
    else:
        mask = alpha.point(lambda a: 255 if a > threshold else 0)
    return mask.getbbox()


def process_image(path: Path, *, write: bool, threshold: int, min_trim: int) -> TrimResult:
    with Image.open(path) as im:
        im.load()
        original_size = im.size

        if im.mode not in ("RGBA", "LA", "PA"):
            return TrimResult(path, original_size, None, None, skipped_reason="no alpha channel")

        if im.mode != "RGBA":
            im = im.convert("RGBA")

        bbox = compute_bbox(im, threshold)
        if bbox is None:
            return TrimResult(path, original_size, None, None, skipped_reason="fully transparent")

        w, h = original_size
        l, t, r, b = bbox
        trim_ltrb = (l, t, w - r, h - b)

        if sum(trim_ltrb) == 0:
            return TrimResult(path, original_size, original_size, trim_ltrb, skipped_reason="no trim needed")

        if sum(trim_ltrb) < min_trim:
            return TrimResult(path, original_size, original_size, trim_ltrb, skipped_reason=f"below --min-trim ({min_trim})")

        new_size = (r - l, b - t)
        if write:
            cropped = im.crop(bbox)
            save_kwargs = {"optimize": True} if path.suffix.lower() == ".png" else {}
            cropped.save(path, **save_kwargs)

        return TrimResult(path, original_size, new_size, trim_ltrb)


def format_result(result: TrimResult, root: Path) -> str:
    rel = result.path.relative_to(root) if root in result.path.parents or result.path == root else result.path
    if result.skipped_reason and not result.changed:
        return f"  skip  {rel}  ({result.skipped_reason})"
    l, t, r, b = result.trim_ltrb or (0, 0, 0, 0)
    ow, oh = result.original_size
    nw, nh = result.new_size or result.original_size
    return f"  trim  {rel}  {ow}x{oh} -> {nw}x{nh}  (L={l} T={t} R={r} B={b})"


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("path", nargs="?", default=str(DEFAULT_ROOT), help=f"File or folder to process (default: {DEFAULT_ROOT})")
    parser.add_argument("--write", action="store_true", help="Actually overwrite files (default: dry-run)")
    parser.add_argument("--threshold", type=int, default=0, help="Alpha values <= this count as transparent (default: 0)")
    parser.add_argument("--min-trim", type=int, default=0, help="Skip files where total trimmed pixels is below this")
    args = parser.parse_args(argv)

    root = Path(args.path).resolve()
    if not root.exists():
        print(f"error: path not found: {root}", file=sys.stderr)
        return 1

    search_root = root if root.is_dir() else root.parent
    files = iter_images(root)
    if not files:
        print(f"no images found under {root}")
        return 0

    mode_label = "WRITE" if args.write else "DRY-RUN"
    print(f"[{mode_label}] scanning {len(files)} image(s) under {root}")
    if args.threshold:
        print(f"  alpha threshold: <= {args.threshold}")
    if args.min_trim:
        print(f"  min trim: {args.min_trim}px total")
    print()

    changed: list[TrimResult] = []
    skipped: list[TrimResult] = []
    errors: list[tuple[Path, Exception]] = []

    for f in files:
        try:
            result = process_image(f, write=args.write, threshold=args.threshold, min_trim=args.min_trim)
        except Exception as exc:
            errors.append((f, exc))
            print(f"  error {f.relative_to(search_root)}: {exc}")
            continue
        if result.changed:
            changed.append(result)
            print(format_result(result, search_root))
        else:
            skipped.append(result)

    print()
    print(f"summary: {len(changed)} changed, {len(skipped)} unchanged, {len(errors)} errors")
    if not args.write and changed:
        print("re-run with --write to apply these changes.")
    return 0 if not errors else 2


if __name__ == "__main__":
    raise SystemExit(main())
