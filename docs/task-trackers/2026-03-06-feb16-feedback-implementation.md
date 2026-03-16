# Feb 16 Detailed Feedback — Implementation Plan
**Created:** Mar 6, 2026
**Source:** Cat Fong — "February 16 detailed website feedback" Google Doc
**Scope:** Public website content updates, image asset wiring, and layout fixes across the landing page and domain pages (Livelihoods, Species)

**Context:** The React refactor (Phases 1–3 from `2026-02-16-public-website-refactor.md`) is complete. All pages are live as React components. This tracker covers the next round of content, layout, and asset changes from Cat's detailed feedback doc.

---

## Task Summary

| ID | Status | Last Updated (Timestamp) | Task Description | Notes |
|----|--------|--------------------------|------------------|-------|
| T1 | ✅ Complete | 2026-03-06 | Homepage layout audit & quick fixes | Removed redundant Section 3 image block; tightened domains/quote spacing; hero overlay centering; video object-center |
| T2 | ✅ Complete | 2026-03-06 15:55 PST | Species domain — content text edits | Implemented all requested text edits in `domainPageData.ts`; used `"Morphological Traits"` heading to avoid "Resistance: Resistance" duplication |
| T3 | ✅ Complete | 2026-03-06 | Livelihoods domain — content text verification | Verified clean — no changes needed |
| T4 | ✅ Complete | 2026-03-13 16:23 PDT | Upgrade `ImageBlock` for real image support | Added `src`/`alt`/`showCaption` support in `ImageBlock`; added `public-website/assets/domainImages.ts` Vite asset index; smoke-tested and reverted temporary HomePage hookup |
| T5 | ✅ Complete | 2026-03-13 16:34 PDT | Domain page banner photo support | Added `bannerImageSrc` data field + photo hero overlay/fallback logic in `DomainPageTemplate`; wired Livelihoods + Species banner assets |
| T6 | ✅ Complete | 2026-03-15 15:18 PDT | Livelihoods section image wiring | Added `sectionImageSrc`/`sectionImageAlt` to section schema; wired all 3 Livelihoods section images + alts · Visually verified in dev |
| T7 | ✅ Complete | 2026-03-15 15:30 PDT | Species section image wiring | Wired all 3 Species section images + alts in `domainPageData.ts` |
| T8 | 🟡 Partial | 2026-03-15 15:35 PDT | Landing page visual assets (Section 2 teaser + Section 3 map) | ✅ Section 3 map wired in `HomePage.tsx` · 🔴 Section 2 teaser video still needed from Cat |
| T9 | ✅ Complete | 2026-03-16 | Species overview video | Added `species-overview-video.mp4` to Overview block; wired via `overviewVideoSrc` in domain data; fixed aspect-ratio shrink on play |

**Status legend:** 🟢 Ready · 🟡 In Progress · 🔴 Blocked · ✅ Complete

**Document status:** ✅ Planning complete (Mar 6, 2026). All feedback items captured, assets mapped. Ready for implementation.

**Asset status (all in `src/assets/`):**
- ✅ Livelihoods banner: `livelihoods-banner-asset.jpg` — town square / American flag
- ✅ Species banner: `species-asset.jpg` — black bear in mountain meadow
- ✅ Livelihoods status: `status-banner-asset.jpg` — elderly couple reviewing finances
- ✅ Livelihoods resistance: `resistance-banner-asset-1.jpg` — farm tractor at golden sunset
- ✅ Livelihoods recovery: `recovery-banner-asset.jpg` — abandoned farmhouse in field
- ✅ Species status: `status-asset.jpg` — monarch butterfly on milkweed
- ✅ Species resistance: `resistance-banner-asset-2.jpg` — redwood trees looking up
- ✅ Species recovery: `recovery-banner-asset-2.jpg` — cottontail rabbit in dry grass
- ✅ Section 3 WRI map: `wwri-scores-w-westcoast.png` — WRI score choropleth + domain pie chart
- 🔴 Section 2 teaser: still needed from Cat (video file or embed URL)
- 🔴 Livelihoods overview: Cat noted "[I need to make this and it's not super fast]" — placeholder remains until provided
- ✅ Species overview video: `species-overview-video.mp4` (~38MB) — wired in Overview block; consider external hosting if repo size is a concern

**Important — asset import pattern:** All images are in `src/assets/` and should be imported as ES modules (Vite pattern), not referenced as runtime `/public/` paths. See T4 for updated guidance.

