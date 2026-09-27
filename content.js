/* ============================================================
   RSV LAB — SITE CONTENT
   ------------------------------------------------------------
   ✏️ THIS IS THE ONLY FILE YOU NORMALLY NEED TO EDIT.
   Change text between the quotes " " — keep the quotes and commas.
   After saving on GitHub, Cloudflare Pages redeploys automatically.

   Updated on behalf of Kamol Das — real project details swapped in
   for the placeholder demo content (Dr. Rahman / fictional team /
   fake DOIs). Fields marked TODO still need a value from Kamol.
   ============================================================ */

const SITE = {

  /* ---------- BASIC INFO ---------- */
  labName:     "RSV Lab",
  shortName:   "RSV Lab",
  tagline:     "AMR Surveillance & AST Analysis",
  taglinePart1: "Antimicrobial Resistance",
  taglinePart2: "Surveillance & Data Science",   // rendered with accent colour
  description: "A microbiology and bioinformatics research effort building open tools for antimicrobial susceptibility testing (AST) analysis, CLSI/EUCAST-aligned interpretation, and machine-learning-assisted AMR surveillance in Bangladesh.",
  founderName: "Kamol Das",
  year:        "2026",

  /* ---------- SOCIAL / CONTACT LINKS ---------- */
  github:    "https://github.com/KamolDas",
  twitter:   "",
  linkedin:  "",
  youtube:   "",
  email:     "TODO@example.com",
  phone:     "TODO",
  location:  "Department of Microbiology, University of Chittagong · Ramakrishna Mission, Hathazari, Chittagong, Bangladesh",

  /* ---------- LINK BACK TO ECOBIOREMEDIATION LAB ---------- */
  partnerLabUrl:  "https://ecobioremediation.pages.dev/",
  partnerLabText: "EcoBio Lab",

  /* ---------- NAV LINKS ---------- */
  nav: [
    { label: "About",        href: "#about" },
    { label: "Research",     href: "#research" },
    { label: "Tools",        href: "#tools" },
    { label: "Publications", href: "#publications" },
    { label: "Team",         href: "#team" },
    { label: "Community",    href: "#community" },
    { label: "Contact",      href: "#contact" },
  ],

  /* ---------- HERO BADGE ---------- */
  heroBadge: "Kamol Das · MS, Microbiology, University of Chittagong",

  /* ---------- ABOUT ---------- */
  about: {
    title:    "About RSV Lab",
    subtitle: "An MS thesis project building toward PhD-level research at the intersection of clinical microbiology, AMR surveillance, and computational data science.",
    cards: [
      {
        icon:  "fa-microscope",
        color: "var(--primary-purple)",
        title: "AST & AMR Data",
        text:  "Antimicrobial susceptibility testing data collection and interpretation, structured around the RSV AST data schema, CLSI, and EUCAST breakpoint standards."
      },
      {
        icon:  "fa-chart-network",
        color: "var(--primary-blue)",
        title: "MDR / XDR / PDR Classification",
        text:  "An interpretive engine that classifies isolates by multidrug-, extensively drug-, and pandrug-resistant categories from lab-reported AST results."
      },
      {
        icon:  "fa-brain",
        color: "var(--primary-cyan)",
        title: "ML-Assisted Surveillance",
        text:  "Random Forest, K-Means, DBSCAN, Isolation Forest, PCA, and t-SNE applied to resistance-pattern detection and laboratory data quality."
      },
    ],
  },

  /* ---------- RESEARCH ---------- */
  research: {
    title:    "Research Focus",
    subtitle: "Core areas of the MS thesis and PhD track.",
    cards: [
      {
        icon:  "fa-vial-circle-check",
        color: "var(--primary-purple)",
        title: "AST Methodology",
        text:  "Kirby-Bauer disk diffusion and MIC/broth microdilution workflows aligned to CLSI M100 and EUCAST breakpoint tables."
      },
      {
        icon:  "fa-shield-virus",
        color: "var(--primary-blue)",
        title: "AMR Epidemiology",
        text:  "Antimicrobial resistance patterns in ICU, hospital, and diagnostic-centre settings across Bangladesh and South Asia."
      },
      {
        icon:  "fa-diagram-project",
        color: "var(--primary-cyan)",
        title: "Data Quality & Interoperability",
        text:  "A machine-learning-enabled framework for laboratory data quality, resistance-pattern detection, and sentinel-site interoperability — the core of the LSHTM PhD proposal."
      },
      {
        icon:  "fa-shield-halved",
        color: "var(--primary-purple)",
        title: "Open Science",
        text:  "Verified, source-checked breakpoint data, reproducible Python tooling, and plans for Zenodo/ORCID-linked open datasets."
      },
    ],
  },

  /* ---------- TOOLS & SOFTWARE ---------- */
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
        link:  "",
        cta:   "",
      },
    ],
  },

  /* ---------- PUBLICATIONS ---------- */
  publications: {
    title:    "Publications & Outputs",
    subtitle: "Work in progress — no peer-reviewed publications yet. Items below are current outputs and drafts, not published articles.",
    items: [
      {
        title:   "RSV Laboratory AST Analysis Tool: Complete Statistical & Methodological Documentation Set",
        authors: "Kamol Das",
        journal: "5-part LaTeX book (scrbook), v2.2 — Full 91-Equation Edition (Sept 2026) — in preparation",
        doi:     "",
      },
      {
        title:   "Strengthening Digital Antimicrobial Resistance Surveillance in Bangladesh: A Machine-Learning-Enabled Framework for Laboratory Data Quality, Resistance-Pattern Detection, and Sentinel-Site Interoperability",
        authors: "Kamol Das",
        journal: "PhD research proposal draft — targeting LSHTM AMR Centre",
        doi:     "",
      },
      {
        title:   "AST/AMR manuscript (IMRaD format)",
        authors: "Kamol Das",
        journal: "In preparation — target venues: JAC-AMR, ARIC",
        doi:     "",
      },
    ],
  },

  /* ---------- TEAM ---------- */
  team: {
    title:  "About the Researcher",
    name:   "Kamol Das",
    role:   "MS Student, Microbiology, University of Chittagong",
    bio:    "MS student in the Department of Microbiology, University of Chittagong, affiliated with Ramakrishna Mission, Hathazari, Chittagong. Building the RSV Lab AST Analysis Tool as a seed instrument for PhD-level research in AMR surveillance, targeting LSHTM's AMR Centre.",
    avatar: "https://ui-avatars.com/api/?name=Kamol+Das&background=7C3AED&color=fff&size=150",
    orcid:  "https://orcid.org/0009-0004-2253-7527",

    // No additional confirmed members yet — leave empty until real collaborators are added.
    members: [],
  },

  /* ---------- COMMUNITY ---------- */
  community: {
    title:    "Get Involved",
    subtitle: "RSV Lab is an early-stage, single-researcher project moving toward open collaboration. Community channels below are placeholders — connect real ones as they're set up.",

    channels: [
      { icon: "fa-brands fa-github",      color: "var(--primary-blue)",   title: "GitHub", text: "Source code for the AST Analysis Tool and rsv_formulas_library.py.", link: "https://github.com/KamolDas", cta: "View GitHub" },
      { icon: "fa-solid fa-id-badge",     color: "var(--primary-purple)", title: "ORCID",  text: "Researcher profile and publication record.", link: "https://orcid.org/0009-0004-2253-7527", cta: "View ORCID" },
    ],

    stats: [],

    contributors: [
      { name: "Kamol Das", role: "Researcher", avatar: "https://ui-avatars.com/api/?name=Kamol+Das&background=7C3AED&color=fff&size=90", url: "https://github.com/KamolDas" },
    ],
  },

  /* ---------- COLLABORATION BANNER ---------- */
  collab: {
    title: "In Collaboration with EcoBioremediation Lab",
    text:  "RSV Lab links with EcoBio Lab to connect microbiology/AMR research with environmental biotechnology.",
    cta:   "Visit EcoBio Lab",
  },

  /* ---------- CONTACT ---------- */
  contact: {
    title:    "Contact",
    subtitle: "For collaboration, data-sharing, or research inquiries.",
    cards: [
      { icon: "fa-map-marker-alt", color: "var(--primary-purple)", title: "Location", text: "Dept. of Microbiology, University of Chittagong · Ramakrishna Mission, Hathazari, Chittagong" },
      { icon: "fa-id-badge",       color: "var(--primary-blue)",   title: "ORCID",    text: "0009-0004-2253-7527" },
      { icon: "fa-envelope",       color: "var(--primary-cyan)",   title: "Email",    text: "TODO@example.com" },
    ],
  },

  /* ---------- FOOTER ---------- */
  footer: {
    copyright: "© 2026 RSV Lab — Kamol Das. All rights reserved.",
  },
};
