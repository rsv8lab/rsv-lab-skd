/* ============================================================
   RSV LAB — SITE CONTENT
   ------------------------------------------------------------
   ✏️  THIS IS THE ONLY FILE YOU NORMALLY NEED TO EDIT.

   HOW TO EDIT
     • Change only the text between quotes " ".
     • Keep quotes, commas, and braces balanced.
     • Add a card  → paste a new { ... }, block.
     • Remove a card → delete the whole { ... }, block.
     • Empty array [] hides its section automatically.
     • Missing fields fall back to SITE.defaults (see below).

   AFTER SAVING
     • Commit on GitHub → Cloudflare Pages redeploys in ~30 s.

   MAINTAINED FOR
     Kamol Das · RSV Lab · 2026
   ============================================================ */

const SITE = {

  /* ------------------------------------------------------------
     DEFAULTS — used when a card omits a field.
     Change a value here once → every unstyled card follows.
     ------------------------------------------------------------ */
  defaults: {
    cardColor:  "var(--primary-blue)",  // used if card.color missing
    cardIcon:   "fa-circle",            // used if card.icon missing
    cardCta:    "Learn More",           // used if card.link set but card.cta missing
    avatarBg:   "7614DC",               // hex WITHOUT # — used in ui-avatars fallback
    logoUrl:    "rsvlab-logo.png",      // relative path or full URL
    bannerUrl:  "https://raw.githubusercontent.com/rsv8lab/rsv8lab/main/banner.png",
    bannerAlt:  "RSV Lab banner",
  },

  /* ------------------------------------------------------------
     BASIC INFO
     ------------------------------------------------------------ */
  labName:      "RSV Lab",
  shortName:    "RSV Lab",
  tagline:      "ML-assisted AMR Surveillance & AST Analysis",
  taglinePart1: "Machine Learning (ML) assisted Antimicrobial Resistance",
  taglinePart2: "Surveillance & Data Science",
  description:  "A microbiology and bioinformatics research effort building open tools for antimicrobial susceptibility testing (AST) analysis, CLSI/EUCAST-aligned interpretation, and machine-learning-assisted AMR surveillance in Bangladesh.",
  founderName:  "Kamol Das",
  year:         "2026",

  /* ------------------------------------------------------------
     SOCIAL / CONTACT LINKS
     Set a field to "" to hide that icon everywhere.
     ------------------------------------------------------------ */
  github:    "https://github.com/KamolDas",
  twitter:   "https://x.com/KDKamol",
  linkedin:  "https://www.linkedin.com/in/kamol-das-7a4b0b1b7/",
  youtube:   "https://www.youtube.com/@RSVLab",
  email:     "kamol.mbio@gmail.com",
  orcid:     "https://orcid.org/0009-0004-2253-7527",
  location:  "Department of Microbiology, University of Chittagong · Ramakrishna Mission, Hathazari, Chittagong, Bangladesh",

  /* ------------------------------------------------------------
     PARTNER LAB — link shown in nav, collab banner, and footer.
     Set partnerLabUrl to "" to hide it everywhere.
     ------------------------------------------------------------ */
  partnerLabUrl:  "https://ecobioremediation.pages.dev/",
  partnerLabText: "Eco-Bio Lab",

  /* ------------------------------------------------------------
     NAVIGATION
     Order in this array = order in the nav bar.
     ------------------------------------------------------------ */
  nav: [
    { label: "About",        href: "#about" },
    { label: "Research",     href: "#research" },
    { label: "Tools",        href: "#tools" },
    { label: "Publications", href: "#publications" },
    { label: "Team",         href: "#team" },
    { label: "Community",    href: "#community" },
    { label: "Contact",      href: "#contact" },
  ],

  /* ------------------------------------------------------------
     HERO BADGE — text under the hero title.
     ------------------------------------------------------------ */
  heroBadge: "Kamol Das · Microbiology, University of Chittagong",

  /* ------------------------------------------------------------
     ABOUT
     ------------------------------------------------------------ */
  about: {
    title:    "About RSV Lab",
    subtitle: "An MS thesis project building toward PhD-level research at the intersection of clinical microbiology, AMR surveillance, and computational data science.",
    cards: [
      {
        icon:  "fa-microscope",
        color: "var(--primary-purple)",
        title: "AST & AMR Data",
        text:  "Antimicrobial susceptibility testing data collection and interpretation, structured around the RSV AST data schema, CLSI, and EUCAST breakpoint standards.",
      },
      {
        icon:  "fa-chart-network",
        color: "var(--primary-blue)",
        title: "MDR / XDR / PDR Classification",
        text:  "An interpretive engine that classifies isolates by multidrug-, extensively drug-, and pandrug-resistant categories from lab-reported AST results.",
      },
      {
        icon:  "fa-brain",
        color: "var(--primary-cyan)",
        title: "ML-Assisted Surveillance",
        text:  "Random Forest, K-Means, DBSCAN, Isolation Forest, PCA, and t-SNE applied to resistance-pattern detection and laboratory data quality.",
      },
    ],
  },

  /* ------------------------------------------------------------
     RESEARCH
     ------------------------------------------------------------ */
  research: {
    title:    "Research Focus",
    subtitle: "Core areas of the MS thesis and PhD track.",
    cards: [
      {
        icon:  "fa-vial-circle-check",
        color: "var(--primary-purple)",
        title: "AST Methodology",
        text:  "Kirby-Bauer disk diffusion and MIC/broth microdilution workflows aligned to CLSI M100 and EUCAST breakpoint tables.",
      },
      {
        icon:  "fa-shield-virus",
        color: "var(--primary-blue)",
        title: "AMR Epidemiology",
        text:  "Antimicrobial resistance patterns in ICU, hospital, and diagnostic-centre settings across Bangladesh and South Asia.",
      },
      {
        icon:  "fa-diagram-project",
        color: "var(--primary-cyan)",
        title: "Data Quality & Interoperability",
        text:  "A machine-learning-enabled framework for laboratory data quality, resistance-pattern detection, and sentinel-site interoperability — the core of the LSHTM PhD proposal.",
      },
      {
        icon:  "fa-shield-halved",
        color: "var(--primary-purple)",
        title: "Open Science",
        text:  "Verified, source-checked breakpoint data, reproducible Python tooling, and plans for Zenodo/ORCID-linked open datasets.",
      },
    ],
  },

  /* ------------------------------------------------------------
     TOOLS & SOFTWARE
     Cards without a `link` render no button.
     ------------------------------------------------------------ */
  tools: {
    title:    "Tools & Software",
    subtitle: "Open tooling built around the RSV Lab AST workflow.",
    cards: [
      {
        icon:  "fa-desktop",
        color: "var(--primary-purple)",
        title: "RSV Lab Advanced AST Analysis Tool",
        text:  "A Python desktop GUI — the centerpiece of the MS thesis — with an MDR/XDR/PDR classifier, ML clustering/detection modules, and a CLSI/EUCAST breakpoint lookup system.",
        link:  "https://github.com/KamolDas",
        cta:   "View on GitHub",
      },
      {
        icon:  "fa-code",
        color: "var(--primary-blue)",
        title: "rsv_formulas_library.py",
        text:  "A Python library of AST/MIC statistics and ML-metric formulas underlying the tool's statistical and methodological documentation set.",
        link:  "https://github.com/KamolDas",
        cta:   "View on GitHub",
      },
      {
        icon:  "fa-table-list",
        color: "var(--primary-cyan)",
        title: "Verified CLSI Breakpoint Table",
        text:  "A hand-checked breakpoint dataset cross-verified against CLSI M100-Ed36 (2026), built after fabricated AI-generated breakpoints were caught and corrected.",
      },
    ],
  },

  /* ------------------------------------------------------------
     PUBLICATIONS
     Each item: title, authors, journal, optional doi.
     ------------------------------------------------------------ */
  publications: {
    title:    "Publications & Outputs",
    subtitle: "Work in progress — no peer-reviewed publications yet. Items below are current outputs and drafts, not published articles.",
    items: [
      {
        title:   "RSV Laboratory AST Analysis Tool: Complete Statistical & Methodological Documentation Set",
        authors: "Kamol Das",
        journal: "5-part LaTeX book (scrbook), v2.2 — Full 91-Equation Edition (Sept 2026) — in preparation",
      },
      {
        title:   "Strengthening Digital Antimicrobial Resistance Surveillance in Bangladesh: A Machine-Learning-Enabled Framework for Laboratory Data Quality, Resistance-Pattern Detection, and Sentinel-Site Interoperability",
        authors: "Kamol Das",
        journal: "PhD research proposal draft — targeting AST & AMR Centre",
      },
      {
        title:   "AST/AMR manuscript (IMRaD format)",
        authors: "Kamol Das",
        journal: "In preparation — target venues: JAC-AMR, ARIC",
      },
    ],
  },

  /* ------------------------------------------------------------
     TEAM
     Founder block + optional additional members.
     members: [] hides the member grid automatically.
     ------------------------------------------------------------ */
  team: {
    title:  "About the Researcher",
    name:   "Kamol Das",
    role:   "MS Student, Microbiology, University of Chittagong",
    bio:    "MS student in the Department of Microbiology, University of Chittagong — Ramakrishna Mission, Hathazari, Chittagong. Building the RSV Lab AST Analysis Tool as a seed instrument for PhD-level research in AMR surveillance, targeting AST & AMR Centre.",
    avatar: "https://github.com/KamolDas.png",
    orcid:  "https://orcid.org/0009-0004-2253-7527",
    members: [],
  },

  /* ------------------------------------------------------------
     COMMUNITY
     Three independent sub-blocks: channels, stats, contributors.
     Each hides itself if its array is empty.
     ------------------------------------------------------------ */
  community: {
    title:    "Get Involved",
    subtitle: "RSV Lab is an early-stage, single-researcher project moving toward open collaboration. Community channels below are placeholders — connect real ones as they're set up.",

    channels: [
      {
        icon:  "fa-brands fa-github",
        color: "var(--primary-blue)",
        title: "GitHub",
        text:  "Source code for the AST Analysis Tool and rsv_formulas_library.py.",
        link:  "https://github.com/KamolDas",
        cta:   "View GitHub",
      },
      {
        icon:  "fa-solid fa-id-badge",
        color: "var(--primary-purple)",
        title: "ORCID",
        text:  "Researcher profile and publication record.",
        link:  "https://orcid.org/0009-0004-2253-7527",
        cta:   "View ORCID",
      },
    ],

    stats: [],

    contributors: [
      {
        name:   "Kamol Das",
        role:   "Researcher",
        avatar: "https://github.com/KamolDas.png",
        url:    "https://github.com/KamolDas",
      },
      {
        name:   "Sazal Das",
        role:   "Researcher",
        // TODO: replace with Sazal's real GitHub username once available —
        // this was previously (incorrectly) copied from Kamol's own profile.
        avatar: "https://ui-avatars.com/api/?name=Sazal+Das&background=7614DC&color=fff&size=90",
        url:    "#",
      },
    ],
  },

  /* ------------------------------------------------------------
     COLLABORATION BANNER
     Only renders if partnerLabUrl above is set.
     ------------------------------------------------------------ */
  collab: {
    title: "In Collaboration with EcoBioremediation Lab",
    text:  "RSV Lab links with EcoBio Lab to connect microbiology/AMR research with environmental biotechnology.",
    cta:   "Visit EcoBio Lab",
  },

  /* ------------------------------------------------------------
     CONTACT
     Cards follow the same structure as About/Research/Tools.
     ------------------------------------------------------------ */
  contact: {
    title:    "Contact",
    subtitle: "For collaboration, data-sharing, or research inquiries.",
    cards: [
      {
        icon:  "fa-map-marker-alt",
        color: "var(--primary-purple)",
        title: "Location",
        text:  "Dept. of Microbiology, University of Chittagong · Ramakrishna Mission, Hathazari, Chittagong",
      },
      {
        icon:  "fa-id-badge",
        color: "var(--primary-blue)",
        title: "ORCID",
        text:  "0009-0004-2253-7527",
      },
      {
        icon:  "fa-envelope",
        color: "var(--primary-cyan)",
        title: "Email",
        text:  "kamol.mbio@gmail.com",
      },
    ],
  },

  /* ------------------------------------------------------------
     FOOTER
     ------------------------------------------------------------ */
  footer: {
    copyright: "© 2026 RSV Lab — Kamol Das. All rights reserved.",
  },
};
