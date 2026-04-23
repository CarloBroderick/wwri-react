import { Link } from "react-router-dom";
import wriLogoFullWhite from "../../../../assets/public-website-redesign/images/logos/wri-full-white.png";
import nceasLogoWhite from "../../../../assets/public-website-redesign/images/logos/nceas-white.png";
import mooreLogoWhite from "../../../../assets/public-website-redesign/images/logos/moore-white.png";
import { REDESIGN_ROUTES } from "../../routes/routeConfig";

/**
 * Footer is not explicit in the PDF visual spec; we mirror the header’s palette
 * and surface the acknowledgements (NCEAS + Gordon & Betty Moore Foundation)
 * referenced in the hero lower-right on page 1 using the provided logo marks.
 */
function SiteFooter() {
  return (
    <footer
      id="public-website-redesign-site-footer"
      className="mt-24 border-t border-wriMoss/30 bg-wriForest font-Poppins text-wriSmokeFog"
    >
      <div
        id="public-website-redesign-footer-inner"
        className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:items-start"
      >
        <div id="public-website-redesign-footer-brand" className="flex items-start gap-4">
          <img
            id="public-website-redesign-footer-logo"
            src={wriLogoFullWhite}
            alt="Wildfire Resilience Index"
            className="h-20 w-auto"
          />
          <div id="public-website-redesign-footer-brand-text" className="text-sm leading-relaxed">
            <div className="max-w-xs text-wriSmokeFog/80">
              Measuring wildfire resilience in communities and landscapes.
            </div>
          </div>
        </div>

        <nav
          id="public-website-redesign-footer-nav"
          className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm"
          aria-label="Footer"
        >
          <Link id="public-website-redesign-footer-link-about" to={REDESIGN_ROUTES.about} className="hover:text-white">
            About
          </Link>
          <Link id="public-website-redesign-footer-link-domains" to={REDESIGN_ROUTES.domains} className="hover:text-white">
            Domains
          </Link>
          <Link id="public-website-redesign-footer-link-methodology" to={REDESIGN_ROUTES.methodology} className="hover:text-white">
            Methodology
          </Link>
          <Link id="public-website-redesign-footer-link-news" to={REDESIGN_ROUTES.news} className="hover:text-white">
            News &amp; Features
          </Link>
          <Link id="public-website-redesign-footer-link-outreach" to={REDESIGN_ROUTES.outreach} className="hover:text-white">
            Outreach
          </Link>
          <Link id="public-website-redesign-footer-link-contact" to={REDESIGN_ROUTES.contact} className="hover:text-white">
            Contact
          </Link>
        </nav>

        <div id="public-website-redesign-footer-acknowledgements" className="space-y-3">
          <div className="font-Montserrat text-xs font-bold uppercase tracking-[0.1em] text-wriSmokeFog/80">
            Supported by
          </div>
          <div
            id="public-website-redesign-footer-partner-logos"
            className="flex flex-wrap items-center gap-6"
          >
            <img
              id="public-website-redesign-footer-logo-nceas"
              src={nceasLogoWhite}
              alt="NCEAS"
              className="h-10 w-auto object-contain"
            />
            <img
              id="public-website-redesign-footer-logo-moore"
              src={mooreLogoWhite}
              alt="Gordon and Betty Moore Foundation"
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      </div>
      <div
        id="public-website-redesign-footer-copyright"
        className="border-t border-white/10 px-6 py-4 text-center font-Poppins text-xs text-wriSmokeFog/70"
      >
        © {new Date().getFullYear()} Wildfire Resilience Index · Redesign preview
      </div>
    </footer>
  );
}

export default SiteFooter;