---

## T1 — Homepage layout audit & quick fixes

**Status:** ✅ Complete  
**Files:** `src/apps/public-website/pages/HomePage.tsx`, `src/apps/public-website/components/shared/VideoBackground.tsx`  
**Effort:** ~30–45 min  
**Dependencies:** None

### Changes

**Hero section (Section 1)**
- [x] Verify hero text is centered — `VideoBackground.tsx` keeps centered alignment with constrained overlay content width.
- [x] Video resize/rescale — added explicit `object-center` for consistent cropping; further tweaks can follow if Cat provides breakpoint feedback.

**Section 3 — "Why wildfire resilience?"**
- [x] Natural / Shared / Open sub-blocks not present in React implementation.
- [x] Removed redundant `why-resilience-secondary-image`; section has one visual slot plus text column.

**Section 5 — Domains grid**
- [x] Domain cards have NO icons rendered — `HomePage` does not pass `icon` prop.
- [x] Domain card accent colors wired from `domains.ts` hex values.

**Section 4 — "How to Use the WRI"**
- [x] Confirm card 3 title reads "Data Access" (not "Data Access and Integration"). No change needed.

**Last section — quote + map launcher**
- [x] Assess white space between the Domains grid and the quote section. Reduced spacing in `HomePage.tsx` by trimming `domains-overview` bottom padding and slightly reducing `quote-section` vertical padding.

---

## T2 — Species domain — content text edits

**Status:** ✅ Complete  
**Files:** `src/apps/public-website/pages/domain/domainPageData.ts`  
**Effort:** ~45 min  
**Dependencies:** None

All changes are text-only in `domainPageData.ts` under the `species` key. No component changes needed.

### Overview subtitle
- [x] Change `species.subtitle` from:
  > "Biodiversity is a core indicator of ecological resilience. This domain measures species conservation status and capacity to survive and recover from fire."

  to:
  > "This domain measures species conservation status and capacity to survive and recover from fire."

### Status section (`species.sections[0]`)
Current heading: `"Conservation Status and Baseline Vulnerability"` — keep as-is.

- [x] Remove second paragraph entirely:
  > "Status indicators are paired with life-history information to show which populations may be most sensitive to repeated fire exposure and which have stronger persistence capacity."

  Replace `paragraphs[1]` with an empty string or a short transitional sentence, OR restructure `DomainSectionContent` to support a single paragraph. **Preferred approach:** change `paragraphs` to `[string, string?]` (make second optional) or replace with a blank string `""` and suppress rendering when empty — confirm the template handles this gracefully.

- [x] Verify `paragraphs[0]` already says "conditions" (plural) — it does. No change needed.

- [x] Remove these three indicators from `sections[0].indicators`:
  - `"Trait-based resistance factors"`
  - `"Number of reproductive events"`
  - `"Bipartite life cycle"`

  Keep only: `"Conservation, threat, and extinction status (status)"`

### Resistance section (`species.sections[1]`)
Current heading: `"Morphology and Fire Resistance"`

- [x] **⚠️ Needs clarification before implementing:** The doc shows "Morphology and Fire" struck through, leaving just "Resistance" as the heading. However, since `DomainPageTemplate` already prepends `"Resistance: "` as a label, the rendered heading would be `"Resistance: Resistance"` — redundant. Options:
  - Keep heading as `"Morphology and Fire Resistance"` (no change, acceptable)
  - Change heading to something like `"Morphological Traits"` to avoid label clash
  - Ask Cat to confirm intended heading text before implementing

  **Implementation decision (Mar 6):** Used `"Morphological Traits"` to avoid a redundant `"Resistance: Resistance"` rendered heading while preserving section intent.

- [x] Update `paragraphs[0]` from:
  > "Morphological traits influence how species tolerate fire effects and recover afterward. Structural characteristics can support survival under heat, smoke, and habitat disturbance. Examples of traits include gills, wings, mass, and bark."

  to:
  > "Morphological traits influence how species tolerate fire effects. Examples of traits include gills, wings, mass, and bark."

- [x] Remove `paragraphs[1]` (or blank it):
  > "Including morphology ensures species resilience is measured through both ecological status and functional traits tied to resistance."

