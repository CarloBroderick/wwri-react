import SectionHeader from "../components/shared/SectionHeader";

function ContactConnectPage() {
  return (
    <div
      id="public-website-redesign-contact-connect-page"
      className="mx-auto max-w-[1100px] px-6 py-16"
    >
      <SectionHeader
        id="public-website-redesign-contact-connect-heading"
        eyebrow="Contact"
        title="Connect with Us"
      />

      <div
        id="public-website-redesign-contact-connect-card"
        className="mt-12 flex flex-col items-center rounded-sm border border-wriForest/15 bg-wriSmokeFog px-10 py-14 text-center"
      >
        <p
          id="public-website-redesign-contact-connect-prompt"
          className="max-w-xl font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
        >
          Interested in working with the index or have questions about the project?
        </p>
        <p
          id="public-website-redesign-contact-connect-cta"
          className="mt-2 font-Poppins text-[clamp(15px,1.3vw,18px)] font-semibold text-wriForest"
        >
          Send us an email!
        </p>
        <a
          id="public-website-redesign-contact-connect-email"
          href="mailto:wildfire-index@nceas.ucsb.edu"
          className="mt-6 inline-block rounded-sm border-2 border-wriForest bg-wriForest px-8 py-3 font-Montserrat text-base font-bold text-white transition-colors hover:bg-wriForest/85"
        >
          wildfire-index@nceas.ucsb.edu
        </a>
      </div>
    </div>
  );
}

export default ContactConnectPage;
