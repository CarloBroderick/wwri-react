import { useEffect, useRef, useState } from "react";
import benHalpernPhoto from "../../../assets/public-website-redesign/images/team/ben-halpern.jpg";
import carloBroderickPhoto from "../../../assets/public-website-redesign/images/team/carlo-broderick.jpg";
import catFongPhoto from "../../../assets/public-website-redesign/images/team/cat-fong.png";
import erikaEggPhoto from "../../../assets/public-website-redesign/images/team/erika-egg.png";
import izzySofioPhoto from "../../../assets/public-website-redesign/images/team/izzy-sofio.jpg";
import joeDecesaroPhoto from "../../../assets/public-website-redesign/images/team/joe-decesaro.png";
import monaFarnisaPhoto from "../../../assets/public-website-redesign/images/team/mona-farnisa.png";
import tessaCafritzPhoto from "../../../assets/public-website-redesign/images/team/tessa-cafritz.jpg";
import willOverbyeThompsonPhoto from "../../../assets/public-website-redesign/images/team/will-overbye-thompson.jpeg";
import MossDivider from "../components/shared/MossDivider";
import SectionHeader from "../components/shared/SectionHeader";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio?: string;
};

const CURRENT_CONTRIBUTORS: TeamMember[] = [
  {
    id: "ben-halpern",
    name: "Ben Halpern",
    role: "Principal Investigator",
    photo: benHalpernPhoto,
    bio: "In addition to serving as the Principal Investigator for the WRI project, Ben Halpern is the Executive Director of the NCEAS. Halpern is also a professor at the Bren School of Environmental Science & Management at the University of California, Santa Barbara.",
  },
  {
    id: "cat-fong",
    name: "Cat Fong",
    role: "Lead Project Scientist & Project Manager",
    photo: catFongPhoto,
    bio: "Dr. Cat Fong's research focuses primarily on social and ecological resilience. Fong joined NCEAS in 2020 as a research scientist. Fong earned a BA and a PhD in Ecology, Evolution and Marine Biology from the University of California, Santa Barbara.",
  },
  {
    id: "carlo-broderick",
    name: "Carlo Broderick",
    role: "Data Analyst",
    photo: carloBroderickPhoto,
    bio: "Carlo Broderick is passionate about using data science to measure and manage environmental externalities. He holds a master's degree in Environmental Data Science from UC Santa Barbara and a bachelor's degree in Environmental Studies and Economics from UC Santa Cruz.",
  },
  {
    id: "tessa-cafritz",
    name: "Tessa Cafritz",
    role: "Science Communicator",
    photo: tessaCafritzPhoto,
    bio: "Tessa Cafritz helps the end users of the WRI best connect with and understand the index. She received her Master's in Teaching the Biological Sciences from Miami University and holds Bachelor of Arts degrees in Environmental Science and Classical Civilization from Emory University.",
  },
  {
    id: "will-overbye-thompson",
    name: "Will Overbye-Thompson",
    role: "Website Developer",
    photo: willOverbyeThompsonPhoto,
    bio: "Will Overbye-Thompson is the website developer for the Wildfire Resilience Index. He enjoys building websites that make complex information easier to understand and use, especially for data-rich projects like the WRI. Overbye-Thompson earned a BA in Economics and Statistics from the University of California, Santa Barbara.",
  },
];

const PAST_CONTRIBUTORS: TeamMember[] = [
  {
    id: "joe-decesaro",
    name: "Joe DeCesaro",
    role: "Data Analyst",
    photo: joeDecesaroPhoto,
    bio: "Joe DeCesaro was a data analyst on the WRI project. DeCesaro received his undergraduate degree in materials engineering from Cal Poly - SLO and master's degree in Environmental Data Science from UC Santa Barbara.",
  },
  {
    id: "erika-egg",
    name: "Erika Egg",
    role: "Data Analyst",
    photo: erikaEggPhoto,
    bio: "Erika Egg was a data analyst on the WRI project where she worked on index calculations, metadata curation, and more. At UCSB, Egg completed a BA in Environmental Studies, Linguistics, and History of Art and Architecture and afterwards completed a MEDS (Master of Environmental Data Science).",
  },
  {
    id: "mona-farnisa",
    name: "Mona Farnisa",
    role: "Data Analyst",
    photo: monaFarnisaPhoto,
    bio: "Mona Farnisa was a WRI data analyst with an interest in spatial analysis statistics. Farnisa holds a MS in environmental science and natural resources from the University of NV, Reno and a BS in environmental science from Amsterdam University College in The Netherlands.",
  },
  {
    id: "izzy-sofio",
    name: "Izzy Sofio",
    role: "Policy Analyst & Communications Lead",
    photo: izzySofioPhoto,
    bio: "Izzy Sofio was a policy analyst and communications lead for the WRI project. Sofio holds a BA in Environmental Studies from the University of Colorado Boulder and completed a Master's in Environmental Science and Management at UC Santa Barbara's Bren School.",
  },
];