- [x] Remove all four indicators from `sections[1].indicators`:
  - `"Morphology: gills"`
  - `"Morphology: wings"`
  - `"Morphology: mass"`
  - `"Trait synthesis for resistance and recovery"`

  The examples now live in the paragraph text, not as bulleted indicators. If the indicators list becomes empty, assess how `DomainPageTemplate` renders an empty list and handle gracefully (suppress the "Resistance Indicators" block when empty).

### Recovery section (`species.sections[2]`)
Current heading: `"Life-History Traits and Recovery Potential"`

- [x] Update heading to: `"Recovery Potential"` (remove "Life-History Traits and")
  Note: template will render this as `"Recovery: Recovery Potential"` — acceptable per doc guidance.

- [x] Update `paragraphs[0]` from:
  > "Recovery after fire depends on whether species can reproduce, mature, and persist under changing post-fire conditions. This section captures key life-history factors linked to regeneration."

  to:
  > "Recovery after fire depends on whether species can reproduce, mature, and persist under post-fire conditions."

  (Remove "changing" and the second sentence about "key life-history factors.")

- [x] Update `paragraphs[1]` from:
  > "By combining reproductive timing and output metrics, the index helps identify species that may need stronger conservation attention in frequently burned landscapes."

  to:
  > "Examples include reproductive output, longevity, and range size."

- [x] Keep all four indicators unchanged:
  - `"Longevity"`
  - `"Reproductive output"`
  - `"Age to first reproduction"`
  - `"Asexual reproduction"`

---

## T3 — Livelihoods domain — content text verification

**Status:** ✅ Complete  
**Files:** `src/apps/public-website/pages/domain/domainPageData.ts`  
**Effort:** ~20–30 min  
**Dependencies:** None

Many of Cat's Livelihoods text changes appear to already be reflected in the React refactor. This task is a verification pass with patches applied where anything still needs updating.

### Checklist — verify each item, patch if not already correct

**Subtitle / Overview text**
- [x] Verify `livelihoods.subtitle` reads: "Livelihoods reflect how people make a living and are tied to well-being, security, and identity. This domain tracks how local economies absorb wildfire disruption and recover over time." — confirmed correct.

**Status section (`livelihoods.sections[0]`)**
- [x] Verify indicators. Currently: `["Percent employed and unemployment (status)", "Median income (status)", "Housing burden (status)"]`. Cat's feedback flags these items as being in the WRONG sections (resistance and recovery respectively). As long as they remain only in Status, no change needed — confirmed.

**Resistance section (`livelihoods.sections[1]`)**
- [x] Verify `paragraphs[0]` does NOT contain "supply chains". Currently reads: "Wildfires can interrupt tourism, agriculture, and service-sector work." — confirmed.
- [x] Verify indicators list does NOT contain "Median income as a financial buffer" or any median income indicator. Currently: `["Percent of jobs interrupted by fire and job vulnerability (resistance)"]` — confirmed.

**Recovery section (`livelihoods.sections[2]`)**
- [x] Verify heading contains "Recovery Potential". Currently: `"Economic Diversity and Recovery Potential"` — confirmed.
- [x] Verify indicators list does NOT contain "Housing burden as a recovery constraint". Currently: `["Diversity of jobs (recovery)"]` — confirmed.

**Outcome:** All checklist items verified in `src/apps/public-website/pages/domain/domainPageData.ts`. T3 marked complete with note: "Verified clean — no changes needed."

---

## T4 — Upgrade `ImageBlock` for real image support

**Status:** ✅ Complete  
**Files:** `src/apps/public-website/components/shared/ImageBlock.tsx`, `src/apps/public-website/assets/domainImages.ts`  
**Effort:** ~1 hr  
**Dependencies:** None (T5–T8 depend on this)

### Changes

