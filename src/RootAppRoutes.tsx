import DashboardApp from "components/App";
import { Route, Routes } from "react-router-dom";
import LegacyAppRoutes from "./apps/public-website-legacy/routes/AppRoutes";
import RedesignRoutes from "./apps/public-website-redesign/routes/RedesignRoutes";

const DASHBOARD_ROUTE = "/dashboard";

/**
 * Splits the public website routing between the redesign and legacy experiences.
 * Redesign is served at `/`, while legacy remains available under `/legacy`.
 * The shared dashboard is exposed at `/dashboard`.
 */
function RootAppRoutes() {
  return (
    <Routes>
      <Route path={DASHBOARD_ROUTE} element={<DashboardApp />} />
      <Route path="/legacy/*" element={<LegacyAppRoutes />} />
      <Route path="*" element={<RedesignRoutes />} />
    </Routes>
  );
}

export default RootAppRoutes;
