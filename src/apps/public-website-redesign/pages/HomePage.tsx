import homeHeroVideo from "../../../assets/public-website-redesign/videos/home-hero.mp4";
import homeHeroPoster from "../../../assets/public-website-redesign/images/hero/home-hero.jpg";
import nceasLogoWhite from "../../../assets/public-website-redesign/images/logos/nceas-white.png";
import mooreLogoWhite from "../../../assets/public-website-redesign/images/logos/moore-white.png";
import overviewWhatIsIt from "../../../assets/public-website-redesign/videos/overview-1-what-is-it.mp4";
import overviewHowWeBuiltIt from "../../../assets/public-website-redesign/videos/overview-2-how-we-built-it.mp4";
import overviewHowToUseIt from "../../../assets/public-website-redesign/videos/overview-3-how-to-use-it.mp4";
import overviewInterpretScore from "../../../assets/public-website-redesign/videos/overview-4-interpret-your-score.mp4";
import MossDivider from "../components/shared/MossDivider";
import CTAButton from "../components/shared/CTAButton";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

const OVERVIEW_VIDEOS = [
  { id: "what-is-it", src: overviewWhatIsIt, label: "What it is" },
  { id: "how-we-built-it", src: overviewHowWeBuiltIt, label: "How we built it" },
  { id: "how-to-use-it", src: overviewHowToUseIt, label: "How to use it" },
  { id: "interpret-score", src: overviewInterpretScore, label: "Interpret your score" },
] as const;

/**
 * Homepage — Canva spec pages 1–2.
 *   • Hero: full-viewport looping muted video, heading, subtitle, CTA, partner logos
 *   • Overview: "Overview" heading with moss underline, 2×2 grid of autoplay-muted
 *     overview videos (What it is, How we built it, How to use it, Interpret your score)
 */
function HomePage() {
  return (
    <div id="public-website-redesign-home-page">
      {/* ===== Hero ===== */}
      <section
        id="public-website-redesign-home-hero"
        className="relative -mt-px h-[calc(100vh-6rem)] min-h-[620px] w-full overflow-hidden bg-wriCanopy"
      >
        <video
          id="public-website-redesign-home-hero-video"
          src={homeHeroVideo}
          poster={homeHeroPoster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          id="public-website-redesign-home-hero-scrim"
          className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/55"
        />
        <div
          id="public-website-redesign-home-hero-content"
          className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col items-center justify-center px-6 text-center text-wriSmokeFog"
        >
          <h1
            id="public-website-redesign-home-hero-title"
            className="font-Montserrat text-[clamp(2.5rem,6vw,3.75rem)] font-bold leading-[1.05] text-wriSmokeFog drop-shadow-md"
          >
            The Wildfire Resilience Index
          </h1>
          <p
            id="public-website-redesign-home-hero-subtitle"
            className="mt-5 max-w-[60rem] font-Poppins text-[clamp(1.125rem,2vw,1.625rem)] italic text-wriSmokeFog drop-shadow"
          >
            Measuring wildfire resilience in communities and landscapes
          </p>
          <div id="public-website-redesign-home-hero-cta" className="mt-10">
            <CTAButton id="public-website-redesign-home-hero-cta-button" to={REDESIGN_ROUTES.exploreIndex}>
              <span className="text-[clamp(1rem,1.8vw,2rem)]">Explore the Index</span>
            </CTAButton>
          </div>
        </div>

        <div
          id="public-website-redesign-home-hero-partners"
          className="absolute bottom-6 right-6 z-10 flex items-center gap-6"
        >
          <img
            id="public-website-redesign-home-hero-partner-nceas"
            src={nceasLogoWhite}
            alt="NCEAS"
            className="h-10 w-auto object-contain opacity-95 drop-shadow md:h-12"
          />
          <img
            id="public-website-redesign-home-hero-partner-moore"
            src={mooreLogoWhite}
            alt="Gordon and Betty Moore Foundation"
            className="h-10 w-auto object-contain opacity-95 drop-shadow md:h-12"
          />
        </div>
      </section>

      {/* ===== Overview video grid ===== */}
      <section
        id="public-website-redesign-home-overview"
        className="mx-auto max-w-[1200px] px-6 py-16"
      >
        <h2
          id="public-website-redesign-home-overview-title"
          className="font-Montserrat text-[clamp(2rem,4vw,2.75rem)] font-bold text-wriForest"
        >
          Overview
        </h2>
        <MossDivider
          id="public-website-redesign-home-overview-divider"
          className="mt-3 mb-10"
          widthClassName="w-20"
        />
        <div
          id="public-website-redesign-home-overview-grid"
          className="grid gap-8 sm:grid-cols-2"
        >
          {OVERVIEW_VIDEOS.map((v) => (
            <div key={v.id} id={`public-website-redesign-home-overview-${v.id}`} className="flex flex-col">
              <h3
                id={`public-website-redesign-home-overview-${v.id}-title`}
                className="mb-3 text-center font-Montserrat text-[clamp(1.25rem,2.5vw,1.75rem)] font-normal text-wriSage"
              >
                {v.label}
              </h3>
              <video
                id={`public-website-redesign-home-overview-${v.id}-video`}
                src={v.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
