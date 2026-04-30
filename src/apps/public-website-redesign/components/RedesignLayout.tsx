import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteFooter from "./layout/SiteFooter";
import SiteHeader from "./layout/SiteHeader";

/** Scroll to top on navigation so long pages start at their hero. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function RedesignLayout() {
  return (
    <div
      id="public-website-redesign-layout"
      className="flex min-h-screen flex-col bg-wriSmokeFog font-Poppins text-wriCanopy"
    >
      <ScrollToTop />
      <SiteHeader />
      <main id="public-website-redesign-main" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export default RedesignLayout;
