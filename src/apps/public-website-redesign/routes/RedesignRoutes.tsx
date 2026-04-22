import { Route, Routes } from "react-router-dom";
import RedesignLayout from "../components/RedesignLayout";
import RedesignHomePage from "../pages/RedesignHomePage";

function RedesignRoutes() {
  return (
    <Routes>
      <Route path="/redesign" element={<RedesignLayout />}>
        <Route index element={<RedesignHomePage />} />
      </Route>
    </Routes>
  );
}

export default RedesignRoutes;
