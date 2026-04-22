import { Link } from "react-router-dom";
import logoSvg from "../../../../assets/public-website-redesign/icons/logo.svg";
import { REDESIGN_ROUTES } from "../../routes/routeConfig";

/**
 * Footer is not explicit in the PDF visual spec; we mirror the header’s palette
 * and surface the acknowledgements (NCEAS + Gordon & Betty Moore Foundation)
 * referenced in the hero lower-right on page 1.
 */
function SiteFooter() {
  return (
    <footer
      id="public-website-redesign-site-footer"
      className="mt-24 border-t border-[#a5be6c]/30 bg-[#22402c] font-[Be_Vietnam_Pro,system-ui,sans-serif] text-[#eef3dc]"
    >
      <div
        id="public-website-redesign-footer-inner"
        className="mx-auto flex max-w-[1280px] flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between"
      >
        <div id="public-website-redesign-footer-brand" className="flex items-start gap-4">
          <img
            id="public-website-redesign-footer-logo"
            src={logoSvg}
            alt="Wildfire Resilience Index"
            className="h-14 w-auto"
          />
          <div id="public-website-redesign-footer-brand-text" className="text-sm leading-relaxed">
            <div className="font-bold uppercase tracking-[0.1em]">Wildfire Resilience Index</div>
            <div className="mt-1 max-w-xs text-[#c7d2a7]">
              Measuring wildfire resilience in communities and landscapes.
            </div>
          </div>
        </div>

        <nav
          id="public-website-redesign-footer-nav"
          className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm md:grid-cols-3"
          aria-label="Footer"
        >
          <Link id="public-website-redesign-footer-link-about" to={REDESIGN_ROUTES.about} className="hover:text-white">
            About
          </Link>
          <Link id="public-website-redesign-footer-link-domains" to={REDESIGN_ROUTES.domains} className="hover:text-white">
            Domains
          </Link>
          <Link id="public-website-redesign-footer-link-methodology" to={REDESIGN_ROUTES.methodology} className="hover:text-white">
            Methology
          </Link>
          <Link id="public-website-redesign-footer-link-news" to={REDESIGN_ROUTES.news} className="hover:text-white">
            News & Features
          </Link>
          <Link id="public-website-redesign-footer-link-outreach" to={REDESIGN_ROUTES.outreach} className="hover:text-white">
            Outreach
          </Link>
          <Link id="public-website-redesign-footer-link-contact" to={REDESIGN_ROUTES.contact} className="hover:text-white">
            Contact
          </Link>
        </nav>

        <div
          id="public-website-redesign-footer-acknowledgements"
          className="text-xs uppercase tracking-[0.1em] text-[#c7d2a7]"
        >
          <div className="font-bold">Supported by</div>
          <div className="mt-2 leading-relaxed">
            NCEAS
            <br />
            Gordon &amp; Betty Moore Foundation
          </div>
        </div>
      </div>
      <div
        id="public-website-redesign-footer-copyright"
        className="border-t border-white/10 px-6 py-4 text-center text-xs text-[#c7d2a7]"
      >
        © {new Date().getFullYear()} Wildfire Resilience Index · Redesign preview
      </div>
    </footer>
  );
}

export default SiteFooter;
