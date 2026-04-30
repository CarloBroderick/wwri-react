import homeHeroVideo from "../../../assets/public-website-redesign/videos/home-hero.mp4";
import homeHeroPoster from "../../../assets/public-website-redesign/images/hero/home-hero.jpg";
import nceasLogoWhite from "../../../assets/public-website-redesign/images/logos/nceas-white.png";
import mooreLogoWhite from "../../../assets/public-website-redesign/images/logos/moore-white.png";
import CTAButton from "../components/shared/CTAButton";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

/**
 * Homepage — Canva spec pages 1–2.
 *   • Hero: full-viewport looping muted video, heading, subtitle, CTA, partner logos
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
    </div>
  );
}

export default HomePage;
