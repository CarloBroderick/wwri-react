import { Link } from "react-router-dom";
import MossDivider from "../components/shared/MossDivider";
import PublicationLinkButtons from "../components/shared/PublicationLinkButtons";
import { PUBLICATIONS } from "../config/publications";
import { REDESIGN_ROUTES } from "../routes/routeConfig";
import publicationsHero from "../../../assets/public-website-redesign/images/methodology/methodology-hero.jpg";

/**
 * 📚 Publications
 * =============================================================================
 * Landing page for the WWRI team's peer-reviewed papers. A skinny image hero
 * mirrors the Methodology page entry pattern, followed by a data-driven list of
 * publication cards. Each card surfaces the journal, authors, an abstract
 * snippet, headline findings, and key links — and deep-links to a full detail
 * page (`/media/publications/<slug>`). New papers are added in
 * `config/publications.ts`; the list and detail pages update automatically.
 */
function PublicationsPage() {
  return (
    <div id="public-website-redesign-publications-page" className="mx-auto max-w-[1400px] px-6 py-12 md:py-16">
      {/* ===== Hero (skinny variant of the Methodology hero) ============== */}
      <section
        id="publications-hero"
        className="relative overflow-hidden rounded-[28px] bg-wriCanopy shadow-[0_30px_80px_-40px_rgba(31,42,35,0.6)]"
      >
        <img
          id="publications-hero-image"
          src={publicationsHero}
          alt="Forested landscape of the American West"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div
          id="publications-hero-scrim"
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-wriCanopy/95 via-wriCanopy/70 to-wriForest/20"
        />
        <div id="publications-hero-content" className="relative px-7 py-7 md:px-14 md:py-8">
          <div className="max-w-2xl">
            <p
              id="publications-hero-eyebrow"
              className="font-Montserrat text-xs font-semibold uppercase tracking-[0.3em] text-wriMoss"
            >
              Research
            </p>
            <h1
              id="public-website-redesign-publications-heading-title"
              className="mt-3 font-Poppins text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.05] text-wriSmokeFog"
            >
              Publications
            </h1>
            <MossDivider id="publications-hero-divider" className="mt-4" widthClassName="w-20" />
            <p
              id="publications-hero-subtitle"
              className="mt-4 max-w-xl font-Poppins text-[clamp(15px,1.4vw,17px)] leading-relaxed text-wriSmokeFog/85"
            >
              Peer-reviewed science from the Wildfire Resilience Index team, translating
              data into actionable insight for safer, more resilient communities.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Publication list =========================================== */}
      <section id="public-website-redesign-publications-list" className="mt-12 flex flex-col gap-8 md:mt-16">
        {PUBLICATIONS.map((publication) => (
          <article
            key={publication.slug}
            id={`publication-card-${publication.slug}`}
            className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-wriCanopy/10 transition-all hover:shadow-lg hover:shadow-wriCanopy/10 hover:ring-wriMoss/40"
          >
            <div className="flex flex-col gap-6 p-7 md:p-9">
              {/* 🏷️ Meta row: status badge + journal + year */}
              <div
                id={`publication-card-${publication.slug}-meta`}
                className="flex flex-wrap items-center gap-3 font-Montserrat text-[13px]"
              >
                <span className="inline-flex items-center rounded-full bg-wriForest px-3 py-1 font-bold uppercase tracking-[0.1em] text-white">
                  {publication.status}
                </span>
                <span className="font-bold text-wriSage">{publication.journalShort}</span>
                <span aria-hidden className="text-wriCanopy/30">
                  &bull;
                </span>
                <span className="text-wriCanopy/60">{publication.year}</span>
              </div>

              {/* 📰 Title links straight to the detail page */}
              <div>
                <h2
                  id={`publication-card-${publication.slug}-title`}
                  className="font-Poppins text-[clamp(1.4rem,2.6vw,1.9rem)] font-bold leading-tight text-wriForest"
                >
                  <Link
                    to={REDESIGN_ROUTES.publication(publication.slug)}
                    className="transition-colors hover:text-wriMossMenuHighlight focus:outline-none focus-visible:underline"
                  >
                    {publication.title}
                  </Link>
                </h2>
                <p
                  id={`publication-card-${publication.slug}-authors`}
                  className="mt-2 font-Poppins text-[15px] italic leading-relaxed text-wriCanopy/70"
                >
                  {publication.authors}
                </p>
              </div>

              {/* 📝 Abstract snippet */}
              <p
                id={`publication-card-${publication.slug}-snippet`}
                className="max-w-4xl font-Poppins text-[clamp(15px,1.4vw,17px)] leading-relaxed text-wriCanopy"
              >
                {publication.abstractSnippet}
              </p>

              {/* ✨ Headline findings as chips */}
              {publication.highlights.length > 0 ? (
                <ul
                  id={`publication-card-${publication.slug}-highlights`}
                  className="flex flex-wrap gap-2"
                >
                  {publication.highlights.slice(0, 3).map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full bg-wriSmokeFog px-3.5 py-1.5 font-Montserrat text-[12.5px] font-medium text-wriForest ring-1 ring-wriForest/10"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* 🔗 Links + read-more */}
              <div className="flex flex-col gap-5 border-t border-wriForest/10 pt-6 md:flex-row md:items-center md:justify-between">
                <PublicationLinkButtons
                  id={`publication-card-${publication.slug}-links`}
                  links={publication.links}
                  variant="compact"
                />
                <Link
                  id={`publication-card-${publication.slug}-readmore`}
                  to={REDESIGN_ROUTES.publication(publication.slug)}
                  className="inline-flex shrink-0 items-center gap-1.5 font-Montserrat text-sm font-bold uppercase tracking-[0.08em] text-wriMossMenuHighlight"
                >
                  Read more
                  <span aria-hidden className="text-base leading-none transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default PublicationsPage;
