import MossDivider from "../components/shared/MossDivider";

function PublicationsPage() {
  return (
    <div id="public-website-redesign-publications-page" className="mx-auto max-w-[1400px] px-6 py-16">
      <header id="public-website-redesign-publications-heading" className="text-left">
        <h1
          id="public-website-redesign-publications-heading-title"
          className="font-Poppins text-[clamp(2.25rem,4.5vw,2.75rem)] font-bold leading-tight text-wriForest"
        >
          Publications
        </h1>
        <MossDivider id="public-website-redesign-publications-heading-divider" className="my-3" />
      </header>

      <section id="public-website-redesign-publications-list" className="mt-8">
        <p
          id="public-website-redesign-publications-egress-thresholds"
          className="max-w-4xl font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
        >
          Fong CR, Broderick CW, Moritz MA, Halpern BS. Egress thresholds and wildfire fatalities. In
          press.
        </p>
      </section>
    </div>
  );
}

export default PublicationsPage;
