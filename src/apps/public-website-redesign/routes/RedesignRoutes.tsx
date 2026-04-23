import { Navigate, Route, Routes } from "react-router-dom";
import RedesignLayout from "../components/RedesignLayout";
import AboutPage from "../pages/AboutPage";
import ComingSoonPage from "../pages/ComingSoonPage";
import ContactFaqsPage from "../pages/ContactFaqsPage";
import ContactPage from "../pages/ContactPage";
import DomainDetailPage from "../pages/DomainDetailPage";
import DomainsPage from "../pages/DomainsPage";
import HomePage from "../pages/HomePage";
import MediaLandingPage from "../pages/MediaLandingPage";
import NewsFeaturesPage from "../pages/NewsFeaturesPage";
import OutreachPage from "../pages/OutreachPage";

function RedesignRoutes() {
  return (
    <Routes>
      <Route path="/redesign" element={<RedesignLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="domains">
          <Route index element={<DomainsPage />} />
          <Route path=":slug" element={<DomainDetailPage />} />
        </Route>

        <Route path="methodology">
          <Route
            index
            element={
              <ComingSoonPage
                id="public-website-redesign-methodology-page"
                title="Methodology"
              />
            }
          />
          <Route
            path="deep-dive"
            element={
              <ComingSoonPage
                id="public-website-redesign-methodology-deep-dive-page"
                title="Deep Dive"
              />
            }
          />
          <Route
            path="how-to-use"
            element={
              <ComingSoonPage
                id="public-website-redesign-methodology-how-to-use-page"
                title="How to Use"
              />
            }
          />
        </Route>

        <Route path="media">
          <Route index element={<MediaLandingPage />} />
          <Route path="news" element={<NewsFeaturesPage />} />
          <Route path="outreach" element={<OutreachPage />} />
          <Route
            path="publications"
            element={
              <ComingSoonPage
                id="public-website-redesign-publications-page"
                title="Publications"
              />
            }
          />
          <Route
            path="resources"
            element={
              <ComingSoonPage
                id="public-website-redesign-resources-page"
                title="Resources"
              />
            }
          />
        </Route>

        <Route path="contact">
          <Route index element={<ContactPage />} />
          <Route
            path="team"
            element={
              <ComingSoonPage
                id="public-website-redesign-contact-team-page"
                title="Meet the Team"
              />
            }
          />
          <Route
            path="connect"
            element={
              <ComingSoonPage
                id="public-website-redesign-contact-connect-page"
                title="Connect with Us"
              />
            }
          />
          <Route path="faqs" element={<ContactFaqsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/redesign" replace />} />
      </Route>
    </Routes>
  );
}

export default RedesignRoutes;
