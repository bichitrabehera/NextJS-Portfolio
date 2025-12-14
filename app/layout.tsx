import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: {
    default: "Bichitra Behera | Full Stack Developer",
    template: "%s | Bichitra Behera",
  },
  description:
    "Data Science Student (3rd Year) | MERN Stack & Generative AI Enthusiast | Skilled in JavaScript, React, Node.js, Express & MongoDB | Exploring LLMs & Prompt Engineering | Open to Internships",
  keywords: [
    "Bichitra Behera",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Generative AI",
    "LLM",
    "Portfolio",
  ],
  authors: [{ name: "Bichitra Behera" }],
  creator: "Bichitra Behera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bichitrabehera.dev",
    title: "Bichitra Behera | Full Stack Developer",
    description:
      "Data Science Student (3rd Year) | MERN Stack & Generative AI Enthusiast",
    siteName: "Bichitra Behera Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bichitra Behera | Full Stack Developer",
    description:
      "Data Science Student (3rd Year) | MERN Stack & Generative AI Enthusiast",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here if needed
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