const WORKING_GROUP = [
  { name: "Ilkay Altintas", affiliation: "UC San Diego", url: "https://words.sdsc.edu/ilkay/" },
  { name: "Oliver Brandes", affiliation: "University of Victoria", url: "https://www.uvic.ca/research/centres/globalstudies/people/staff/brandesoliver.php" },
  { name: "Joan Dudney", affiliation: "UC Santa Barbara", url: "https://bren.ucsb.edu/people/joan-dudney" },
  { name: "Winslow Hansen", affiliation: "Cary Institute of Ecosystem Studies", url: "https://www.caryinstitute.org/science/our-scientists/dr-winslow-d-hansen" },
  { name: "Shefali Juneja Lakhina", affiliation: "Wonder Labs", url: "https://www.wonder-labs.org/founders.html" },
  { name: "Miranda Mockrin", affiliation: "US Forest Service", url: "https://research.fs.usda.gov/about/people/mhmockrin" },
  { name: "Max Moritz", affiliation: "UC Santa Barbara", url: "https://bren.ucsb.edu/people/max-moritz" },
  { name: "Connor Nolan", affiliation: "Stanford University", url: "https://profiles.stanford.edu/connor-nolan" },
  { name: "Malcolm North", affiliation: "US Forest Service", url: "https://research.fs.usda.gov/about/people/mnorth" },
  { name: "Marek Smith", affiliation: "The Nature Conservancy", url: "https://www.nature.org/en-us/about-us/who-we-are/our-people/marek-smith/" },
  { name: "Claire Tortorelli", affiliation: "UC Davis", url: "https://cmtortorelli.github.io/Claire-Tortorelli-website/" },
];

type TeamCardProps = {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
};

/** Single contributor card: square photo + name + role. Click → opens modal. */
function TeamCard({ member, onSelect }: TeamCardProps) {
  return (
    <button
      id={`public-website-redesign-contact-team-card-${member.id}`}
      onClick={() => onSelect(member)}
      className="group flex w-full flex-col text-left transition-transform hover:-translate-y-1 focus:outline-none"
    >
      <div
        id={`public-website-redesign-contact-team-card-photo-wrap-${member.id}`}
        className="relative aspect-square w-full overflow-hidden rounded-md bg-wriSmokeFog ring-1 ring-wriForest/10 transition-shadow group-hover:ring-2 group-hover:ring-wriMoss group-focus-visible:ring-2 group-focus-visible:ring-wriCanopy group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-white"
      >
        <img
          id={`public-website-redesign-contact-team-card-photo-${member.id}`}
          src={member.photo}
          alt={`Headshot of ${member.name}`}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
      <p
        id={`public-website-redesign-contact-team-card-name-${member.id}`}
        className="mt-3 font-Montserrat text-base font-bold text-wriForest"
      >
        {member.name}
      </p>
      <p
        id={`public-website-redesign-contact-team-card-role-${member.id}`}
        className="mt-0.5 font-Poppins text-sm leading-snug text-wriCanopy/75"
      >
        {member.role}
      </p>
    </button>
  );
}

type ContributorSectionProps = {
  id: string;
  title: string;
  members: TeamMember[];
  onSelect: (member: TeamMember) => void;
};

/** Left-aligned section title + responsive grid of TeamCards. */
function ContributorSection({ id, title, members, onSelect }: ContributorSectionProps) {
  return (
    <section id={id} className="mt-16">
      <h3
        id={`${id}-title`}
        className="font-Montserrat text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-wriSage"
      >
        {title}
      </h3>
      <ul
        id={`${id}-grid`}
        className="mt-10 flex flex-wrap justify-start gap-x-6 gap-y-10"
      >
        {members.map((m) => (
          <li
            key={m.id}
            id={`${id}-grid-item-${m.id}`}
            className="w-[170px] sm:w-[180px] md:w-[190px]"
          >
            <TeamCard member={m} onSelect={onSelect} />
          </li>
        ))}
      </ul>
    </section>
  );
}

type BioModalProps = {
  member: TeamMember;
  onClose: () => void;
};

