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
      <SectionHeader
        id="public-website-redesign-contact-faqs-heading"
        eyebrow="Contact"
        title="Explore the FAQs"
      />
      <p
        id="public-website-redesign-contact-faqs-intro"
        className="mt-6 max-w-3xl font-Poppins text-[clamp(15px,1.4vw,18px)] leading-relaxed text-wriCanopy"
      >
        Find quick answers about the Wildfire Resilience Index, data, and how to use the platform.
      </p>
      <div
        id="public-website-redesign-contact-faqs-image-wrapper"
        className="mt-10 flex w-full justify-start"
      >
        <img
          id="public-website-redesign-contact-faqs-image"
          src={faqImage}
          alt="Frequently asked questions about the Wildfire Resilience Index"
          className="block w-full max-w-[1000px] rounded-sm"
        />
      </div>
    </div>
  );
}

export default ContactFaqsPage;
