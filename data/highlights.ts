export type HighlightKind =
  | "research"
  | "hackathon"
  | "event"
  | "certification";

export type Highlight = {
  description: string;
  date: string;
  link?: string;
  kind: HighlightKind;
};

export const highlights: Highlight[] = [
  {
    description:
      "Co-authored a research paper on Graph Neural Networks for crystal property prediction at the International Journal of Scientific Research.",
    date: "2026",
    link: "https://www.ijsr.net/getabstract.php?paperid=SR26513224012",
    kind: "research",
  },
  {
    description:
      "Conducted a hands-on workshop on Model Context Protocol and AI agents at SheBuilds Bangalore × DSU Harohalli.",
    date: "2026",
    kind: "event",
  },
  {
    description:
      "Organized and moderated a Founders Talk on startups, entrepreneurship, and career growth at SheBuilds Bangalore.",
    date: "2026",
    kind: "event",
  },
  {
    description:
      "Organized a TEDx-style tech talk covering speaker coordination, event planning, and audience engagement at SheBuilds Bangalore.",
    date: "2026",
    kind: "event",
  },
  {
    description:
      "Designed and developed a 3-level browser game for Tech-O-Ween, a college technical event.",
    date: "2025",
    kind: "event",
  },
  {
    description:
      "Completed Claude Code 101, an introductory course by Anthropic.",
    date: "2026",
    link: "https://verify.skilljar.com/c/q6c6rvz3n9y8",
    kind: "certification",
  },
  {
    description: "Completed Introduction to Agent Skills by Anthropic.",
    date: "2026",
    link: "https://verify.skilljar.com/c/o7icvheha2f9",
    kind: "certification",
  },
  {
    description:
      "Won 1st place at HackVerse by building and presenting an AI/ML-based solution.",
    date: "2025",
    kind: "hackathon",
  },
  {
    description:
      "Reached the Top 5 at HACKABHiGNA with an AI-powered lead generation and conversion platform.",
    date: "2025",
    kind: "hackathon",
  },
  {
    description:
      "Secured 3rd place at DecodeX through algorithmic problem-solving and rapid implementation.",
    date: "2025",
    kind: "hackathon",
  },
  {
    description: "Reached the finals of Crack-a-thon and secured 3rd place.",
    date: "2025",
    kind: "hackathon",
  },
  {
    description:
      "Published a research paper on an IoT-based gas leakage detection and alert system in JETIR.",
    date: "2024",
    link: "https://www.jetir.org/view?paper=JETIR2401242",
    kind: "research",
  },
];
