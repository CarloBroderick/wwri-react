import burntForest from "../../../assets/public-website-redesign/images/about/burnt-forest.jpg";
import mountainTown from "../../../assets/public-website-redesign/images/about/mountain-town.jpg";
import forestRegrowth from "../../../assets/public-website-redesign/images/about/forest-regrowth.jpg";
import regionMap from "../../../assets/public-website-redesign/icons/region-map.svg";
import SectionHeader from "../components/shared/SectionHeader";

/**
 * About page — matches PDF page 3. Three stacked sections:
 *   1. What is WRI?  (with region map image)
 *   2. Why is the Index Useful? (mountain town photo on right)
 *   3. Accessibility & acknowledgement (forest regrowth on left)
 */
function AboutPage() {
  return (
    <div id="public-website-redesign-about-page" className="mx-auto max-w-[1100px] px-6 py-16">
      <section id="public-website-redesign-about-what" className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
        <div id="public-website-redesign-about-what-text">
          <SectionHeader
            id="public-website-redesign-about-what-heading"
            eyebrow="About"
            title={
              <>
                What is the
                <br />
                Wildfire Resiliance Index?
              </>
            }
          />
          <div id="public-website-redesign-about-what-body" className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#333]">
            <p>
              The <strong>Wildfire Resilience Index (WRI)</strong> is an interactive tool designed to
              support communities and landscapes living with wildfire in 12 Western US states,
              British Columbia, and the Yukon Territory, see image to the right.
            </p>
            <p>
              Wildfire is natural and inevitable across the western United States and Canada.
              Living with it requires a shared understanding of how systems—both ecological and
              human—<strong>resist</strong> harm and <strong>recover</strong> after fire. Together,
              these abilities define <strong>resilience</strong>.
            </p>
          </div>
        </div>
        <img
          id="public-website-redesign-about-region-map"
          src={regionMap}
          alt="Map of 12 Western US states, British Columbia, and the Yukon Territory"
          className="mx-auto w-full max-w-[380px]"
        />
      </section>

      <section
        id="public-website-redesign-about-challenge"
        className="mt-20 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center"
      >
        <img
          id="public-website-redesign-about-challenge-photo"
          src={burntForest}
          alt="Burned forest with yellow wildflowers returning after wildfire"
          className="aspect-[4/3] w-full rounded-sm object-cover"
        />
        <div id="public-website-redesign-about-challenge-text" className="space-y-4 text-[15px] leading-relaxed text-[#333]">
          <p>
            Because wildfire resilience spans ecological, social, and infrastructural factors, it
            can be difficult to measure and compare. The index addresses this challenge by
            combining many types of data into a single, easy-to-understand measure. Grounded in
            the latest research, it integrates spatial data and expert knowledge to assess
            resilience across different locations.
          </p>
          <p>
            The index brings together multiple indicators—organized into eight key topic areas
            called <strong>domains</strong>—to create a composite score. This approach allows
            diverse information to be translated into a shared framework, helping everyone talk
            about wildfire resilience in a consistent and meaningful way.
          </p>
        </div>
      </section>

      <section id="public-website-redesign-about-why" className="mt-20 grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div id="public-website-redesign-about-why-text">
          <SectionHeader
            id="public-website-redesign-about-why-heading"
            eyebrow="Why is the"
            title="Index Useful?"
          />
          <div id="public-website-redesign-about-why-body" className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#333]">
            <p>
              The index is designed to inform land management, policy planning, and community
              preparedness by supporting evidence-based decisions that enhance safety and
              ecosystem sustainability.
            </p>
            <p>
              Rather than prescribing one solution, the index offers flexible insights that
              communities can adapt to their unique needs. It highlights where resilience can be
              strengthened—whether through vegetation management, infrastructure planning,
              community preparedness, or other targeted actions.
            </p>
          </div>
        </div>
        <img
          id="public-website-redesign-about-why-photo"
          src={mountainTown}
          alt="Mountain town with snowy peaks in the background"
          className="aspect-[4/3] w-full rounded-sm object-cover"
        />
      </section>

      <section id="public-website-redesign-about-access" className="mt-20 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
        <img
          id="public-website-redesign-about-access-photo"
          src={forestRegrowth}
          alt="Young conifer regenerating in a forest clearing"
          className="aspect-[4/3] w-full rounded-sm object-cover"
        />
        <div id="public-website-redesign-about-access-text" className="space-y-4 text-[15px] leading-relaxed text-[#333]">
          <p>
            Because the index and its underlying datasets are open source (free to all), it is
            accessible to a wide range of users. It can be applied at multiple scales, from local
            communities to regional landscapes, helping identify areas of higher vulnerability
            and prioritize effective interventions.
          </p>
          <p>
            By creating a shared, data-driven understanding of wildfire <strong>resilience</strong>,
            the index supports collaboration among land managers, scientists, policymakers, and
            the public. This common foundation enables more informed, transparent
            decision-making—helping communities and ecosystems live more sustainably with
            wildfire while allowing fire to continue playing its natural role. The index provides
            a shared framework for action and understanding.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
