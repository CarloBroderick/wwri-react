import { Link } from "react-router-dom";
import { Button, ColorBlock, ContentBlock, SectionHeader } from "../../components/shared";
import { PUBLIC_ROUTES } from "../../routes/routeConfig";
import { PUBLIC_WEBSITE_THEME } from "../../styles/theme";
import { INFO_PAGE_CONTENT, INFO_PAGE_LINKS, InfoPageKey } from "./infoPageData";

interface InfoPageTemplateProps {
  pageKey: InfoPageKey;
}

const SECTION_TONES: Array<"dark" | "warm" | "cream"> = ["dark", "warm", "cream"];

function FeatureIcon({
  icon,
  iconId,
}: {
  icon: "documents" | "news" | "people";
  iconId: string;
}) {
  if (icon === "documents") {
    return (
      <svg
        id={iconId}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 text-[#8e4b27]"
        aria-hidden="true"
      >
        <path d="M7 3.75h7.5L19.5 8.75V20.25H7V3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14.5 3.75V8.75H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9.5 12H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.5 15.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "news") {
    return (
      <svg
        id={iconId}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 text-[#8e4b27]"
        aria-hidden="true"
      >
        <path d="M4.5 5.25H19.5V18.75H4.5V5.25Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 9H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5 12H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5 15H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      id={iconId}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 text-[#8e4b27]"
      aria-hidden="true"
    >
      <path d="M7 9.25C7 7.45 8.46 6 10.25 6C12.05 6 13.5 7.45 13.5 9.25C13.5 11.04 12.05 12.5 10.25 12.5C8.46 12.5 7 11.04 7 9.25Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.75 17.5C3.75 15.57 5.32 14 7.25 14H13.25C15.18 14 16.75 15.57 16.75 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.75 9.75C14.75 8.51 15.76 7.5 17 7.5C18.24 7.5 19.25 8.51 19.25 9.75C19.25 10.99 18.24 12 17 12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 14H18C19.66 14 21 15.34 21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function InfoPageTemplate({ pageKey }: InfoPageTemplateProps) {
  const content = INFO_PAGE_CONTENT[pageKey];
  const relatedPages = Object.values(INFO_PAGE_LINKS).filter((link) => link.key !== pageKey);

  return (
    <main
      id={`${pageKey}-page`}
      className="min-h-screen bg-[#fff8f0] text-[#160e08]"
      style={{ marginTop: `${PUBLIC_WEBSITE_THEME.layout.navHeightPx}px` }}
    >
      <ColorBlock
        id={`${pageKey}-hero-section`}
        tone="cream"
        className="border-b border-[#dc7e49]/20 py-16"
      >
        <div id={`${pageKey}-hero-container`} className="mx-auto max-w-6xl px-6">
          <p
            id={`${pageKey}-hero-eyebrow`}
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8e4b27]"
          >
            Information Page
          </p>
          <h1 id={`${pageKey}-hero-title`} className="mt-3 text-4xl font-bold text-[#160e08] md:text-5xl">
            {content.title}
          </h1>
          <p id={`${pageKey}-hero-subtitle`} className="mt-5 max-w-4xl text-lg leading-8 text-[#513221]">
            {content.subtitle}
          </p>
        </div>
      </ColorBlock>

      <ColorBlock id={`${pageKey}-intro-section`} tone="warm" className={PUBLIC_WEBSITE_THEME.layout.sectionSpacing}>
        <div id={`${pageKey}-intro-container`} className="mx-auto max-w-5xl px-6">
          <SectionHeader
            idPrefix={`${pageKey}-intro`}
            title="Overview"
            description="This page captures key context from the original mockup while keeping content modular for rapid revision."
          />
          <ContentBlock id={`${pageKey}-intro-copy`}>
            <p id={`${pageKey}-intro-paragraph-1`}>{content.introParagraphs[0]}</p>
            <p id={`${pageKey}-intro-paragraph-2`}>{content.introParagraphs[1]}</p>
          </ContentBlock>
        </div>
      </ColorBlock>

      {content.featuredModules ? (
        <ColorBlock id={`${pageKey}-modules-section`} tone="cream" className={PUBLIC_WEBSITE_THEME.layout.sectionSpacing}>
          <div id={`${pageKey}-modules-container`} className="mx-auto max-w-6xl px-6">
            <SectionHeader
              idPrefix={`${pageKey}-modules`}
              title={content.featuredModules.title}
              description={content.featuredModules.description}
            />
            <div id={`${pageKey}-modules-grid`} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {content.featuredModules.items.map((item) => (
                <article
                  id={`${pageKey}-module-card-${item.key}`}
                  key={`${pageKey}-module-card-${item.key}`}
                  className="rounded-2xl border border-[#dc7e49]/20 bg-white p-6 shadow-sm"
                >
                  <div id={`${pageKey}-module-card-${item.key}-icon-wrapper`} className="inline-flex rounded-xl bg-[#fef3e7] p-3">
                    <FeatureIcon icon={item.icon} iconId={`${pageKey}-module-card-${item.key}-icon`} />
                  </div>
                  <h3 id={`${pageKey}-module-card-${item.key}-title`} className="mt-4 text-xl font-semibold text-[#160e08]">
                    {item.title}
                  </h3>
                  <p id={`${pageKey}-module-card-${item.key}-description`} className="mt-3 text-sm leading-7 text-[#513221]">
                    {item.description}
                  </p>
                  <ul id={`${pageKey}-module-card-${item.key}-examples`} className="mt-4 space-y-2 text-sm leading-6 text-[#513221]">
                    {item.examples.map((example, exampleIndex) => (
                      <li
                        id={`${pageKey}-module-card-${item.key}-example-${exampleIndex + 1}`}
                        key={`${pageKey}-module-card-${item.key}-example-${exampleIndex + 1}`}
                        className="flex items-start gap-2"
                      >
                        <span
                          id={`${pageKey}-module-card-${item.key}-example-${exampleIndex + 1}-bullet`}
                          className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#dc7e49]"
                          aria-hidden="true"
                        />
                        <span id={`${pageKey}-module-card-${item.key}-example-${exampleIndex + 1}-text`}>{example}</span>
                      </li>
                    ))}
                  </ul>
                  <p
                    id={`${pageKey}-module-card-${item.key}-status`}
                    className="mt-5 inline-flex rounded-full bg-[#f0e2d1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#8e4b27]"
                  >
                    {item.status}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </ColorBlock>
      ) : null}

      {content.sections.map((section, sectionIndex) => {
        const tone = SECTION_TONES[sectionIndex];
        const sectionId = `${pageKey}-section-${sectionIndex + 1}`;
        const isDarkTone = tone === "dark";
        const sectionToneClassName = tone === "warm" ? "bg-[#f0e2d1]" : "";

        return (
          <ColorBlock
            id={`${sectionId}-wrapper`}
            key={`${sectionId}-wrapper`}
            tone={tone}
            className={`${PUBLIC_WEBSITE_THEME.layout.sectionSpacing} ${sectionToneClassName}`}
          >
            <div id={`${sectionId}-container`} className="mx-auto max-w-5xl px-6">
              <SectionHeader
                idPrefix={`${sectionId}-header`}
                title={section.heading}
                description={undefined}
                light={isDarkTone}
              />
              <ContentBlock id={`${sectionId}-content`} className={isDarkTone ? "text-white/90 [&_p]:text-white/90" : ""}>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p id={`${sectionId}-paragraph-${paragraphIndex + 1}`} key={`${sectionId}-paragraph-${paragraphIndex + 1}`}>
                    {paragraph}
                  </p>
                ))}
              </ContentBlock>
            </div>
          </ColorBlock>
        );
      })}

      <ColorBlock id={`${pageKey}-related-pages-section`} tone="cream" className="py-20">
        <div id={`${pageKey}-related-pages-container`} className="mx-auto max-w-6xl px-6">
          <SectionHeader
            idPrefix={`${pageKey}-related-pages`}
            title="Explore Related Pages"
            description="Use these pages for additional context around wildfire resilience framing, methods, and project updates."
            centered
          />
          <div id={`${pageKey}-related-pages-grid`} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedPages.map((relatedPage) => (
              <article
                id={`${pageKey}-related-card-${relatedPage.key}`}
                key={`${pageKey}-related-card-${relatedPage.key}`}
                className="rounded-2xl border border-[#dc7e49]/20 bg-white p-6 shadow-sm"
              >
                <h3 id={`${pageKey}-related-card-${relatedPage.key}-title`} className="text-xl font-semibold text-[#160e08]">
                  {relatedPage.label}
                </h3>
                <p
                  id={`${pageKey}-related-card-${relatedPage.key}-description`}
                  className="mt-3 text-sm leading-7 text-[#513221]"
                >
                  {relatedPage.description}
                </p>
                <Link
                  id={`${pageKey}-related-card-${relatedPage.key}-link`}
                  to={relatedPage.route}
                  className="mt-5 inline-flex text-sm font-semibold text-[#8e4b27] underline decoration-[#dc7e49]/60 decoration-2 underline-offset-4 hover:text-[#dc7e49]"
                >
                  Open page
                </Link>
              </article>
            ))}
          </div>
        </div>
      </ColorBlock>

      <ColorBlock id={`${pageKey}-cta-section`} tone="sunset" className="py-16">
        <div id={`${pageKey}-cta-container`} className="mx-auto max-w-4xl px-6 text-center">
          <h2 id={`${pageKey}-cta-title`} className="text-3xl font-bold text-white md:text-4xl">
            Explore resilience in your region
          </h2>
          <p id={`${pageKey}-cta-description`} className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/90">
            Move from context to action by exploring the dashboard and comparing domain-level resilience patterns.
          </p>
          <div id={`${pageKey}-cta-actions`} className="mt-8 flex flex-wrap justify-center gap-3">
            <Button id={`${pageKey}-cta-dashboard-button`} label="Launch Dashboard" to={PUBLIC_ROUTES.dashboard} />
            <Button
              id={`${pageKey}-cta-home-button`}
              label="Back to Home"
              to={PUBLIC_ROUTES.home}
              variant="secondary"
              className="border-white text-white hover:border-white hover:bg-white hover:text-[#8e4b27]"
            />
          </div>
        </div>
      </ColorBlock>
    </main>
  );
}

export default InfoPageTemplate;
