export type HighlightKind =
  | "research"
  | "hackathon"
  | "event"
  | "certification";

export type Highlight = {
  title: string;
  organization?: string;
  description?: string;
  date: string;
  link?: string;
  kind: HighlightKind;
  stats?: string;
};

export const highlights: Highlight[] = [
  {
    title: "Published Research Paper",
    organization: "International Journal of Scientific Research",
    description:
      "Co-authored research on Graph Neural Networks for crystal property prediction, exploring AI techniques for materials science and predictive modeling.",
    date: "2026",
    link: "https://www.ijsr.net/getabstract.php?paperid=SR26513224012",
    kind: "research",
  },
  {
    title: "MCP & AI Agents Workshop",
    organization: "SheBuilds Bangalore × DSU Harohalli",
    description:
      "Conducted a hands-on workshop introducing Model Context Protocol and AI agents, guiding students through building and connecting AI applications.",
    date: "2026",
    kind: "event",
  },
  {
    title: "Founders Talk",
    organization: "SheBuilds Bangalore",
    description:
      "Organized an online Founders Talk, coordinating speakers and moderating interactive Q&A sessions on startups, entrepreneurship, and career growth.",
    date: "2026",
    kind: "event",
  },
  {
    title: "TEDx-style Tech Talk",
    organization: "SheBuilds Bangalore",
    description:
      "Organized a TEDx-style speaker event, managing planning, speaker coordination, logistics, and audience engagement.",
    date: "2026",
    kind: "event",
  },
  {
    title: "Tech-O-Ween",
    organization: "College Technical Event",
    description:
      "Designed and developed a 3-level browser game for a technical competition while contributing to event planning and execution.",
    date: "2026",
    stats: "25 Teams",
    kind: "event",
  },
  {
    title: "Claude Code 101",
    organization: "Anthropic",
    date: "2026",
    link: "https://verify.skilljar.com/c/q6c6rvz3n9y8",
    kind: "certification",
  },
  {
    title: "Introduction to Agent Skills",
    organization: "Anthropic",
    date: "2026",
    link: "https://verify.skilljar.com/c/o7icvheha2f9",
    kind: "certification",
  },
  {
    title: "1st Place — HackVerse",
    organization: "HackVerse",
    description:
      "Won 1st place by delivering an AI/ML solution, demonstrating strong technical execution, teamwork, and problem-solving.",
    date: "2025",
    kind: "hackathon",
  },
  {
    title: "Top 5 — HACKABHiGNA",
    organization: "HACKABHiGNA",
    description:
      "Ranked among the Top 5 teams with an AI-powered lead generation and conversion optimization platform.",
    date: "2025",
    kind: "hackathon",
  },
  {
    title: "3rd Place — DecodeX",
    organization: "DecodeX",
    description:
      "Secured 3rd place in a competitive coding challenge through algorithmic problem-solving and rapid implementation.",
    date: "2025",
    kind: "hackathon",
  },
  {
    title: "Crack-a-thon Finalist",
    organization: "Crack-a-thon",
    description:
      "Built a full-stack AI application within 6 hours integrating emotion detection, Spotify recommendations, conversational AI, and mood analytics.",
    date: "2025",
    kind: "hackathon",
  },
  {
    title: "Published IoT Research Paper",
    organization: "JETIR",
    description:
      "Published research on an IoT-based gas leakage detection system featuring real-time monitoring and automated alerts.",
    date: "2024",
    link: "https://www.jetir.org/view?paper=JETIR2401242",
    kind: "research",
  },
];
