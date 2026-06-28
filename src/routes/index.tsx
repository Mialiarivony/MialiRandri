import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { LangProvider, useLang } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { FilmStrip } from "@/components/FilmStrip";

import portrait from "@/assets/portrait-Miali.png";
import about from "@/assets/about-Miali.JPEG";
import projPaths from "@/assets/project path to health-Miali.png";
import projGwangju from "@/assets/project-Gwangju.png";
import projCampus from "@/assets/project-campus.jpg";
import awardGameJam from "@/assets/award-Gamjam-Miali.png";
import awardHackathon from "@/assets/award-hackaton-Miali.jpg";
import awardGraduation from "@/assets/award-graduation-Miali.png";
import blob from "@/assets/blob.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miali Randriamanantena — Coordinatrice de projets médias & numériques" },
      {
        name: "description",
        content:
          "Portfolio de Miali Randriamanantena — coordinatrice de projets médias et numériques basée à Paris, en Master Cultures et Métiers du Web.",
      },
      { property: "og:title", content: "Miali Randriamanantena — Portfolio" },
      {
        property: "og:description",
        content:
          "De l'idée au rendu final  coordination de projets médias et numériques.",
      },
    ],
  }),
  component: () => (
    <LangProvider>
      <Page />
    </LangProvider>
  ),
});

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