/** Bio modal: photo on left, name/role/bio on right, close X top-right. */
function BioModal({ member, onClose }: BioModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      id="public-website-redesign-contact-team-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="public-website-redesign-contact-team-modal-name"
      className="fixed inset-0 z-50 flex items-center justify-center bg-wriCanopy/55 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="public-website-redesign-contact-team-modal"
        onClick={(e) => e.stopPropagation()}
        className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-2xl border border-wriMoss/35 bg-white shadow-2xl md:grid-cols-[260px_1fr]"
      >
        <button
          id="public-website-redesign-contact-team-modal-close"
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close team member bio"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full text-wriCanopy/60 transition-colors hover:bg-wriForest/10 hover:text-wriForest focus:outline-none focus-visible:ring-2 focus-visible:ring-wriCanopy focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <svg
            id="public-website-redesign-contact-team-modal-close-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div
          id="public-website-redesign-contact-team-modal-photo-wrap"
          className="relative aspect-square w-full md:aspect-auto md:h-full"
        >
          <img
            id="public-website-redesign-contact-team-modal-photo"
            src={member.photo}
            alt={`Headshot of ${member.name}`}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        <div id="public-website-redesign-contact-team-modal-body" className="p-8">
          <h3
            id="public-website-redesign-contact-team-modal-name"
            className="font-Montserrat text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight text-wriForest"
          >
            {member.name}
          </h3>
          <p
            id="public-website-redesign-contact-team-modal-role"
            className="mt-1 font-Poppins text-base text-wriSage"
          >
            {member.role}
          </p>
          <MossDivider
            id="public-website-redesign-contact-team-modal-divider"
            className="my-5"
            widthClassName="w-14"
          />
          {member.bio ? (
            <p
              id="public-website-redesign-contact-team-modal-bio"
              className="font-Poppins text-[clamp(15px,1.3vw,17px)] leading-relaxed text-wriCanopy"
            >
              {member.bio}
            </p>
          ) : (
            <p
              id="public-website-redesign-contact-team-modal-bio-empty"
              className="font-Poppins text-sm italic text-wriCanopy/50"
            >
              Bio coming soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/** Meet the Team — Canva spec: logo banner + card grids + click-to-open bio modal. */
function ContactTeamPage() {
  const [openMember, setOpenMember] = useState<TeamMember | null>(null);

  return (
    <div id="public-website-redesign-contact-team-page" className="mx-auto max-w-[1400px] px-6 py-16">
      <header id="public-website-redesign-contact-team-heading">
        <div
          id="public-website-redesign-contact-team-heading-eyebrow"
          className="font-Poppins text-[clamp(2.25rem,4.5vw,2.75rem)] font-bold leading-tight text-wriForest"
        >
          Contact
        </div>
        <MossDivider
          id="public-website-redesign-contact-team-heading-divider"
          className="my-3"
          widthClassName="w-16"
        />
        <h2
          id="public-website-redesign-contact-team-heading-title"
          className="font-Montserrat text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-tight text-wriSage"
        >
          Meet the Team
        </h2>
      </header>

      <p
        id="public-website-redesign-contact-team-intro"
        className="mt-8 max-w-3xl font-Poppins text-[clamp(15px,1.4vw,18px)] leading-relaxed text-wriCanopy"
      >
        Learn about the team members that have made the index possible below.
      </p>

      <ContributorSection
        id="public-website-redesign-contact-team-current"
        title="Current Index Contributors"
        members={CURRENT_CONTRIBUTORS}
        onSelect={setOpenMember}
      />

      <ContributorSection
        id="public-website-redesign-contact-team-past"
        title="Past Index Contributors"
        members={PAST_CONTRIBUTORS}
        onSelect={setOpenMember}
      />

      <section
        id="public-website-redesign-contact-team-working-group"
        className="mt-20"
      >
        <SectionHeader
          id="public-website-redesign-contact-team-working-group-heading"
          title="The WRI Working Group"
          titleClassName="font-normal"
        />
        <p
          id="public-website-redesign-contact-team-working-group-intro"
          className="mt-4 max-w-2xl font-Poppins text-[clamp(15px,1.4vw,18px)] leading-relaxed text-wriCanopy"
        >
          Our team works with an external group of experts in forestry, fire ecology, computing,
          and other disciplines.
        </p>
        <ul
          id="public-website-redesign-contact-team-working-group-list"
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WORKING_GROUP.map((expert) => (
            <li
              key={expert.name}
              id={`public-website-redesign-contact-team-working-group-${expert.name.toLowerCase().replace(/[\s,]+/g, "-")}`}
            >
              <a
                href={expert.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-sm border border-wriForest/15 bg-wriSmokeFog px-5 py-4 transition-colors hover:border-wriMoss/40 hover:bg-wriMoss/5"
              >
                <div className="text-left">
                  <p className="font-Montserrat text-sm font-bold text-wriForest group-hover:text-wriMoss">
                    {expert.name}
                  </p>
                  <p className="mt-0.5 font-Poppins text-xs text-wriCanopy/70">
                    {expert.affiliation}
                  </p>
                </div>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-auto h-4 w-4 shrink-0 text-wriMoss/60 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 010-1.06l7.22-7.22H8.75a.75.75 0 010-1.5h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V7.06l-7.22 7.22a.75.75 0 01-1.06 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {openMember && <BioModal member={openMember} onClose={() => setOpenMember(null)} />}
    </div>
  );
}

export default ContactTeamPage;
