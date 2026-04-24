import { Link } from "react-router-dom";
import layeredDomainsMap from "../../../assets/public-website-redesign/images/domains-landing/layered-domains-map.png";
import DomainGrid from "../components/shared/DomainGrid";
import MossDivider from "../components/shared/MossDivider";
import SectionHeader from "../components/shared/SectionHeader";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

/**
 * Domains overview — Canva spec pages 4–8.
 *   • Section 1: "Domains / What are the Index Domains?" + intro copy, with the
 *     "Layered Domains and Map" graphic on the right.
 *   • Section 2: continued copy + clickable 2×4 grid of the Canva Domain Squares
 *     (rendered by DomainGrid — those PNGs are the "Domain Squares Stacked"
 *     visual, broken out into individually hyperlinked tiles).
 */
function DomainsPage() {
  return (
    <div id="public-website-redesign-domains-page" className="mx-auto max-w-[1200px] px-6 py-16">
      <section
        id="public-website-redesign-domains-intro-1"
        className="grid items-start gap-10 md:grid-cols-[1fr_1fr]"
      >
        <div id="public-website-redesign-domains-intro-text">
          <SectionHeader
            id="public-website-redesign-domains-intro-heading"
            eyebrow="Domains"
            title={
              <>
                What are the
                <br />
                Index Domains?
              </>
            }
          />
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
            <p>
              The index combines data from these <strong>domains</strong> into a single composite
              score for each area (see example).
            </p>
          </div>
        </div>
        <img
          id="public-website-redesign-domains-layered-map"
          src={layeredDomainsMap}
          alt="Eight translucent domain layers stacked above a map of the index region"
          className="mx-auto w-full max-w-[480px]"
        />
      </section>

      <section
        id="public-website-redesign-domains-intro-2"
        className="mt-20 grid items-start gap-10 md:grid-cols-[1fr_1fr]"
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
        <div id="public-website-redesign-domains-tiles" className="w-full">
          <DomainGrid id="public-website-redesign-domains-overview-tiles" columns={2} />
        </div>
      </section>
    </div>
  );
}

export default DomainsPage;
