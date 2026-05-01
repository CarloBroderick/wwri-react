import { Link } from "react-router-dom";
import pineRegrowthDomainsImage from "../../../assets/public-website-redesign/images/domains-landing/pine-regrowth-domains.jpg";
import DomainGrid from "../components/shared/DomainGrid";
import MossDivider from "../components/shared/MossDivider";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

/**
 * Domains overview — Canva spec pages 4–8.
 *   • Section 1: "What are the Index Domains?" + intro copy, with the
 *     pine regrowth image on the right.
 *   • Section 2: continued copy + clickable 2×4 grid of the Canva Domain Squares
 *     (rendered by DomainGrid — those PNGs are the "Domain Squares Stacked"
 *     visual, broken out into individually hyperlinked tiles).
 */
function DomainsPage() {
  return (
    <div id="public-website-redesign-domains-page" className="mx-auto max-w-[1400px] px-6 py-16">
      <section
        id="public-website-redesign-domains-intro-1"
        className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-stretch"
      >
        <div id="public-website-redesign-domains-intro-text">
          <header id="public-website-redesign-domains-intro-heading">
            <h2
              id="public-website-redesign-domains-intro-heading-title"
              className="font-Poppins text-[clamp(2.25rem,4.5vw,2.75rem)] font-bold leading-tight text-wriForest"
            >
              What are the Index Domains?
            </h2>
            <MossDivider
              id="public-website-redesign-domains-intro-heading-divider"
              className="my-3"
              widthClassName="w-16"
            />
          </header>
          <div
            id="public-website-redesign-domains-intro-body"
            className="mt-6 space-y-4 font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
          >
            <p>
              Working with experts, the team identified eight key areas—called{" "}
              <strong>domains</strong>—that capture how communities and landscapes respond to
              wildfire: <strong>Infrastructure, Communities, Livelihoods, Sense of Place,
              Species, Habitats, Water,</strong> and <strong>Air.</strong>
            </p>
          </div>
        </div>
        <div
          id="public-website-redesign-domains-pine-regrowth-wrap"
          className="mx-auto w-full max-w-[680px] md:relative md:h-full md:max-w-none"
        >
          <img
            id="public-website-redesign-domains-pine-regrowth-image"
            src={pineRegrowthDomainsImage}
            alt="Young pine saplings regrowing after a wildfire"
            className="w-full object-cover md:absolute md:inset-0 md:h-full md:object-right"
          />
        </div>
      </section>

      <section
        id="public-website-redesign-domains-intro-2"
        className="mt-20 grid gap-10 md:grid-cols-[2fr_1fr] md:items-start"
      >
        <div
          id="public-website-redesign-domains-reflects-text"
          className="space-y-5 font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
        >
          <MossDivider
            id="public-website-redesign-domains-reflects-divider"
            widthClassName="w-16"
          />
          <div id="public-website-redesign-domains-reflects-summary">
            <div className="mb-2 font-semibold text-wriForest">Each domain reflects both:</div>
            <ul className="space-y-2 pl-0">
              <li className="flex gap-3">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-wriMoss" />
                <span>
                  Current conditions (<strong>status</strong>)
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-wriMoss" />
                <span>
                  The ability to <strong>resist</strong> harm and <strong>recover</strong> after
                  wildfire (<strong>resilience</strong>)
                </span>
              </li>
            </ul>
          </div>
          <p>
            Not every component applies in every case. Some <strong>domains</strong> do not include{" "}
            <strong>status</strong> when there is no single "ideal" condition, and others may not
            include recovery due to limited data.
          </p>
          <p>
            Select a <strong>domain</strong> to learn more about why it matters, how it's
            measured, and example datasets.
          </p>
          <p>
            Looking for more detail? Check out our{" "}
            <Link
              id="public-website-redesign-domains-methodology-link"
              to={REDESIGN_ROUTES.methodology}
              className="font-bold text-wriMoss underline underline-offset-4 hover:text-wriForest"
            >
              Methodology
            </Link>{" "}
            page!
          </p>
        </div>
        <div
          id="public-website-redesign-domains-tiles"
          className="mx-auto w-full max-w-[230px] md:mx-0 md:ml-auto md:max-w-[230px]"
        >
          <DomainGrid id="public-website-redesign-domains-overview-tiles" columns={2} />
        </div>
      </section>
    </div>
  );
}

export default DomainsPage;
