import { useLocation } from "react-router-dom";
import LegacyAppRoutes from "./apps/public-website-legacy/routes/AppRoutes";
import RedesignRoutes from "./apps/public-website-redesign/routes/RedesignRoutes";

/**
 * Splits the public website routing between the redesign and legacy experiences.
 * Redesign is served at `/`, while legacy remains available under `/legacy`.
 */
function RootAppRoutes() {
  const { pathname } = useLocation();
  const onLegacy = pathname === "/legacy" || pathname.startsWith("/legacy/");
  if (onLegacy) {
    return <LegacyAppRoutes />;
  }
  return <RedesignRoutes />;
}

export default RootAppRoutes;