**Update `ImageBlock` component:**
- [x] Add optional `src?: string` and `alt?: string` props
- [x] When `src` is provided, render an `<img>` element filling the container (use `object-cover`, maintain rounded corners and aspect ratio to match the placeholder's min-height)
- [x] When `src` is not provided, keep the existing orange gradient placeholder behavior unchanged
- [x] Keep `title` and `description` props working in placeholder mode; in image mode, use `alt` for accessibility and optionally render `title` as a visible caption below the image if a `showCaption?: boolean` prop is added (optional enhancement)

**Suggested new interface:**
```typescript
interface ImageBlockProps {
  id: string;
  title: string;
  description: string;
  src?: string;
  alt?: string;
  showCaption?: boolean;
  className?: string;
}
```

**Asset import pattern (Vite):**

All provided images are in `src/assets/`. Vite resolves these at build time and produces hashed URLs. The recommended pattern is to create a central asset index file:

```typescript
// src/apps/public-website/assets/domainImages.ts
import livelihoodsBanner from '../../../assets/livelihoods-banner-asset.jpg';
import livelihoodsStatus from '../../../assets/status-banner-asset.jpg';
import livelihoodsResistance from '../../../assets/resistance-banner-asset-1.jpg';
import livelihoodsRecovery from '../../../assets/recovery-banner-asset.jpg';
import speciesBanner from '../../../assets/species-asset.jpg';
import speciesStatus from '../../../assets/status-asset.jpg';
import speciesResistance from '../../../assets/resistance-banner-asset-2.jpg';
import speciesRecovery from '../../../assets/recovery-banner-asset-2.jpg';
import wriMapPreview from '../../../assets/wwri-scores-w-westcoast.png';

export {
  livelihoodsBanner, livelihoodsStatus, livelihoodsResistance, livelihoodsRecovery,
  speciesBanner, speciesStatus, speciesResistance, speciesRecovery,
  wriMapPreview,
};
```

This file is then imported in `domainPageData.ts` and `HomePage.tsx` to wire images into the data layer. **Do not** use hardcoded `/public/...` path strings — the images are not in the `public/` folder.

- [x] Create `src/apps/public-website/assets/domainImages.ts` with the imports above

---

## T5 — Domain page banner photo support

**Status:** ✅ Complete (2026-03-13 16:34 PDT)  
**Files:** `src/apps/public-website/pages/domain/DomainPageTemplate.tsx`, `src/apps/public-website/pages/domain/domainPageData.ts`  
**Effort:** ~1 hr  
**Dependencies:** T4 complete

**Assets (both already in `src/assets/`):**
- `livelihoods-banner-asset.jpg` — town square with American flag → Livelihoods banner
- `species-asset.jpg` — black bear in mountain meadow → Species banner

### Changes

**Update `DomainPageContent` type in `domainPageData.ts`:**
- [x] Add optional `bannerImageSrc?: string` field

**Update `DomainPageTemplate.tsx` hero section:**
- [x] When `bannerImageSrc` is provided, render the domain title area over a full-bleed photo background with a dark/gradient overlay (photo fills the hero `ColorBlock`, title and accent bar overlay on top)
- [x] When `bannerImageSrc` is not provided, keep existing flat cream background + accent bar behavior
- [x] Cat's note: "make the banner smaller, no descriptor" — the current template already omits the subtitle from the banner area; applied reduced vertical padding for photo banners (`py-8 md:py-10`)

**Wire up banner images** (use Vite imports from `domainImages.ts` created in T4):
- [x] `livelihoods.bannerImageSrc = livelihoodsBanner`
- [x] `species.bannerImageSrc = speciesBanner`

---

## T6 — Livelihoods section image wiring

**Status:** ✅ Complete (2026-03-15 15:18 PDT)  
**Files:** `src/apps/public-website/pages/domain/domainPageData.ts`, `src/apps/public-website/pages/domain/DomainPageTemplate.tsx`  
**Effort:** ~1 hr  
**Dependencies:** T4 complete (for `domainImages.ts` + updated `ImageBlock`)

**Assets (all already in `src/assets/`):**
- `status-banner-asset.jpg` — elderly couple reviewing finances → Livelihoods status section
- `resistance-banner-asset-1.jpg` — farm tractor at golden sunset → Livelihoods resistance section
- `recovery-banner-asset.jpg` — abandoned farmhouse in field → Livelihoods recovery section

**Note:** Livelihoods overview image is still pending Cat's creation — leave that `ImageBlock` as a placeholder.

**Verification:** Dev build checked; all three section images render correctly; overview placeholder unchanged.

### Approach: data-driven (preferred)
Add `sectionImageSrc?: string` and `sectionImageAlt?: string` to `DomainSectionContent`. `DomainPageTemplate` reads these and passes them to the section's `ImageBlock`. All image wiring stays in `domainPageData.ts`.

### Changes
- [x] Add `sectionImageSrc?: string` and `sectionImageAlt?: string` to `DomainSectionContent` interface in `domainPageData.ts`
- [x] Update `DomainPageTemplate` to pass `src` and `alt` to the section `ImageBlock` when available
- [x] Wire images in `domainPageData.ts` under `livelihoods.sections` (use Vite imports from `domainImages.ts`):
  - `sections[0]` (Status): `sectionImageSrc: livelihoodsStatus`, `sectionImageAlt: "Elderly couple reviewing household finances"`
  - `sections[1]` (Resistance): `sectionImageSrc: livelihoodsResistance`, `sectionImageAlt: "Farm tractor at golden sunset in smoky field"`
  - `sections[2]` (Recovery): `sectionImageSrc: livelihoodsRecovery`, `sectionImageAlt: "Abandoned farmhouse in overgrown field"`

---

## T7 — Species section image wiring

**Status:** ✅ Complete (2026-03-15 15:30 PDT)  
**Files:** `src/apps/public-website/pages/domain/domainPageData.ts`  
**Effort:** ~30 min  
**Dependencies:** T4 complete + T6 schema changes (`sectionImageSrc`/`sectionImageAlt` fields) done

**Assets (all already in `src/assets/`):**
- `status-asset.jpg` — monarch butterfly on milkweed → Species status section
- `resistance-banner-asset-2.jpg` — redwood trees looking up → Species resistance section
- `recovery-banner-asset-2.jpg` — cottontail rabbit in dry grass → Species recovery section

### Changes
- [x] Wire images in `domainPageData.ts` under `species.sections` (use Vite imports from `domainImages.ts`):
  - `sections[0]` (Status): `sectionImageSrc: speciesStatus`, `sectionImageAlt: "Monarch butterfly on milkweed flower"`
  - `sections[1]` (Resistance): `sectionImageSrc: speciesResistance`, `sectionImageAlt: "Redwood trees viewed from forest floor"`
  - `sections[2]` (Recovery): `sectionImageSrc: speciesRecovery`, `sectionImageAlt: "Cottontail rabbit in dry grass habitat"`

**Verification:** Data wiring completed for all three Species sections; `DomainPageTemplate` already supports section image rendering from T6 schema/template updates.

---

## T8 — Landing page visual assets

**Status:** 🟡 Partial (Section 3 ready; Section 2 still blocked on teaser video from Cat)  
**Files:** `src/apps/public-website/pages/HomePage.tsx`  
**Effort:** ~45 min total  
**Dependencies:** T4 complete + T1 complete (Section 3 layout cleanup)

### Section 3 — WRI map image ✅ Complete

**Asset:** `src/assets/wwri-scores-w-westcoast.png` — WRI score choropleth map + domain wheel pie chart

- [x] Import `wriMapPreview` from `domainImages.ts` (created in T4) in `HomePage.tsx`
- [x] Update `why-resilience-image` `ImageBlock` to use `src={wriMapPreview}` and `alt="WRI score map showing Western US with domain scores wheel"`
- [x] Confirm T1 removed the redundant `why-resilience-secondary-image` before doing this step

### Section 2 — teaser video 🔴 Blocked on Cat

**Blocked:** Cat's teaser video link was in the Google Doc as a hyperlink that wasn't captured in screenshots. Confirm with Cat:
- Is the teaser a self-hosted video file (`.mp4`) or an embed (YouTube/Vimeo URL)?
- If self-hosted, add to `src/assets/` and import via Vite

**Code change needed (once asset confirmed):**
- [ ] The `what-is-wri-image` `ImageBlock` currently shows a placeholder. Depending on asset type:
  - **If still image or video thumbnail:** update to use `src` prop added in T4
  - **If full video embed (YouTube/Vimeo):** add a `VideoEmbedBlock` component (iframe-based) alongside `ImageBlock`, or extend `ImageBlock` with an `embedUrl` prop that renders an iframe instead of `<img>`
  - **If self-hosted `.mp4`:** consider a `<video>` element with `autoPlay muted loop playsInline` similar to the hero `VideoBackground`

---

## T9 — Species overview video

**Status:** ✅ Complete (2026-03-16)  
**Files:** `src/apps/public-website/pages/domain/DomainPageTemplate.tsx`, `src/apps/public-website/pages/domain/domainPageData.ts`, `src/apps/public-website/assets/domainImages.ts`, `src/assets/species-overview-video.mp4`  
**Effort:** ~30 min  
**Dependencies:** T4 (domainImages), T5 (domain page structure)

**Asset:** `species-overview-video.mp4` (~38MB) — 30-second Species domain overview video from Cat

### Changes
- [x] Add `overviewVideoSrc`, `overviewVideoPosterSrc`, `overviewMediaAlt` to `DomainPageContent` schema
- [x] Import and export video in `domainImages.ts`; wire Species domain in `domainPageData.ts`
- [x] Update `DomainPageTemplate` to render `<video>` with controls when `overviewVideoSrc` is set; other domains keep `ImageBlock` placeholder
- [x] Fix height shrink on play by using `aspect-video` on wrapper and `object-cover` on video element

### Video file size & deployment
The video is ~38MB. GitHub allows files up to 100MB, so it *can* be committed. If repo size or clone speed is a concern:
- **Option A:** Commit as-is (works, but increases repo size)
- **Option B:** Host externally (S3, CDN, Vimeo unlisted) and reference via URL — would require changing the data layer to support `overviewVideoUrl` instead of bundled asset
- **Option C:** Use Git LFS for large binaries (requires LFS setup in repo)

For deployment: Vite bundles the video into `dist/` at build time. If you deploy by copying the built output (e.g. `dist/` → server), the video is included automatically — no manual copy needed. Manual copy is only needed if your deploy process skips the build or uses a different asset pipeline.

---

## Future Considerations (Not Actionable Yet)

These items were noted in the feedback doc as ideas or deferred work, not immediate tasks:

**Section 5 — 15-second domain panel videos:** Cat raised this as a brainstorm: "would it be nice for each of these 8 panels to have a little 15 second video instead of words? I'm not sure it might be overwhelming…" Not a committed change — if Cat decides to pursue this, it would require a `VideoCard` variant of `DomainCard` and 8 short video assets per domain. Hold for a future tracker item once Cat confirms direction.

**Overview videos for all domain pages:** Cat's feedback specifies that each domain's Overview color block should contain a "~30 second video describing the domain as a whole." Species is done (T9): `DomainPageTemplate` now supports optional `overviewVideoSrc` and renders a native `<video>` when provided. Other domains still show the `ImageBlock` placeholder. As each domain's overview video becomes available, wire it via `domainPageData.ts` using the same pattern.

---

## Open Questions for Cat

1. **Species Resistance section heading:** The doc shows "Morphology and Fire" struck through, leaving "Resistance." Since the template already adds "Resistance: " as a label prefix, the rendered heading would be "Resistance: Resistance" — redundant. What should the section heading text be? Options: keep "Morphology and Fire Resistance", rename to "Morphological Traits", or something else.

2. **Section 2 teaser video:** Is this a self-hosted `.mp4` or a YouTube/Vimeo embed? What's the URL or file?

3. **Section 3 WRI map image:** Is there a static version, or do we screenshot the dashboard?

4. **Livelihoods Overview asset:** Doc notes "[I need to make this and it's not super fast]" — is there an ETA or should we keep the placeholder until further notice?

5. **Overview videos for domains:** Species overview video received and wired (T9). Other domains: same pattern when assets are provided.

---

## Asset Receipt Checklist

| File | Current Path | Task | Status |
|------|-------------|------|--------|
| Livelihoods banner | `src/assets/livelihoods-banner-asset.jpg` | T5 | ✅ Received |
| Species banner | `src/assets/species-asset.jpg` | T5 | ✅ Received |
| Livelihoods status | `src/assets/status-banner-asset.jpg` | T6 | ✅ Received |
| Livelihoods resistance | `src/assets/resistance-banner-asset-1.jpg` | T6 | ✅ Received |
| Livelihoods recovery | `src/assets/recovery-banner-asset.jpg` | T6 | ✅ Received |
| Species status | `src/assets/status-asset.jpg` | T7 | ✅ Received |
| Species resistance | `src/assets/resistance-banner-asset-2.jpg` | T7 | ✅ Received |
| Species recovery | `src/assets/recovery-banner-asset-2.jpg` | T7 | ✅ Received |
| Section 3 WRI map | `src/assets/wwri-scores-w-westcoast.png` | T8 | ✅ Received |
| Section 2 teaser video | TBD — video file or embed URL | T8 | 🔴 Still needed from Cat |
| Livelihoods overview asset | TBD | T6 | 🔴 Cat still creating this |
| Species overview video | `src/assets/species-overview-video.mp4` (~38MB) | T9 | ✅ Received & wired |
