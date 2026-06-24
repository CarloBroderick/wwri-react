import { Navigate, Route, Routes } from "react-router-dom";
import RedesignLayout from "../components/RedesignLayout";
import AboutPage from "../pages/AboutPage";
import ContactConnectPage from "../pages/ContactConnectPage";
import MethodologyPage from "../pages/MethodologyPage";
import MethodologyFaqPage from "../pages/MethodologyFaqPage";
import ContactTeamPage from "../pages/ContactTeamPage";
import DomainDetailPage from "../pages/DomainDetailPage";
import DomainsPage from "../pages/DomainsPage";
import HomePage from "../pages/HomePage";
import MediaLandingPage from "../pages/MediaLandingPage";
import NewsFeaturesPage from "../pages/NewsFeaturesPage";
import OutreachPage from "../pages/OutreachPage";
import PublicationsPage from "../pages/PublicationsPage";
import PublicationDetailPage from "../pages/PublicationDetailPage";

function RedesignRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RedesignLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="domains">
          <Route index element={<DomainsPage />} />
          <Route path=":slug" element={<DomainDetailPage />} />
        </Route>

        <Route path="methodology">
          <Route index element={<MethodologyPage />} />
          <Route path="deep-dive" element={<MethodologyPage />} />
          <Route path="faq" element={<MethodologyFaqPage />} />
        </Route>

        <Route path="media">
          <Route index element={<MediaLandingPage />} />
          <Route path="news" element={<NewsFeaturesPage />} />
          <Route path="outreach" element={<OutreachPage />} />
          <Route path="publications">
            <Route index element={<PublicationsPage />} />
            <Route path=":slug" element={<PublicationDetailPage />} />
          </Route>
        </Route>

        <Route path="contact">
          <Route index element={<Navigate to="connect" replace />} />
          <Route path="team" element={<ContactTeamPage />} />
          <Route path="connect" element={<ContactConnectPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default RedesignRoutes;