function Page() {
  return (
    <div id="top" className="min-h-screen bg-cream text-ink">
      <Navbar />
      <Hero />
      <FilmStrip />
      <About />
      <Skills />
      <Projects />
      <FilmStrip />
      <Awards />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

/* ----------------------------- HERO ------------------------------ */
function Hero() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <img
        src={blob}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-40 w-[40rem] opacity-70 blur-[2px] md:-right-20"
      />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div {...fadeUp}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-terracotta" />
            Paris · Master CMW · 2026
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Miali
            <br />
            <span className="italic text-terracotta">Randriamanantena</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink/80 md:text-2xl">
            {t(
              "Je coordonne des projets médias et numériques de l'idée au rendu final.",
              "I coordinate media and digital projects  from concept to delivery.",
            )}
          </p>
          <p className="mt-4 max-w-xl text-sm text-ink/60 md:text-base">
            {t(
              "Coordinatrice de projets médias & numériques · Master Cultures et Métiers du Web, Université Gustave Eiffel",
              "Media & Digital Project Coordinator · Master's in Web Cultures & Practices, Université Gustave Eiffel",
            )}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-terracotta/20 transition hover:bg-ink"
            >
              {t("Voir mes projets", "See my work")}
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-cream"
            >
              {t("Me contacter", "Get in touch")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative"
        >
          <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-forest/90" />
          <div className="absolute -inset-2 -rotate-2 rounded-[2rem] bg-gold" />
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={portrait}
              alt="Portrait de Miali Randriamanantena"
              width={896}
              height={1152}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-ink px-5 py-4 text-cream shadow-xl">
            <p className="font-display text-2xl leading-none">22</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-cream/70">
              {t("ans ", "years")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- ABOUT ----------------------------- */
function About() {
  const { t } = useLang();
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div {...fadeUp} className="group overflow-hidden rounded-3xl">
          <img
            src={about}
            alt="Miali en tournage"
            width={1280}
            height={896}
            loading="lazy"
            className="hover-zoom-img aspect-[4/3] w-full object-cover"
          />
        </motion.div>
        <motion.div {...fadeUp}>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
            {t("À propos", "About")}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            {t(
              "Piloter un projet  et y mettre les mains.",
              "Lead a project  and roll up my sleeves.",
            )}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            {t(
              "Je suis Miali. Je coordonne des projets où le numérique et les médias se croisent  qu'il s'agisse d'un site web, d'un documentaire, d'une campagne digitale ou d'un lancement produit. Ce qui me définit : je sais à la fois piloter un projet et mettre la main à la pâte. J'ai travaillé en production audiovisuelle, en communication digitale et en développement web, et cette polyvalence me permet de parler le même langage que toutes les équipes avec lesquelles je collabore.",
              "I'm Miali. I coordinate projects where digital and media intersect whether it's a website, a documentary, a digital campaign or a product launch. What defines me: I know how to both lead a project and get hands-on. I've worked in audiovisual production, digital communication and web development, and that versatility lets me speak the same language as every team I work with.",
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- SKILLS ---------------------------- */
function Skills() {
  const { t, lang } = useLang();
  const groups = [
    {
      title: t("Coordination & Communication", "Coordination & Communication"),
      tone: "bg-terracotta text-cream",
      items: [
        "Gestion de projet",
        "Stratégie digitale",
        "Community management",
        "Storytelling",
        "Création de contenus éditoriaux",
      ],
    },
    {
      title: t("Médias & Production", "Media & Production"),
      tone: "bg-forest text-cream",
      items: [
        "Production audiovisuelle",
        lang === "fr" ? "Montage vidéo (Premiere Pro, DaVinci)" : "Video editing (Premiere Pro, DaVinci)",
        lang === "fr" ? "Prise de son & mixage" : "Sound recording & mixing",
        lang === "fr" ? "Tournage terrain" : "Field shooting",
      ],
    },
    {
      title: t("Outils & Tech", "Tools & Tech"),
      tone: "bg-gold text-ink",
      items: ["Canva", "Photoshop", "WordPress", "HTML / CSS / JS", "MySQL", "Notion", "3ds Max"],
    },
    {
      title: t("Méthodes", "Methods"),
      tone: "bg-ink text-cream",
      items: [
        "Agile / SCRUM",
        "Product Owner",
        t("Coordination d'équipes pluridisciplinaires", "Cross-functional team coordination"),
      ],
    },
  ];

  return (
    <section id="skills" className="bg-ink/[0.03] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
            {t("Compétences", "Skills")}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            {t("Une boîte à outils polyvalente.", "A versatile toolkit.")}
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className={`rounded-3xl p-8 md:p-10 ${g.tone}`}
            >
              <h3 className="font-display text-2xl font-semibold md:text-3xl">{g.title}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-current/30 bg-cream/10 px-3.5 py-1.5 text-sm font-medium backdrop-blur"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PROJECTS -------------------------- */
type Project = {
  img: string;
  title: string;
  year: string;
  url?: string;
  descFr: string;
  descEn: string;
  tags: string[];
};

function Projects() {
  const { t, lang } = useLang();

  const projects: Project[] = [
    {
      img: projPaths,
      title: "Paths to Health",
      year: "2026",
      url: "https://sante.mastercmw.com/",
      descFr:
        "Documentaire interactif trilingue (FR/EN/KR) tourné en Corée du Sud, explorant les représentations de la santé à travers des récits personnels. Rôle : ingénieure son, captation terrain, perche, mixage et post-production audio.",
      descEn:
        "Trilingual interactive documentary (FR/EN/KR) shot in South Korea, exploring personal representations of health. Role: sound engineer, field recording, boom operation, audio mixing and post-production.",
      tags: ["Ingénierie son", "Documentaire", "Corée du Sud", "Master CMW"],
    },
    {
      img: projGwangju,
      title: "Gwangju 5.18",
      year: "2026",
      url: "https://gwangju-exposition.mastercmw.com/index.html",
      descFr:
        "Site web trilingue (FR/EN/KR) préservant une archive photographique sur le soulèvement démocratique de Gwangju (mai 1980, Corée du Sud). Chronologie interactive, galerie photo, section historique. Rôle : rédactrice web et structuration des contenus.",
      descEn:
        "Trilingual website (FR/EN/KR) preserving a photographic archive of the Gwangju Uprising (May 1980, South Korea). Interactive timeline, photo gallery, history section. Role: web writer and content researcher.",
      tags: ["Rédaction web", "Stratégie de contenu", "Histoire", "Master CMW"],
    },
   
  ];

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <motion.div {...fadeUp} className="mb-14 flex items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
            {t("Projets", "Projects")}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
            {t("Sélection de travaux récents.", "Selected recent work.")}
          </h2>
        </div>
        <p className="hidden text-right font-mono text-xs uppercase tracking-widest text-ink/50 md:block">
          02 — {lang === "fr" ? "projets" : "projects"}
        </p>
      </motion.div>

      <div className="space-y-20">
        {projects.map((p, i) => (
          <motion.article
            {...fadeUp}
            key={p.title}
            className={`group grid items-center gap-10 md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-3xl bg-ink/5">
              <img
                src={p.img}
                alt={p.title}
                width={1280}
                height={720}
                loading="lazy"
                className="hover-zoom-img aspect-video w-full object-cover"
              />
            </div>
            <div>
              <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink/50">
                <span>{p.year}</span>
                <span className="h-px w-8 bg-ink/30" />
                <span>0{i + 1}</span>
              </div>
              <h3 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
                {p.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                {t(p.descFr, p.descEn)}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-forest/10 px-3 py-1 text-xs font-medium text-forest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border-b-2 border-terracotta pb-1 text-sm font-semibold text-terracotta transition hover:gap-3"
                >
                  {t("Voir le projet", "View project")} <span>↗</span>
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- AWARDS ---------------------------- */
function Awards() {
  const { t } = useLang();
  const items = [
    {
      img: awardGameJam,
      medal: "🥇",
      title: "Game Jam Interuniversitaire 2025",
      result: t("1ère place", "1st place"),
      role: t("Responsable communication", "Communication Manager"),
      descFr:
        "Jeu narratif éco-futuriste LOVA, valorisation culturelle et enjeux environnementaux.",
      descEn:
        "Eco-futurist narrative game LOVA, cultural celebration and environmental issues.",
    },
    {
      img: awardHackathon,
      medal: "🥇",
      title: "Hackathon Interuniversitaire 2023",
      result: t("1ère place", "1st place"),
      role: t("Product Owner & Communication", "Product Owner & Communication"),
      descFr:
        "Marketplace Tsena Milay avec API Mobile Banking, réalité augmentée, recherche par image et speech-to-text.",
      descEn:
        "Tsena Milay marketplace with Mobile Banking API, augmented reality, image search and speech-to-text.",
    },
    {
      img: awardGraduation,
      medal: "🏅",
      title: t("Major de promotion", "Class Salutatorian"),
      result: t("Promotion Ascenda", "Ascenda cohort"),
      role: t("Diplôme Licence", "Bachelor's degree"),
      descFr: "Licence Communication & Multimédia-EMIT Madagascar, Promotion Ascenda.",
      descEn: "Bachelor in Communication & Multimedia-EMIT Madagascar, Ascenda cohort.",
    },
  ];
  return (
    <section id="awards" className="bg-forest py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-gold">
            {t("Distinctions", "Awards")}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            {t("Reconnaissances - podiums.", "Recognitions - podiums.")}
          </h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((a, i) => (
            <motion.div
              key={a.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-cream text-ink shadow-xl shadow-black/20"
            >
              <div className="overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="hover-zoom-img aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl">{a.medal}</span>
                  <span className="rounded-full bg-terracotta px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream">
                    {a.result}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold leading-tight">{a.title}</h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink/50">
                  {a.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">
                  {t(a.descFr, a.descEn)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- EXPERIENCE ------------------------ */
function Experience() {
  const { t } = useLang();
  const items = [
    {
      date: t("sept. 2024 · 3 mois", "Sep 2024 · 3 months"),
      company: "SARYCOM.Films / Canal+ Madagascar",
      color: "bg-terracotta",
      descFr:
        "Post-production sur Premiere Pro pour la série télévisée Novegasy SIPA (Canal+). Assistante scripte et coordinatrice d'équipe sur le tournage.",
      descEn:
        "Post-production on Premiere Pro for the TV series Novegasy SIPA (Canal+). Script supervisor assistant and on-set team coordinator.",
    },
    {
      date: t("mai 2024 · 4 mois", "May 2024 · 4 months"),
      company: "Madatlas - State of the Map",
      color: "bg-gold",
      descFr:
        "Gestion des contenus web et mise en place d'un formulaire d'inscription pour un événement international de cartographie.",
      descEn:
        "Web content management and registration form for an international cartography event.",
    },
    {
      date: t("août 2023 · 2 mois", "Aug 2023 · 2 months"),
      company: "Airtel Mobile Banking",
      color: "bg-forest",
      descFr:
        "Stratégie marketing complète pour le lancement de la marketplace Tsena Milay : Business Plan, BMC, Go-To-Market, coordination Agile/SCRUM.",
      descEn:
        "Full marketing strategy for the launch of Tsena Milay marketplace: Business Plan, BMC, Go-To-Market, Agile/SCRUM coordination.",
    },
  ];
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <motion.div {...fadeUp} className="mb-14 max-w-2xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
          {t("Expériences", "Experience")}
        </p>
        <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
          {t("Du terrain à la stratégie.", "From the field to strategy.")}
        </h2>
      </motion.div>
      <div className="relative ml-3 border-l-2 border-ink/15 pl-8 md:ml-6 md:pl-12">
        {items.map((it, i) => (
          <motion.div key={it.company} {...fadeUp} className="relative pb-12 last:pb-0">
            <span
              className={`absolute -left-[2.65rem] top-1 h-5 w-5 rounded-full ring-4 ring-cream md:-left-[3.4rem] ${it.color}`}
            />
            <p className="font-mono text-xs uppercase tracking-widest text-ink/50">{it.date}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">{it.company}</h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/75">
              {t(it.descFr, it.descEn)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- EDUCATION ------------------------- */
function Education() {
  const { t } = useLang();
  const items = [
    {
      year: "2025 — 2026",
      title: t(
        "Master 2 Cultures et Métiers du Web (Double diplôme)",
        "Master's in Web Cultures & Practices (Double degree)",
      ),
      school: "Université Gustave Eiffel × EMIT Madagascar",
      note: "",
    },
    {
      year: "2024",
      title: t("Licence Communication & Multimédia", "Bachelor in Communication & Multimedia"),
      school: "EMIT, Université de Fianarantsoa",
      note: t(
        'Mémoire : « Les défis de la production audiovisuelle malgache. »',
        'Thesis: "Challenges of Malagasy audiovisual production."',
      ),
    },
  ];
  return (
    <section id="education" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
            {t("Formation", "Education")}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            {t("Un parcours franco-malgache.", "A Franco-Malagasy path.")}
          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <motion.div
              key={it.title}
              {...fadeUp}
              className="rounded-3xl border border-ink/10 bg-card p-8 md:p-10"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-terracotta">
                {it.year}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">
                {it.title}
              </h3>
              <p className="mt-2 text-base text-ink/70">{it.school}</p>
              {it.note && <p className="mt-3 text-sm italic text-ink/60">{it.note}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CONTACT --------------------------- */
function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2">
        <motion.div {...fadeUp}>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-gold">
            {t("Contact", "Contact")}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
            {t("Travaillons ensemble.", "Let's work together.")}
          </h2>
          <p className="mt-6 max-w-md text-lg text-cream/70">
            {t(
              "Disponible en alternance à partir de septembre 2026 — 3j entreprise / 2j cours.",
              "Available for work-study from September 2026 — 3 days company / 2 days classes.",
            )}
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <a
                href="mailto:mialiirandri@gmail.com"
                className="group flex items-center justify-between gap-4 border-b border-cream/15 py-3 transition hover:border-gold"
              >
                <span className="font-mono uppercase tracking-widest text-cream/50">Email</span>
                <span className="text-base group-hover:text-gold">mialiirandri@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/miali-randri-4b8b862a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-cream/15 py-3 transition hover:border-gold"
              >
                <span className="font-mono uppercase tracking-widest text-cream/50">LinkedIn</span>
                <span className="text-base group-hover:text-gold">mialiarivony-randri ↗</span>
              </a>
            </li>
            
            <li className="flex items-center justify-between gap-4 border-b border-cream/15 py-3">
              <span className="font-mono uppercase tracking-widest text-cream/50">
                {t("Localisation", "Location")}
              </span>
              <span className="text-base">Champs-sur-Marne (77), France</span>
            </li>
          </ul>
        </motion.div>

        <motion.form
          {...fadeUp}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(
              `${t("Message de", "Message from")} ${data.get("name")}`,
            );
            const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("email")}`);
            window.location.href = `mailto:mialiirandri@gmail.com?subject=${subject}&body=${body}`;
          }}
          className="rounded-3xl border border-cream/10 bg-cream/[0.04] p-8 backdrop-blur md:p-10"
        >
          <div className="space-y-5">
            <Field name="name" label={t("Nom", "Name")} required />
            <Field name="email" type="email" label="Email" required />
            <Field
              name="message"
              label="Message"
              textarea
              required
              placeholder={t("Parlez-moi de votre projet…", "Tell me about your project…")}
            />
            <button
              type="submit"
              className="w-full rounded-full bg-terracotta px-7 py-4 text-sm font-semibold text-cream transition hover:bg-gold hover:text-ink"
            >
              {t("Envoyer le message", "Send message")} →
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea,
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  placeholder?: string;
}) {
  const cls =
    "w-full rounded-xl border border-cream/15 bg-ink/40 px-4 py-3 text-cream placeholder:text-cream/40 outline-none transition focus:border-gold";
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-cream/50">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}

/* ----------------------------- FOOTER ---------------------------- */
function Footer() {
  const { t, toggle, lang } = useLang();
  return (
    <footer className="border-t border-ink/10 bg-cream py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-ink/60 md:flex-row">
        <p>
         
          © 2026- Miali Randri -
          {t("Mentions légales", "Legal notice")} -
          {t("IA", "AI")} Claude-Lovable

          
        </p>
        <button
          onClick={toggle}
          className="rounded-full border border-ink/15 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition hover:border-terracotta hover:text-terracotta"
        >
          {lang === "fr" ? "Switch to English" : "Passer en français"}
        </button>
      </div>
    </footer>
  );
}
