import {
  LinkedIn,
  GitHubLight,
  XLight,
  Gmail,
  GitHubDark,
  XDark,
} from "developer-icons";
import ThemeToggle from "@/components/ui/ThemeToggle";

function Home() {
  return (
    <section id="home" className="mx-auto flex-col pt-24 pb-12 md:flex-row">
      <div className="text-foreground space-y-4 text-justify">
        <p>Hey, I&apos;m</p>

        <p>
          <span className="font-bold text-xl display">Bichitra Behera.</span>
        </p>

        <p>
          I design and build modern web products with a focus on thoughtful UX,
          clean engineering, and practical AI. I enjoy taking ideas from an
          early concept to a polished product that people can actually use.
        </p>

        <p>Always open to freelance work and collaborations.</p>

        <p>
          Grab a copy of my{" "}
          <InlineChip href="/bichitra_behera_resume.pdf">Resume</InlineChip>
        </p>

        <p>
          Find me on {"    "}
          <span className="inline-flex flex-wrap items-center gap-2">
            <InlineChip href="https://github.com/bichitrabehera">
              <GitHubDark className="theme-icon-dark h-3 w-3" />
              <GitHubLight className="theme-icon-light h-3 w-3" />
              GitHub
            </InlineChip>

            <InlineChip href="https://x.com/bichitradotdev">
              <XDark className="theme-icon-dark h-3 w-3" />
              <XLight className="theme-icon-light h-3 w-3" />X
            </InlineChip>

            <InlineChip href="https://www.linkedin.com/in/bichitrabehera">
              <LinkedIn className="text-foreground hover:text-foreground h-3 w-3" />
              LinkedIn
            </InlineChip>
          </span>
        </p>

        <p>
          Got something worth building?{" "}
          <span className="text-foreground">let&apos;s talk.</span>
        </p>

        <span className="inline-flex flex-wrap items-center gap-2">
          <InlineChip href="https://x.com/bichitradotdev">
            <XDark className="theme-icon-dark text-foreground hover:text-foreground h-3 w-3" />
            <XLight className="theme-icon-light text-foreground hover:text-foreground h-3 w-3" />
            X
          </InlineChip>

          <span className="text-foreground/45">or</span>

          <InlineChip href="mailto:bichitrabehera.345@gmail.com">
            <Gmail className="text-foreground hover:text-foreground h-3 w-3" />
            bichitrabehera.345@gmail.com
          </InlineChip>
        </span>
      </div>
    </section>
  );
}

export default Home;

function InlineChip({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="border-foreground/20 border-dashed bg-foreground/5 text-foreground hover:text-foreground/50 inline-flex items-center gap-1.5 rounded border px-2 py-0.5 transition-colors"
    >
      {children}
    </a>
  );
}
