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
      className="min-h-screen bg-[#f5f1e8] font-[Be_Vietnam_Pro,system-ui,sans-serif] text-[#1c1c1c]"
    >
      <ScrollToTop />
      <SiteHeader />
      <main id="public-website-redesign-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export default RedesignLayout;
