import { useLocation } from "react-router-dom";
import LegacyAppRoutes from "./apps/public-website-legacy/routes/AppRoutes";
import RedesignRoutes from "./apps/public-website-redesign/routes/RedesignRoutes";

/**
 * Splits the legacy public site (existing URLs) from the in-progress redesign.
 * Redesign work lives under `/redesign` until you swap the root router to ship it.
 */
function RootAppRoutes() {
  const { pathname } = useLocation();
  const onRedesign = pathname === "/redesign" || pathname.startsWith("/redesign/");
  if (onRedesign) {
    return <RedesignRoutes />;
  }
  return <LegacyAppRoutes />;
}

export default RootAppRoutes;
