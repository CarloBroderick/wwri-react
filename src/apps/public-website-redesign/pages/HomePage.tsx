import { useEffect, useRef, useState } from "react";
import homeHeroVideo from "../../../assets/public-website-redesign/videos/looped-hero.mp4";
import nceasLogoWhite from "../../../assets/public-website-redesign/images/logos/nceas-white.png";
import mooreLogoWhite from "../../../assets/public-website-redesign/images/logos/moore-white.png";
import CTAButton from "../components/shared/CTAButton";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

/**
 * Homepage — Canva spec pages 1–2.
 *   • Hero: full-viewport looping muted video, heading, subtitle, CTA, partner logos
 */
function HomePage() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);

  // Respect prefers-reduced-motion: pause the autoplaying background video so
  // it does not move for users who asked the OS to minimize motion (WCAG 2.3.3).
  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      setIsHeroPlaying(false);
    }
  }, []);

  const toggleHeroPlayback = () => {
    const video = heroVideoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setIsHeroPlaying(true);
    } else {
      video.pause();
      setIsHeroPlaying(false);
    }
  };

  return (
    <div id="public-website-redesign-home-page">
      {/* ===== Hero ===== */}
      <section
        id="public-website-redesign-home-hero"
        className="relative -mt-px h-[calc(100vh-6rem)] min-h-[620px] w-full overflow-hidden bg-wriCanopy"
      >
        <video
          id="public-website-redesign-home-hero-video"
          ref={heroVideoRef}
          src={homeHeroVideo}
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
        <button
          id="public-website-redesign-home-hero-playback-toggle"
          type="button"
          onClick={toggleHeroPlayback}
          aria-label={isHeroPlaying ? "Pause background video" : "Play background video"}
          className="absolute bottom-6 left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-black/40 text-white transition-colors hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
        >
          {isHeroPlaying ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <div
          id="public-website-redesign-home-hero-content"
          className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center px-6 text-center text-wriSmokeFog"
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
              <span className="grid text-[clamp(1rem,1.8vw,2rem)]">
                <span className="invisible col-start-1 row-start-1 font-bold" aria-hidden="true">
                  Explore the Index
                </span>
                <span className="col-start-1 row-start-1">Explore the Index</span>
              </span>
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
