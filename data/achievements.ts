export type AchievementKind = "research" | "hackathon";

export type Achievement = {
  title: string;
  description: string;
  date: string;
  link: string;
  kind: AchievementKind;
};

export const achievements: Achievement[] = [
  {
    title: "Published Research Paper",
    description:
      "Co-authored and published a research paper on Graph Neural Networks for crystal property prediction, exploring advanced AI techniques for materials science and predictive modeling.",
    date: "2026",
    link: "https://www.ijsr.net/getabstract.php?paperid=SR26513224012",
    kind: "research",
  },
  {
    title: "Published IoT Research Paper",
    description:
      "Published a research paper on an IoT-based gas leakage detection system featuring real-time monitoring, automated alerts, and enhanced safety mechanisms.",
    date: "2024",
    link: "https://www.jetir.org/view?paper=JETIR2401242",
    kind: "research",
  },
  {
    title: "Crack-a-thon Finalist",
    description:
      "Built a full-stack AI application within 6 hours, integrating emotion detection, Spotify recommendations, conversational AI, and mood analytics.",
    date: "2025",
    link: "",
    kind: "hackathon",
  },
  {
    title: "Top 5 – HACKABHiGNA",
    description:
      "Ranked among the Top 5 teams by developing an AI-powered lead generation and conversion optimization platform with workflow automation and analytics.",
    date: "2025",
    link: "",
    kind: "hackathon",
  },
  {
    title: "1st Place – HackVerse",
    description:
      "Won 1st place by delivering an innovative AI/ML solution, demonstrating strong technical execution, teamwork, and problem-solving skills.",
    date: "2025",
    link: "",
    kind: "hackathon",
  },
  {
    title: "3rd Place – DecodeX",
    description:
      "Secured 3rd place in a competitive coding challenge through efficient problem-solving, algorithmic thinking, and rapid implementation.",
    date: "2025",
    link: "",
    kind: "hackathon",
  },
];