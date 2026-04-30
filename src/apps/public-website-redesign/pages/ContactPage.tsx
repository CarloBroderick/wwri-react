import connectEmailSymbol from "../../../assets/public-website-redesign/images/contact/connect-with-us-email-symbol.png";
import connectLinkedInLogo from "../../../assets/public-website-redesign/images/contact/connect-with-us-linkedin.png";
import connectHeroImage from "../../../assets/public-website-redesign/images/contact/light-in-the-forest-connect-with-us.png";
import MossDivider from "../components/shared/MossDivider";

function ContactPage() {
  return (
    <div
      id="contact-page"
      className="mx-auto max-w-[1200px] px-6 py-16"
    >
      <div
        id="contact-page-layout"
        className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-start"
      >
        {/* ── Left column: content ── */}
        <div id="contact-page-content">
          {/* Connect with Us */}
          <section id="contact-connect-section">
            <h2
              id="contact-connect-heading"
              className="font-Montserrat text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-wriSage"
            >
              Connect with Us
            </h2>
            <MossDivider id="contact-connect-divider" className="my-3" widthClassName="w-16" />

            <p
              id="contact-connect-body"
              className="mt-4 max-w-md font-Poppins text-[clamp(15px,1.4vw,18px)] leading-relaxed text-wriCanopy"
            >
              Interested in working with the index or have questions about the
              project? Send us an email!
            </p>

            {/* Contact links list */}
            <div id="contact-connect-links" className="mt-8 flex flex-col gap-5">
              <a
                id="contact-connect-email"
                href="mailto:wri@nceas.ucsb.edu"
                className="flex items-center gap-4"
              >
                <img
                  id="contact-connect-email-icon"
                  src={connectEmailSymbol}
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-10 object-contain"
                />
                <span className="font-Poppins text-[clamp(15px,1.3vw,17px)] font-bold text-wriMoss hover:underline">
                  wri@nceas.ucsb.edu
                </span>
              </a>

              <a
                id="contact-connect-linkedin"
                href="https://linkedin.com/company/the-wildfire-resilience-index"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4"
              >
                <img
                  id="contact-connect-linkedin-icon"
                  src={connectLinkedInLogo}
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-10 object-contain"
                />
                <span className="font-Poppins text-[clamp(15px,1.3vw,17px)] font-bold text-wriMoss hover:underline">
                  linkedin.com/company/the-wildfire-resilience-index
                </span>
              </a>
            </div>
          </section>

        </div>

        {/* ── Right column: forest image ── */}
        <div id="contact-page-image-wrapper" className="hidden md:block">
          <img
            id="contact-page-hero-image"
            src={connectHeroImage}
            alt="Sunlight filtering through a forest canopy"
            className="h-full max-h-[700px] w-full rounded-sm object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
