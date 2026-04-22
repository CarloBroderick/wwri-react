import { Link } from "react-router-dom";
import compositeDonut from "../../../assets/public-website-redesign/icons/composite-donut.svg";
import domainStack from "../../../assets/public-website-redesign/icons/domain-stack.svg";
import DomainGrid from "../components/shared/DomainGrid";
import SectionHeader from "../components/shared/SectionHeader";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

/** Domains overview page — matches PDF pages 4/6/8 combined (the most complete layout). */
function DomainsPage() {
  return (
    <div id="public-website-redesign-domains-page" className="mx-auto max-w-[1200px] px-6 py-16">
      <section
        id="public-website-redesign-domains-intro"
        className="grid items-start gap-10 md:grid-cols-[1fr_1.3fr]"
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
            className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#333]"
          >
            <p>
              Working with experts, the team identified eight key areas—called{" "}
              <strong>domains</strong>—that capture how communities and landscapes respond to
              wildfire: <strong>Infrastructure, Communities, Livelihoods, Sense of Place,
              Species, Habitats, Water,</strong> and <strong>Air.</strong>
            </p>
            <p>
              The index combines data from these <strong>domains</strong> to create a single
              composite score for a given area (see example).
            </p>
          </div>
        </div>
        <div
          id="public-website-redesign-domains-intro-visual"
          className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_1fr]"
        >
          <img
            id="public-website-redesign-domain-stack"
            src={domainStack}
            alt="Stack of the eight domain layers"
            className="mx-auto w-full max-w-[300px]"
          />
          <img
            id="public-website-redesign-composite-donut"
            src={compositeDonut}
            alt="Example composite WRI score donut"
            className="mx-auto w-full max-w-[260px]"
          />
        </div>
      </section>

      <hr id="public-website-redesign-domains-rule" className="mx-auto my-16 h-[3px] w-16 border-0 bg-[#b3c167]" />

      <section
        id="public-website-redesign-domains-reflects"
        className="grid items-start gap-10 md:grid-cols-[1fr_1fr]"
      >
        <div id="public-website-redesign-domains-reflects-text" className="space-y-6 text-[15px] leading-relaxed text-[#333]">
          <div id="public-website-redesign-domains-reflects-summary">
            <div className="mb-2 font-semibold text-[#22402c]">Each domain reflects both:</div>
            <ul className="space-y-2 pl-0">
              <li className="flex gap-3">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b3c167]" />
                <span>
                  Current conditions (<strong>status</strong>)
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b3c167]" />
                <span>
                  The ability to <strong>resist</strong> harm and <strong>recover</strong> after
                  wildfire (<strong>resilience</strong>)
                </span>
              </li>
            </ul>
          </div>
          <p>
            Not every component applies in every case. Some <strong>domains</strong> do not include{" "}
            <strong>status</strong> when there is no single “ideal” condition, and others may not
            include recovery due to limited data.
          </p>
          <p>
            Select a <strong>domain</strong> to learn more about why it matters, how it’s measured,
            and example datasets.
          </p>
          <p>
            Looking for more detail? Check out our{" "}
            <Link
              id="public-website-redesign-domains-methodology-link"
              to={REDESIGN_ROUTES.methodology}
              className="font-semibold text-[#6f8a3f] underline underline-offset-4 hover:text-[#22402c]"
            >
              Methodology
            </Link>{" "}
            page!
          </p>
        </div>
        <div id="public-website-redesign-domains-tiles" className="w-full">
          <DomainGrid id="public-website-redesign-domains-overview-tiles" size="md" columns={2} />
        </div>
      </section>
    </div>
  );
}

export default DomainsPage;
