import { ReactNode, useState } from "react";
import DownArrow from "../../../assets/DownArrow.svg";
import RightSideArrow from "../../../assets/RightSideArrow.svg";
import MossDivider from "../components/shared/MossDivider";
import SectionHeader from "../components/shared/SectionHeader";

type FaqItem = { id: string; question: string; answer: ReactNode };
type FaqSection = { id: string; heading: string; items: FaqItem[] };

const FAQ_SECTIONS: FaqSection[] = [
  {
    id: "understanding",
    heading: "Understanding the Index",
    items: [
      {
        id: "what-is-wri",
        question: "What is the Wildfire Resilience Index?",
        answer: (
          <>
            <p>
              The Wildfire Resilience Index (WRI) is a free, open-access tool that measures wildfire
              resilience for every community and landscape in the U.S. and Canadian West, at 90-meter
              resolution. It produces a single score from 0 to 100 for any geography you choose,
              broken down across eight socio-ecological domains and split into two components:{" "}
              <strong>resistance</strong> (the capacity to withstand fire) and{" "}
              <strong>recovery</strong> (the capacity to regain function afterward).
            </p>
            <p>
              The WRI covers the full landscape — urban, rural, wilderness, protected, and everything
              in between. No place is left out.
            </p>
            <p>
              In our online dashboard, we have provided pre-calculated scores for census tracts,
              counties, congressional districts, or states. If you need a specific geography for
              planning or assessment purposes, feel free to reach out to us at{" "}
              <a href="mailto:wri@nceas.ucsb.edu" className="font-semibold text-wriMoss hover:underline">
                wri@nceas.ucsb.edu
              </a>{" "}
              and we will be happy to discuss!
            </p>
          </>
        ),
      },
      {
        id: "diff-from-risk-map",
        question: "How is this different from a fire risk or hazard map?",
        answer: (
          <>
            <p>
              Fire risk and hazard maps tell you where fire is likely to burn, how intensely, and
              under what conditions. The WRI measures something different: what happens to people and
              ecosystems when fire does occur. How well-equipped is this place to withstand fire
              impacts? How well-positioned is it to recover?
            </p>
            <p>
              The WRI is designed to be used alongside hazard maps, not instead of them. Together
              they tell you not just where fire is likely, but where the consequences will be hardest
              to absorb — and hardest to recover from.
            </p>
          </>
        ),
      },
      {
        id: "social-and-ecological",
        question: "Why does the WRI measure both social and ecological resilience together?",
        answer: (
          <>
            <p>
              We measure both social and ecological resilience together because wildfire is
              transboundary. A fire moving through a landscape affects infrastructure, communities,
              livelihoods, our connection to the landscape, species, habitats, water and air
              simultaneously. Similarly, the capacity to withstand and recover from that fire is
              shaped by all of those systems simultaneously.
            </p>
            <p>
              Treating social and ecological resilience separately produces an incomplete picture. A
              community with strong social networks but degraded watershed function faces a different
              set of vulnerabilities than one with fire-adapted habitat but inadequate building
              codes. The WRI puts both on the table so that planners and managers can see the full
              picture and target interventions accordingly.
            </p>
          </>
        ),
      },
      {
        id: "resistance-vs-recovery",
        question: 'What does "resistance" vs. "recovery" mean in plain language?',
        answer: (
          <>
            <p>
              <strong>Resistance</strong> is the capacity to withstand fire, essentially to limit
              damage. For example, fire-resistant building materials, defensible space, healthy
              fire-adapted vegetation, clean baseline air quality.
            </p>
            <p>
              <strong>Recovery</strong> is the capacity to regain function after fire, or the
              potential to bounce back. For example, access to federal disaster aid, income and
              homeownership levels, presence of resprouting plant species, strong community
              organizations.
            </p>
            <p>
              Most resilience tools collapse these into a single number, which hides whether a place
              gets its score from being well-protected before fire or from being able to rebuild
              after. These require completely different interventions. The WRI shows both separately,
              by domain, so you can target the right one.
            </p>
          </>
        ),
      },
      {
        id: "what-score-means",
        question: "What does my score actually mean?",
        answer: (
          <>
            <p>
              The score for your selected geography is the average WRI score. But what arguably
              matters more than the number is what it's made of. A score of 73 built from high
              habitat resilience but low infrastructure resilience requires a completely different
              response than a 73 built from strong community networks and water governance but
              degraded species populations.
            </p>
            <p>
              Use the overall score to understand where a place sits relative to others. Use the
              domain scores to understand why, and what to do about it.
            </p>
            <p>
              Scores below 100 don't necessarily indicate a problem requiring intervention; they
              reflect the full range of conditions across a diverse landscape. The most useful
              question is not "is this score good or bad?" but "which domains are lowest, and what
              does that tell us about where to act?"
            </p>
            <p>Remember, the score is just the starting point.</p>
          </>
        ),
      },
      {
        id: "high-score-safety",
        question: "Does a high WRI score mean my community is safe from wildfire?",
        answer: (
          <>
            <p>
              No. A high WRI score reflects strong capacity to withstand and recover from wildfire
              under current conditions. It is <strong>not</strong> a guarantee of safety, and it
              should not be interpreted as one.
            </p>
            <p>
              Wildfire regimes are shifting rapidly due to climate change. Extreme events like severe
              drought, windstorm-driven fires, and compounding stressors can overwhelm even highly
              resilient systems. Additionally, the WRI has not yet been hindcast against the
              historical record of actual wildfire impacts, so we cannot yet confirm empirically how
              well scores predict outcomes. That validation work is underway.
            </p>
            <p>
              Use the WRI as a structured, data-driven starting point for investment and planning
              decisions, not as a prediction of what will happen in any specific fire event.
            </p>
          </>
        ),
      },
      {
        id: "missing-domain-scores",
        question: "Not all domains have scores for every place — why?",
        answer: (
          <>
            <p>
              The WRI only scores domains that are relevant to a given location. For example:
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Infrastructure, Communities, Livelihoods, and Air are only assessed where people
                live.
              </li>
              <li>Habitats excludes built environments and croplands.</li>
              <li>
                Sense of Place: Iconic Species and Species are assessed across each species' range,
                not just within jurisdictional boundaries.
              </li>
            </ul>
            <p>
              This ensures that places are not penalized for domains that don't apply to them. A
              national park with no permanent residents won't receive a Communities score; a fully
              urbanized census tract won't receive a Habitats score.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "using-the-tool",
    heading: "Using the Tool",
    items: [
      {
        id: "look-up-place",
        question: "How do I look up my place?",
        answer: (
          <p>
            Go to{" "}
            <a
              href="https://wildfireindex.org"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-wriMoss hover:underline"
            >
              wildfireindex.org
            </a>{" "}
            and use the dashboard to search for your geography of interest. You can search by name or
            just click around on the map! You'll see an overall WRI score, individual domain scores,
            and the resistance and recovery breakdown within each domain.
          </p>
        ),
      },
      {
        id: "available-geographies",
        question: "What geographies are available?",
        answer: (
          <>
            <p>
              The WRI has pre-calculated scores for over thousands of geographies that are viewable on
              our dashboard including:
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Census tracts</li>
              <li>Counties</li>
              <li>US Congressional districts</li>
              <li>CAN ridings</li>
              <li>States, provinces, and territories</li>
            </ul>
            <p>
              In addition, we have calculated scores for ecoregions, national parks, and watersheds,
              which are available online to download. If you need a geography that isn't
              pre-calculated, the underlying 90-meter pixel data is available for download so you
              can aggregate to any boundary you need. If you need assistance, please reach out!
            </p>
          </>
        ),
      },
      {
        id: "download-data",
        question: "Can I download the data?",
        answer: (
          <p>
            Yes! The underlying pixel-level data, domain scores, aggregated geographies, full methods
            documentation, and all code are freely available for download on KNB. For code
            specifically, please visit our GitHub repo (TBD). There are no paywalls, no registration
            requirements, and no restrictions on use.
          </p>
        ),
      },
      {
        id: "data-currency",
        question: "How current is the data, and when will it be updated?",
        answer: (
          <>
            <p>
              We anticipate updating the WRI annually. This current release is for the year 2025.
              However, some individual datasets are updated annually, others less frequently. The
              full list of data sources, their spatial and temporal resolution, and their update
              frequency is documented in the methods on the website.
            </p>
            <p>
              The WRI framework is designed to be updated over time as new data becomes available and
              as management interventions, climate conditions, and policies evolve. We will
              communicate update timelines as they are confirmed.
            </p>
          </>
        ),
      },
      {
        id: "cwpp-planning",
        question: "Can I use the WRI for CWPP planning?",
        answer: (
          <p>
            The domain structure maps directly onto the kinds of questions Community Wildfire
            Protection Plans are trying to answer. We're genuinely curious whether WRI scores could
            help practitioners prioritize which elements of a CWPP to strengthen first. If you're
            working on a CWPP and want to test it against your local knowledge, we'd love to hear
            what you find.
          </p>
        ),
      },
      {
        id: "compare-places",
        question:
          "Can I use the WRI to compare places across different states or land tenures?",
        answer: (
          <p>
            Yes — that's one of the WRI's core design goals. Because it uses a consistent framework
            and data sources across all geographies, it enables apples-to-apples comparison across
            jurisdictions, administrative boundaries, and land tenure systems that don't usually
            share a common baseline. This makes it particularly useful for cross-boundary planning,
            regional coordination, and equity-focused investment decisions.
          </p>
        ),
      },
      {
        id: "agency-briefing",
        question: "I work for a federal or state agency. How do I get a briefing or demo?",
        answer: (
          <p>
            Contact us at{" "}
            <a href="mailto:wri@nceas.ucsb.edu" className="font-semibold text-wriMoss hover:underline">
              wri@nceas.ucsb.edu
            </a>
            . We're happy to walk your team through the tool, discuss specific use cases relevant to
            your agency's work, or support integration of WRI scores into planning processes.
          </p>
        ),
      },
    ],
  },
  {
    id: "the-science",
    heading: "The Science",
    items: [
      {
        id: "what-data",
        question: "What data does the WRI draw on?",
        answer: (
          <p>
            The WRI integrates nearly 100 publicly available datasets spanning satellite imagery,
            census data, building code records, species range maps and trait data, air quality
            monitoring, and hydrological gauge data. Every data source is documented in full on the
            website, including its spatial resolution, temporal coverage, and update frequency.
          </p>
        ),
      },
      {
        id: "why-90m",
        question: "Why 90-meter resolution?",
        answer: (
          <p>
            90 meters is the finest resolution at which we could integrate all eight domains
            consistently across western North America — more than 700 million pixels. This is the
            scale of neighborhood decision-making: fine enough to capture local variation, coarse
            enough to enable wall-to-wall coverage from Alaska to the southern U.S. border. Scores
            can then be aggregated to any larger geography.
          </p>
        ),
      },
      {
        id: "domain-weighting",
        question: "How are domain scores weighted?",
        answer: (
          <p>
            All eight domains are weighted equally in the overall WRI score. Within each domain,
            resistance and recovery are combined using a formula that captures how the two components
            jointly shape resilience outcomes: a place with both high resistance and high recovery
            scores better than a place that has only one. Full details on the weighting approach are
            in the methods documentation.
          </p>
        ),
      },
      {
        id: "limitations",
        question: "What are the known limitations and data gaps?",
        answer: (
          <>
            <p>We've documented these in full on the website. Some key gaps include:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Building codes are assessed at the state level, which may miss stricter local
                ordinances.
              </li>
              <li>
                Species threat assessments are incomplete for many taxa; IUCN assessments are updated
                infrequently and favor depth within certain phylogenies over broad coverage.
              </li>
              <li>
                Post-fire recovery in water and air systems is not yet well-captured — there is no
                generalizable framework for applying existing research across all landscape types.
              </li>
              <li>
                Non-tree vegetation (grasslands, shrublands) is not yet fully captured in the
                Habitats domain.
              </li>
              <li>
                Hindcast validation against historical wildfire and impact records has not yet been
                completed — confirming how well scores predict real-world outcomes is a critical next
                step.
              </li>
            </ul>
            <p>
              We are actively working to address these gaps and welcome collaboration from
              researchers and agencies with relevant data.
            </p>
          </>
        ),
      },
      {
        id: "why-free",
        question: "Why is everything free?",
        answer: (
          <p>
            Access to information shouldn't be determined by the size of your organization's budget
            or your GIS team. We made every part of the WRI — the scores, the data, the methods, the
            code — free and openly available because we believe that information is fundamental to
            good decision-making, and that open access is how you level the playing field. Wealth
            should never determine a community's access to the information it needs to make decisions
            about the place it calls home.
          </p>
        ),
      },
    ],
  },
  {
    id: "contact-collaboration",
    heading: "Contact & Collaboration",
    items: [
      {
        id: "report-issue",
        question: "I found something that doesn't look right. How do I tell you?",
        answer: (
          <p>
            Please do! This is exactly the kind of feedback we need. Email us at{" "}
            <a href="mailto:wri@nceas.ucsb.edu" className="font-semibold text-wriMoss hover:underline">
              wri@nceas.ucsb.edu
            </a>{" "}
            with the geography, the domain, and what you're seeing. Practitioners and agency
            scientists with local knowledge are essential to improving this tool, and we take every
            data quality flag seriously.
          </p>
        ),
      },
      {
        id: "collaborate",
        question: "Can I collaborate on updating or extending the WRI?",
        answer: (
          <p>
            Yes. We're particularly interested in collaboration on validation, improving species and
            habitat data, and extending the framework to new geographies. Contact us at{" "}
            <a href="mailto:wri@nceas.ucsb.edu" className="font-semibold text-wriMoss hover:underline">
              wri@nceas.ucsb.edu
            </a>
            .
          </p>
        ),
      },
      {
        id: "who-built",
        question: "Who built the WRI and who funded it?",
        answer: (
          <p>
            The Wildfire Resilience Index was led by Drs. Caitlin R. Fong and Benjamin S. Halpern at
            the National Center for Ecological Analysis and Synthesis (NCEAS) at UC Santa Barbara.
            Collaborators are drawn from the Bren School of Environmental Science and Management (UC
            Santa Barbara), the Cary Institute of Ecosystem Studies, USDA Forest Service, Stanford
            University, and Oregon State University. Funding was provided by the Gordon and Betty
            Moore Foundation.
          </p>
        ),
      },
    ],
  },
];

function MethodologyFaqPage() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div id="public-website-redesign-methodology-faq-page" className="mx-auto max-w-[1400px] px-6 py-16">
      <SectionHeader
        id="public-website-redesign-methodology-faq-heading"
        eyebrow="Methodology"
        title="Frequently Asked Questions"
      />
      <p
        id="public-website-redesign-methodology-faq-intro"
        className="mt-6 max-w-3xl font-Poppins text-[clamp(15px,1.4vw,18px)] leading-relaxed text-wriCanopy"
      >
        Find quick answers about the Wildfire Resilience Index, data, and how to use the platform.
      </p>

      {FAQ_SECTIONS.map((section) => (
        <section
          key={section.id}
          id={`public-website-redesign-faq-section-${section.id}`}
          className="mt-12"
        >
          <h3
            id={`public-website-redesign-faq-section-heading-${section.id}`}
            className="font-Montserrat text-[clamp(1.35rem,2.8vw,1.75rem)] font-bold text-wriSage"
          >
            {section.heading}
          </h3>
          <MossDivider
            id={`public-website-redesign-faq-section-divider-${section.id}`}
            className="my-3"
            widthClassName="w-12"
          />

          <div
            id={`public-website-redesign-faq-section-items-${section.id}`}
            className="mt-4 space-y-3"
          >
            {section.items.map((item) => {
              const isExpanded = expandedIds.has(item.id);
              const panelId = `public-website-redesign-faq-panel-${item.id}`;

              return (
                <article
                  key={item.id}
                  id={`public-website-redesign-faq-item-${item.id}`}
                  className="rounded-sm border-2 border-wriMoss/40 bg-white"
                >
                  <button
                    id={`public-website-redesign-faq-trigger-${item.id}`}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left"
                  >
                    <span
                      id={`public-website-redesign-faq-question-${item.id}`}
                      className="font-Poppins text-[clamp(0.95rem,1.6vw,1.125rem)] font-semibold leading-snug text-wriForest"
                    >
                      {item.question}
                    </span>
                    <img
                      src={isExpanded ? DownArrow : RightSideArrow}
                      alt=""
                      aria-hidden
                      className="h-4 w-4 shrink-0"
                    />
                  </button>

                  <div
                    id={panelId}
                    aria-hidden={!isExpanded}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div
                      className={`overflow-hidden transition-[opacity,padding,border-width] duration-200 ease-in-out ${
                        isExpanded
                          ? "border-t border-wriMoss/30 px-5 py-5 opacity-100"
                          : "pointer-events-none border-t-0 px-0 py-0 opacity-0"
                      }`}
                    >
                      <div
                        id={`public-website-redesign-faq-answer-${item.id}`}
                        className="space-y-3 font-Poppins text-[clamp(14px,1.3vw,16px)] leading-relaxed text-wriCanopy"
                      >
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default MethodologyFaqPage;
