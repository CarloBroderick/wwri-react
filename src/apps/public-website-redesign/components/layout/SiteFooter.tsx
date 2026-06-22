import { Link, useLocation } from "react-router-dom";
import linkedinGreenIcon from "../../../../assets/public-website-redesign/images/footer/linkedin-green.png";
import nceasLogoWhite from "../../../../assets/public-website-redesign/images/logos/nceas-white.png";
import mooreLogoWhite from "../../../../assets/public-website-redesign/images/logos/moore-white.png";
import wriLogoFlameOnly from "../../../../assets/public-website-redesign/icons/wri-logo-flame-only.png";
import { PRIMARY_NAV } from "../../config/navigation";
import { REDESIGN_ROUTES } from "../../routes/routeConfig";

const getFooterLinkId = (label: string) =>
  `public-website-redesign-footer-link-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

function SiteFooter() {
  const { pathname } = useLocation();
  const isHomePage = pathname === REDESIGN_ROUTES.home;

  return (
    <footer
      id="public-website-redesign-site-footer"
      className={`${isHomePage ? "mt-0" : "mt-24"} border-t border-wriMoss/30 bg-wriForest font-Poppins text-wriSmokeFog`}
    >
      {/* Row 1: brand + contact */}
      <div
        id="public-website-redesign-footer-primary"
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5"
      >
        <Link
          id="public-website-redesign-footer-home-link"
          to={REDESIGN_ROUTES.home}
          className="inline-flex items-center gap-2"
          aria-label="Wildfire Resilience Index — home"
        >
          <img
            id="public-website-redesign-footer-logo"
            src={wriLogoFlameOnly}
            alt=""
            aria-hidden="true"
            className="h-10 w-auto object-contain"
          />
          <span
            id="public-website-redesign-footer-wordmark"
            className="flex h-10 flex-col justify-between py-px text-[9px] font-bold uppercase leading-none tracking-[0.08em] text-[#DCE8DF]"
          >
            <span>Wildfire</span>
            <span>Resilience</span>
            <span>Index</span>
          </span>
        </Link>

        <div
          id="public-website-redesign-footer-contact"
          className="flex items-center gap-5"
        >
          <a
            id="public-website-redesign-footer-email"
            href="mailto:wri@nceas.ucsb.edu"
            className="inline-flex items-center gap-2 text-[13px] text-wriMoss transition-colors hover:text-white hover:underline"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 4 10 8 10-8" />
            </svg>
            wri@nceas.ucsb.edu
          </a>
          <a
            id="public-website-redesign-footer-linkedin"
            href="https://linkedin.com/company/the-wildfire-resilience-index"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center transition-opacity hover:opacity-80"
            aria-label="Wildfire Resilience Index on LinkedIn"
          >
            <img
              id="public-website-redesign-footer-linkedin-icon"
              src={linkedinGreenIcon}
              alt="LinkedIn"
              className="h-7 w-auto object-contain"
            />
          </a>
        </div>
      </div>

      {/* Row 2: nav + copyright + partners */}
      <div
        id="public-website-redesign-footer-secondary"
        className="border-t border-white/10"
      >
        <div
          id="public-website-redesign-footer-secondary-inner"
          className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3"
        >
          <nav
            id="public-website-redesign-footer-nav"
            className="flex flex-wrap gap-x-5 gap-y-1 text-[11px]"
            aria-label="Footer"
          >
            {PRIMARY_NAV.map((l) => (
              <Link
                key={l.label}
                id={getFooterLinkId(l.label)}
                to={l.to}
                className="text-wriSmokeFog/50 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div
            id="public-website-redesign-footer-meta"
            className="flex items-center gap-4 text-[10px] text-wriSmokeFog/40"
          >
            <span id="public-website-redesign-footer-copyright">
              © {new Date().getFullYear()} Wildfire Resilience Index
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-Montserrat uppercase tracking-wider">
              Supported by
            </span>
            <img
              id="public-website-redesign-footer-logo-nceas"
              src={nceasLogoWhite}
              alt="NCEAS"
              className="h-4 w-auto object-contain opacity-60"
            />
            <img
              id="public-website-redesign-footer-logo-moore"
              src={mooreLogoWhite}
              alt="Gordon and Betty Moore Foundation"
              className="h-4 w-auto object-contain opacity-60"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
