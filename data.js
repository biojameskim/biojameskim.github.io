/* ============================================================
   CONTENT — edit this file to update the site.
   Everything on the page is rendered from the CV object below.
   To add/remove items: edit, duplicate, or delete entries in
   the arrays. Save and refresh the browser.

   Inline formatting (works in bio, news text, publication
   title/authors/venue, and any entry title/sub/detail — i.e.
   the prose fields, not short labels like name/year/links):
     **bold**           → bold
     *italic*           → italic
     __underline__      → underline
     [label](https://…) → inline link

   Literal asterisks/underscores won't trigger formatting unless
   they wrap text. Use "\n" inside a detail string for a line break.
   ============================================================ */

window.CV = {
  /* ---- Header ---- */
  name: "James J. Kim",
  role: "MS in CS",
  affiliation: "Cornell University",
  // Character(s) between role and affiliation in the hero. Common choices:
  //   "·"  middle dot       "•"  bullet          "—"  em dash
  //   "–"  en dash          "|"  pipe            ","  comma
  //   "at" word (will be padded with spaces automatically)
  roleSeparator: "@",
  // Browser tab title (shown next to the favicon).
  tabTitle: "James J. Kim",
  // Headshot. "auto" looks for assets/photo.{jpg,jpeg,png,webp}.
  // Set to "" to force the stripe placeholder, or to an explicit path
  // (e.g. "assets/my-headshot.png") to override the auto-detect.
  photo: "auto",

  /* ---- About paragraphs ----
     Add as many paragraphs as you want — they'll render in order. */
  bio: [
    "I'm an MS student in Computer Science at Cornell, broadly interested in automating and accelerating scientific discovery. I'm fortunate to be advised by [Jennifer Sun](https://jenjsun.com/).",
    "During my undergrad, I developed computational models of brain-behavior dynamics in substance use addiction with Amy Kuceyeski in the [CoCo Lab](https://www.cocolaboratory.com/), and worked on real-time acoustic sensing for hand pose tracking in wearable tech with Cheng Zhang in the [SciFi Lab](https://scifilab.org/).",
    "Happy to chat.",
  ],

  /* ---- Link row under the name ----
     Order here is the order they appear. Remove or add freely. */
  links: [
    { label: "email",    href: "mailto:jjk297@cornell.edu" },
    { label: "linkedin", href: "https://linkedin.com/in/biojameskim" },
    { label: "scholar",  href: "https://scholar.google.com/citations?user=zmmeZvEAAAAJ&hl=en" },
    { label: "github",   href: "https://github.com/biojameskim" },
    { label: "bearblog", href: "https://biojameskim.bearblog.dev/" },
    { label: "cv",       href: "assets/cv.pdf" },
  ],

  /* ---- News ----
     Most recent first. Leave as [] to hide the whole section. */
  news: [
    { date: "Aug 2025", text: "Started my MS in CS at Cornell" },
  ],

  /* ---- Education ---- */
  education: [
    {
      school: "Cornell University",
      degree: "Ph.D. in Computer Science",
      years: "2026 — Present",
      detail: "Advised by Jennifer Sun",
    },
    {
      school: "Cornell University",
      degree: "M.S. in Computer Science",
      years: "2025 — 2027",
      detail: "*Fully-funded research-based MS (cohort size — 7)*\nGPA: 4.0",
    },
    {
      school: "Cornell University",
      degree: "B.A. in Computer Science, B.A. in Mathematics",
      years: "2021 — 2025",
      detail: "*Distinction in All Subjects*\nGPA: 3.9",
    },
  ],

  /* ---- Publications ----
     `link` is optional — include it to make the title clickable. */
  publications: [
    {
      title: "The Reliability Gap in Agentic Evidence Verification for Materials Science",
      authors: "Albert Gong, __**James J. Kim**__, Anmol Kabra, Aaditya Panigrahi, Jiashuo Wang, Arjun B. Mulchandani, Michael Freeman, Fatmagul Katmer, Joshua Peters Wakefield, Linxi Zhao, Chao Wan, Akanksha Sarkar, Yoav Artzi, Leslie M Schoop, John Thickstun, Kilian Q Weinberger, Eun-Ah Kim, Peter I. Frazier, Jennifer J. Sun",
      venue: "FM4Science, AIWILD @ ICLR '26",
      year: "2026",
      link: "https://openreview.net/forum?id=8LZhlws9Ye",
    },
    {
      title: "Predicting future alcohol use from baseline brain connectomes",
      authors: "__**James J. Kim**__, Qingyu Zhao, Mert Sabuncu, and Amy Kuceyeski",
      venue: "Manuscript in progress, Poster presented at OHBM '25",
      year: "2025",
    },
    {
      title: "EchoWrist: Continuous Hand Pose Tracking and Hand-Object Interaction Recognition Using Low-Power Active Acoustic Sensing On a Wristband",
      authors: "Chi-Jung Lee, Ruidong Zhang, Devansh Agarwal, Tianhong Catherine Yu, Vipin Gunda, Oliver Lopez, __**James J. Kim**__, Sicheng Yin, Boao Dong, Ke Li, Mose Sakashita, François Guimbretière, and Cheng Zhang",
      venue: "**CHI '24** (ACM Conference on Human Factors in Computing Systems)",
      year: "2024",
      link: "https://dl.acm.org/doi/10.1145/3613904.3642910",
    },
  ],

  /* ---- Research experience ---- */
  research: [
    {
      role: "Graduate Research Assistant",
      org: "Sun Lab • Cornell University",
      years: "Jun 2025 — Present",
      detail: "AI agents for scientific workflows",
    },
    {
      role: "Research Assistant",
      org: "[CoCo Lab](https://www.cocolaboratory.com/) • Weill Cornell Medicine",
      years: "Jan 2024 — Present",
      detail: "Researching future heavy alcohol-use prediction via fMRI/dMRI connectome-behavior mapping with Dr. Amy Kuceyeski. \nSupported by the Bowers CIS Undergraduate Research Experience (BURE) program (Jun 2024 – Aug 2024).",
    },
    {
      role: "Research Assistant",
      org: "[SciFi Lab](https://scifilab.org/) • Cornell University",
      years: "Aug 2023 — May 2024",
      detail: "Advised by Cheng Zhang in the SciFi Lab. Contributed to EchoWrist (published in CHI'24).",
    },
  ],

  /* ---- Work experience ---- */
  work: [
    {
      role: "AI/ML Engineer Intern",
      org: "Millennium Management",
      years: "Jun 2026 — Aug 2026",
      detail: "Summer 2026",
    },
    {
      role: "LLM Research Software Engineer Intern",
      org: "Naval Sea Systems Command (NAVSEA)",
      years: "Jul 2025 — Aug 2025",
      detail: "Fine-tuned lightweight LLMs for military NLP applications on edge devices. Advised by Dr. Jeonghun Noh.",
    },
    {
      role: "Software Engineer Intern",
      org: "Southern California Edison (SCE)",
      years: "May 2023 — Aug 2023",
      detail: "Contributed to internal GPT and NEM Billing for 15M+ users across 430 cities, reducing call volume by 22K+/month. Won the intern expo (1st out of 95 projects).",
    },
  ],

  /* ---- Teaching ---- */
  teaching: [
    {
      role: "Graduate Teaching Assistant",
      course: "Deep Learning (CS 4/5782)",
      org: "Cornell University",
      years: "Spring '26",
      detail: "Profs. Kilian Weinberger & Wei-Chiu Ma",
    },
    {
      role: "Head Graduate Teaching Assistant",
      course: "Machine Learning (CS 3/5780)",
      org: "Cornell University",
      years: "Fall '25",
      detail: "Prof. John Thickstun",
    },
    {
      role: "Course Consultant",
      course: "Data Structures and Functional Programming (CS 3110)",
      org: "Cornell University",
      years: "Spring '24, Fall '24",
      detail: "Prof. Michael Clarkson\n*Received CS Course Staff Exceptional Service Award (SP'24)*",
    },
  ],

  /* ---- Academic service ---- */
  service: [
    {
      role: "Logistical Coordinator – Symposium Series",
      org: "[MELBA Journal](https://www.melba-journal.org/)",
      years: "2024",
      detail: "Organized MELBA symposiums showcasing leading research in ML and biomedical imaging, promoting open access to scientific knowledge",
    },
  ],

  /* ---- Footer ---- */
  footer: {
    copyrightYear: 2026,
    lastUpdated: "April 2026",
  },
};
