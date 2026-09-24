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
     \\red{text}        → red text
     [label](https://…) → inline link

   Literal asterisks/underscores won't trigger formatting unless
   they wrap text. Because this is JavaScript, type two backslashes in the
   source ("\\red{text}") to produce the \red{text} formatting command.
   Use "\n" inside a detail string for a line break.
   ============================================================ */

window.CV = {
  /* ---- Header ---- */
  name: "James J. Kim",
  role: "PhD in CS",
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
    "I'm a first-year PhD student in Computer Science at Cornell, broadly interested in accelerating and automating scientific discovery. I'm fortunate to be advised by [Jennifer Sun](https://jenjsun.com/) and [Peter Frazier](https://people.orie.cornell.edu/pfrazier/). Lately, I've been working as a part of [AI-MI](https://aimi.cornell.edu/).",
    "During my undergrad, I developed computational models of brain-behavior dynamics in substance use addiction with Amy Kuceyeski in the [CoCo Lab](https://www.cocolaboratory.com/), and worked on real-time acoustic sensing for hand pose tracking in wearable tech with Cheng Zhang in the [SciFi Lab](https://scifilab.org/).",
    "Happy to chat.",
  ],

  /* ---- Link row under the name ----
     Order here is the order they appear. Remove or add freely. */
  links: [
    { label: "email", href: "mailto:jjk297@cornell.edu" },
    { label: "linkedin", href: "https://linkedin.com/in/biojameskim" },
    { label: "scholar", href: "https://scholar.google.com/citations?user=zmmeZvEAAAAJ&hl=en" },
    { label: "github", href: "https://github.com/biojameskim" },
    { label: "writing", href: "#writing" },
    { label: "cv", href: "assets/cv.pdf" },
  ],

  /* ---- Writing posts (list view) ----
     Each entry shows up in the "writing" view's post list. The slug must
     match a key in window.POSTS (see posts.js) for the inline view to render.
     Most recent first. Leave as [] to show "Nothing here yet." */
  posts: [
    { slug: "the-pot-of-the-2020s", date: "19 Aug 2025", title: "The “pot” of the (20)20s" },
  ],

  /* ---- News ----
     Most recent first. Leave as [] to hide the whole section. */
  news: [
    { date: "Aug 2026", text: "Started my PhD in CS at Cornell. Many thanks to Jenn, Peter, and Kilian."},
    { date: "Aug 2025", text: "Started my MS in CS at Cornell. Many thanks to Amy and Mert." },
  ],

  /* ---- Education ---- */
  education: [
    {
      school: "Cornell University",
      degree: "Ph.D. in Computer Science",
      years: "2026 — Present",
      detail: "Advised by Jennifer J. Sun & Peter Frazier",
    },
    {
      school: "Cornell University",
      degree: "M.S. in Computer Science",
      years: "2025 — Present",
      detail: "*Fully-funded research-based MS (cohort size — 7)*\nGPA: 4.1",
    },
    {
      school: "Cornell University",
      degree: "B.A. in Computer Science, B.A. in Mathematics",
      years: "2021 — 2025",
      detail: "*Distinction in All Subjects*\nGPA: 3.9",
    },
  ],

  /* ---- Publications ----
     Add any links with `links: [{ label: "Name", href: "https://…" }]`.
     Links render in the order listed.

     `authorsShown` (optional) is the number of authors to display before
     collapsing the rest into a "… and N more" toggle that expands inline
     when clicked. Omit it (or set it >= the total author count) to always
     show the full list. */
  publications: [
    {
      title: "Contrastive Discovery: Open-Ended Scientific Discovery over Competing Explanations",
      authors: "Ziang Liu\\*, __**James J. Kim**__\\*, Yijia Dai, Jennifer J. Sun",
      venue: "**NeurIPS '26**, *LM4Sci \\red{**(Oral)**} @ **COLM '26***",
      year: "2026",
      links: [
        { label: "Paper", href: "https://openreview.net/forum?id=LAUn8zPH0B" },
        { label: "Website", href: "https://www.biojameskim.me/contrastive-discovery/" },
      ],
    },
    {
      title: "The Reliability Gap in Agentic Evidence Verification for Materials Science",
      authors: "Albert Gong, __**James J. Kim**__, Anmol Kabra, Aaditya Panigrahi, Jiashuo Wang, Arjun B. Mulchandani, Michael Freeman, Fatmagul Katmer, Joshua Peters Wakefield, Linxi Zhao, Chao Wan, Akanksha Sarkar, Yoav Artzi, Leslie M Schoop, John Thickstun, Kilian Q Weinberger, Eun-Ah Kim, Peter I. Frazier, Jennifer J. Sun",
      authorsShown: 3,
      venue: "*FM4Science, AIWILD @ **ICLR '26***",
      year: "2026",
      links: [
        { label: "Paper", href: "https://openreview.net/forum?id=8LZhlws9Ye" },
      ],
    },
    {
      title: "Predicting future alcohol use from baseline brain connectomes",
      authors: "__**James J. Kim**__, Qingyu Zhao, Mert Sabuncu, Amy Kuceyeski",
      venue: "*Poster presented @ **OHBM '25***",
      year: "2025",
      links: [
        { label: "Preprint", href: "https://docs.google.com/document/d/1wypHw7LFACf96U31ZrD1w10TBpJDWjBZ/edit?usp=sharing&ouid=100273212023285456894&rtpof=true&sd=true" },
      ],
    },
    {
      title: "EchoWrist: Continuous Hand Pose Tracking and Hand-Object Interaction Recognition Using Low-Power Active Acoustic Sensing On a Wristband",
      authors: "Chi-Jung Lee, Ruidong Zhang, Devansh Agarwal, Tianhong Catherine Yu, Vipin Gunda, Oliver Lopez, __**James J. Kim**__, Sicheng Yin, Boao Dong, Ke Li, Mose Sakashita, François Guimbretière, Cheng Zhang",
      authorsShown: 7,
      venue: "**CHI '24**",
      year: "2024",
      links: [
        { label: "Paper", href: "https://dl.acm.org/doi/10.1145/3613904.3642910" },
        { label: "Cornell Chronicle", href: "https://news.cornell.edu/stories/2024/04/wristband-uses-echos-ai-track-hand-positions-vr-and-more" },
      ],
    },
  ],

  /* ---- Research experience ---- */
  research: [
    {
      role: "Graduate Research Assistant",
      org: "[NSF Artificial Intelligence Materials Institute (AI-MI)](https://aimi.cornell.edu/) • Cornell University",
      years: "Aug 2026 — Present",
      detail: "Junior theme lead for Sci-LLM. Working with Jennifer Sun, Peter Frazier, and Kilian Weinberger",
    },
    {
      role: "Graduate Research Assistant",
      org: "[Sun Lab](https://lab.jenjsun.com/) • Cornell University",
      years: "Jun 2025 — Present",
      detail: "AI agents for scientific discovery",
    },
    {
      role: "Research Assistant",
      org: "[CoCo Lab](https://www.cocolaboratory.com/) • Weill Cornell Medicine",
      years: "Jan 2024 — Jan 2026",
      detail: "Dug into fMRI/dMRI connectome–behavior mapping to predict future heavy alcohol use. Advised by Amy Kuceyeski and Mert Sabuncu. \n*[Supported by the Bowers CIS Undergraduate Research Experience (BURE) program (Summer 2024)](https://bowers.cornell.edu/news-stories/summer-program-gives-undergraduates-taste-research-life#:~:text=James%20Kim%20%E2%80%9925%2C%20a%20computer%20science%20and%20math%20major%2C%20applied%20machine%20learning%20models%20to%20analyze%20brain%20scans%20during%20this%20summer%E2%80%99s%20Bowers%20Undergraduate%20Research%20Experience%20(BURE)*",
    },
    {
      role: "Research Assistant",
      org: "[SciFi Lab](https://scifilab.org/) • Cornell University",
      years: "Aug 2023 — May 2024",
      detail: "Advised by Cheng Zhang in the SciFi Lab. Contributed to EchoWrist *(published in CHI'24)*",
    },
  ],

  /* ---- Work experience ---- */
  work: [
    {
      role: "AI/ML Engineer Intern",
      org: "[Millennium Management](https://www.mlp.com/)",
      years: "Jun 2026 — Aug 2026",
      detail: "Infra Tech. Mentored by Chris Minekime. Won the [Intern AI hackathon](https://web.archive.org/web/20260807191113/https://www.mlp.com/life-at-millennium/millennium-interns-participate-in-ai-hackathon/).",
    },
    {
      role: "LLM Research Software Engineer Intern",
      org: "Naval Sea Systems Command (NAVSEA)",
      years: "Jul 2025 — Aug 2025",
      detail: "Fine-tuned lightweight LLMs for military NLP applications on edge devices. Mentored by Dr. Jeonghun Noh, in collaboration with [CBU](https://calbaptist.edu/).",
    },
    {
      role: "Software Engineer Intern",
      org: "[Southern California Edison (SCE)](https://www.edison.com/)",
      years: "May 2023 — Aug 2023",
      detail: "Contributed to internal GPT and NEM Billing for 15M+ users across 430 cities, reducing call volume by 22K+/month. Won the intern expo (1st out of 95 projects).",
    },
  ],

  /* ---- Teaching ---- */
  teaching: [
    {
      role: "Graduate Teaching Assistant",
      course: "Deep Learning ([CS 4/5782](https://www.cs.cornell.edu/courses/cs4782/2026sp/))",
      org: "Cornell University",
      years: "Spring '26",
      detail: "Profs. Kilian Weinberger & Wei-Chiu Ma",
    },
    {
      role: "Head Graduate Teaching Assistant",
      course: "Machine Learning ([CS 3/5780](https://www.cs.cornell.edu/courses/cs3780/2025fa/))",
      org: "Cornell University",
      years: "Fall '25",
      detail: "Prof. John Thickstun",
    },
    {
      role: "Course Consultant",
      course: "Data Structures and Functional Programming ([CS 3110](https://cs3110.github.io/textbook/cover.html))",
      org: "Cornell University",
      years: "Spring '24, Fall '24",
      detail: "Prof. Michael Clarkson\n*Received CS Course Staff Exceptional Service Award (SP'24)*",
    },
  ],

  /* ---- Academic service ---- */
  service: [
    {
      role: "Bilingual Intepreter & Language Instructor",
      org: "[Me & Korea, Inc.](https://meandkorea.org/)",
      years: "2017 — Present",
      detail: "Interpret for the Korean adoptee community across the US and Europe in search of birth family and re-connection to Korean heritage."
    },
    {
      role: "Logistical Coordinator – Symposium Series",
      org: "[MELBA Journal](https://www.melba-journal.org/)",
      years: "2024",
      detail: "Organized MELBA symposiums showcasing leading research in ML and biomedical imaging, promoting open access to scientific knowledge.",
    },
  ],

  /* ---- Footer ---- */
  footer: {
    copyrightYear: 2026,
    lastUpdated: "September 2026",
  },
};
