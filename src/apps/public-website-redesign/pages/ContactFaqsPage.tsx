import faqImage from "../../../assets/public-website-redesign/images/contact/forest-contact-faq.png";
import SectionHeader from "../components/shared/SectionHeader";

/**
 * FAQs page — renders the Canva-provided "Forest Contact FAQ page.png" as the
 * primary content until the team exports individual Q&A content. The design
 * already includes all copy baked into the image.
 */
function ContactFaqsPage() {
  return (
    <div id="public-website-redesign-contact-faqs-page" className="mx-auto max-w-[1200px] px-6 py-16">
      <SectionHeader id="public-website-redesign-contact-faqs-heading" eyebrow="FAQs" />
      <img
        id="public-website-redesign-contact-faqs-image"
        src={faqImage}
        alt="Frequently asked questions about the Wildfire Resilience Index"
        className="mx-auto mt-10 w-full max-w-[1000px] rounded-sm"
      />
    </div>
  );
}

export default ContactFaqsPage;
