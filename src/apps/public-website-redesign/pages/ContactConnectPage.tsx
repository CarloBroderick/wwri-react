import connectEmailSymbol from "../../../assets/public-website-redesign/images/contact/connect-with-us-email-symbol.png";
import connectLinkedInLogo from "../../../assets/public-website-redesign/images/contact/connect-with-us-linkedin.png";
import connectHeroImage from "../../../assets/public-website-redesign/images/contact/light-in-the-forest-connect-with-us.png";
import wriLogoGreen from "../../../assets/public-website-redesign/images/contact/wri-logo-green.png";
import MossDivider from "../components/shared/MossDivider";

function ContactConnectPage() {
  return (
    <div
      id="public-website-redesign-contact-connect-page"
      className="mx-auto max-w-[1200px] px-6 py-16"
    >
      <header id="public-website-redesign-contact-connect-heading">
        <h2
          id="public-website-redesign-contact-connect-heading-title"
          className="font-Montserrat text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-wriSage"
        >
          Connect with Us
        </h2>
        <MossDivider
          id="public-website-redesign-contact-connect-heading-divider"
          className="my-3"
          widthClassName="w-16"
        />
      </header>

      <div
        id="public-website-redesign-contact-connect-layout"
        className="mt-12 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start"
      >
        <div
          id="public-website-redesign-contact-connect-image-wrapper"
          className="flex justify-start"
        >
          <img
            id="public-website-redesign-contact-connect-image"
            src={connectHeroImage}
            alt="Light in the forest representing the Contact section"
            className="w-full max-w-[640px] rounded-sm object-cover"
          />
        </div>

        <div
          id="public-website-redesign-contact-connect-card"
          className="rounded-sm border border-wriForest/15 bg-wriSmokeFog px-6 py-8 sm:px-8"
        >
          <p
            id="public-website-redesign-contact-connect-prompt"
            className="font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
          >
            Interested in working with the index or have questions about the project?
          </p>

          <div
            id="public-website-redesign-contact-connect-email-row"
            className="mt-8 flex items-center gap-3"
          >
            <img
              id="public-website-redesign-contact-connect-email-symbol"
              src={connectEmailSymbol}
              alt=""
              aria-hidden="true"
              className="h-7 w-7 object-contain"
            />
            <a
              id="public-website-redesign-contact-connect-email"
              href="mailto:wildfire-index@nceas.ucsb.edu"
              className="font-Poppins text-[17px] font-bold text-[#a3b86c] hover:underline"
            >
              wildfire-index@nceas.ucsb.edu
            </a>
          </div>

          <div
            id="public-website-redesign-contact-connect-linkedin-callout"
            className="mt-10 rounded-sm border border-wriMoss/40 bg-white/80 p-4"
          >
            <div
              id="public-website-redesign-contact-connect-linkedin-logos"
              className="flex items-center gap-3"
            >
              <img
                id="public-website-redesign-contact-connect-linkedin-logo"
                src={connectLinkedInLogo}
                alt="LinkedIn"
                className="h-8 w-auto object-contain"
              />
              <img
                id="public-website-redesign-contact-connect-linkedin-wri-logo"
                src={wriLogoGreen}
                alt="WRI logo"
                className="h-8 w-auto object-contain"
              />
            </div>

            <a
              id="public-website-redesign-contact-connect-linkedin-link"
              href="https://linkedin.com/company/the-wildfire-resilience-index"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block break-all font-Poppins text-sm font-semibold text-wriForest hover:underline"
            >
              linkedin.com/company/the-wildfire-resilience-index
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactConnectPage;
