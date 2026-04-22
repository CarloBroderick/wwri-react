import homeHero from "../../../assets/public-website-redesign/images/hero/home-hero.jpg";
import CTAButton from "../components/shared/CTAButton";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

/**
 * Hero-only home page matching PDF page 1–2. The PDF shows a full-bleed landscape
 * photo/video with a centered title, subtitle, and pill CTA. A real looping MP4
 * should replace the <img> via the <video> tag noted in the TODO below.
 */
function HomePage() {
  return (
    <section
      id="public-website-redesign-home-hero"
      className="relative -mt-px h-[calc(100vh-5rem)] min-h-[560px] w-full overflow-hidden bg-[#0d2a1a]"
    >
      {/* TODO(video): replace <img> with a looping <video> of a western US
          mountain/forest landscape (poster fallback is the current image). */}
      <img
        id="public-website-redesign-home-hero-media"
        src={homeHero}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        id="public-website-redesign-home-hero-scrim"
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"
      />
      <div
        id="public-website-redesign-home-hero-content"
        className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col items-center justify-center px-6 text-center text-white"
      >
        <h1
          id="public-website-redesign-home-hero-title"
          className="text-4xl font-bold tracking-tight drop-shadow-md md:text-6xl lg:text-7xl"
        >
          Wildfire Resilience Index
        </h1>
        <p
          id="public-website-redesign-home-hero-subtitle"
          className="mt-4 max-w-3xl text-lg italic text-white/95 drop-shadow md:text-2xl"
        >
          Measuring wildfire resilience in communities and landscapes
        </p>
        <div id="public-website-redesign-home-hero-cta" className="mt-10">
          <CTAButton id="public-website-redesign-home-hero-cta-button" to={REDESIGN_ROUTES.exploreIndex}>
            Explore the Index
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
