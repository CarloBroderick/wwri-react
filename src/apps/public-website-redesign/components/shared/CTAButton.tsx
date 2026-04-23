import { Link } from "react-router-dom";

type Props = {
  id: string;
  to: string;
  children: React.ReactNode;
  /** "solid" = Moss fill + Forest outline (default per spec). */
  variant?: "solid" | "outline";
};

/**
 * Canva-spec CTA pill.
 *   Solid:   Moss #A3B86C container with Forest #2F5D3A outline; Moss-clicked
 *            #8FA65A fill + bold text on press.
 *   Outline: transparent with Moss outline; used as a secondary treatment.
 * Text: Poppins Normal, Smoke Fog color. Spec specifies size 32 on the
 * homepage hero but we scale it via the `text-[32px]` utility on call sites
 * when needed.
 */
function CTAButton({ id, to, children, variant = "solid" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-10 py-3 font-Poppins uppercase leading-none tracking-wide text-wriSmokeFog transition-colors";
  const styles =
    variant === "solid"
      ? "border-[3px] border-wriForest bg-wriMoss font-normal hover:bg-wriMossClicked hover:font-bold active:bg-wriMossClicked active:font-bold"
      : "border-[5px] border-wriMoss font-normal hover:bg-wriMossClicked hover:border-wriMossClicked hover:font-bold";
  return (
    <Link id={id} to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export default CTAButton;
