import connectHeroImage from "../../../assets/public-website-redesign/images/contact/light-in-the-forest-connect-with-us.png";
import linkedinGreenIcon from "../../../assets/public-website-redesign/images/footer/linkedin-green.png";
import MossDivider from "../components/shared/MossDivider";

function ContactConnectPage() {
  return (
    <div
      id="public-website-redesign-contact-connect-page"
      className="mx-auto max-w-[1400px] px-6 py-16"
    >
      <header id="public-website-redesign-contact-connect-heading">
        <h2
          id="public-website-redesign-contact-connect-heading-title"
          className="font-Poppins text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-wriForest"
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
        className="mt-12 grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center"
      >
        <div
          id="public-website-redesign-contact-connect-card"
          className="rounded-sm border border-wriForest/15 bg-wriSmokeFog px-6 py-8 sm:px-8 md:self-center"
        >
          <p
            id="public-website-redesign-contact-connect-prompt"
            className="font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
          >
            Interested in working with the index or have questions about the project?
          </p>

          <p
            id="public-website-redesign-contact-connect-email-label"
            className="mt-6 font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
          >
            Send us an email:
          </p>

          <div
            id="public-website-redesign-contact-connect-email-grid"
            className="mt-4 grid grid-cols-[auto_1fr] items-center gap-x-4"
          >
            <div id="public-website-redesign-contact-connect-email-icon-wrapper" aria-hidden="true">
              <ContactMailIcon id="public-website-redesign-contact-connect-email-symbol" />
            </div>
            <a
              id="public-website-redesign-contact-connect-email"
              href="mailto:wri@nceas.ucsb.edu"
              className="font-Poppins text-[clamp(15px,1.3vw,17px)] font-bold text-[#a3b86c] hover:underline"
            >
              wri@nceas.ucsb.edu
            </a>
          </div>

          <p
            id="public-website-redesign-contact-connect-linkedin-label"
            className="mt-6 font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
          >
            Follow us on LinkedIn:
          </p>

          <div
            id="public-website-redesign-contact-connect-linkedin-grid"
            className="mt-4 grid grid-cols-[auto_1fr] items-center gap-x-4"
          >
            <div
              id="public-website-redesign-contact-connect-linkedin-icon-wrapper"
              aria-hidden="true"
              className="ml-1 flex items-center justify-center"
            >
              <img
                id="public-website-redesign-contact-connect-linkedin-symbol"
                src={linkedinGreenIcon}
                alt=""
                className="h-7 w-auto object-contain"
              />
            </div>
            <a
              id="public-website-redesign-contact-connect-linkedin-link"
              href="https://www.linkedin.com/company/the-wildfire-resilience-index/"
              target="_blank"
              rel="noreferrer"
              className="self-center font-Poppins text-[clamp(15px,1.3vw,17px)] font-bold text-[#a3b86c] hover:underline"
            >
              Wildfire Resilience Index
            </a>
          </div>
        </div>

        <div
          id="public-website-redesign-contact-connect-image-wrapper"
          className="flex justify-start md:justify-end"
        >
          <img
            id="public-website-redesign-contact-connect-image"
            src={connectHeroImage}
            alt="Light in the forest representing the Contact section"
            className="w-full max-w-[580px] rounded-sm object-cover"
          />
        </div>
      </div>
    </div>
  );
}

type IconProps = { id: string };

function ContactMailIcon({ id }: IconProps) {
  return (
    <svg
      id={id}
      viewBox="0 0 24 24"
      className="h-10 w-10 text-[#a3b86c]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18v12H3z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default ContactConnectPage;
