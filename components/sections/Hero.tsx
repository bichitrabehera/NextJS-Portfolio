import Button from "@/components/ui/button";
import { LinkedIn, GitHubLight, Twitter, XLight } from "developer-icons";

function Home() {
  return (
    <section id="home" className="mx-auto flex-col py-12 md:flex-row">
      <div className="mt-10 space-y-6 text-white/40">
        <p>
          Hi, I&apos;m <span className="text-white font-display text-2xl ">Bichitra Behera.</span>
        </p>
        <p>A full-stack
          developer building modern web products with a focus on clean systems and
          great UX.
        </p>
        <p>
          Always open to freelance work and collaborations.
        </p>
        <p>
          Find me on{" "}
          <span className="inline-flex flex-wrap items-center gap-2">
            <InlineChip href="https://github.com/bichitrabehera">
              <GitHubLight className="text-foreground/60 hover:text-foreground h-3 w-3" />
              GitHub ,
            </InlineChip>
            <InlineChip href="https://x.com/bichitradotdev">
              <XLight className="text-foreground/60 hover:text-foreground h-3 w-3" />
              X ,</InlineChip>
            <InlineChip href="https://www.linkedin.com/in/bichitrabehera">
              <LinkedIn className="text-foreground/60 hover:text-foreground h-3 w-3" />
              LinkedIn
            </InlineChip>
            or{" "}
            <InlineChip href="/bichitra_behera_resume.pdf">
              resume
            </InlineChip>
          </span>
        </p>



        <p>
          Got something worth building?{" "}
          <span className="text-white">let&apos;s talk.</span>
        </p>

        <span className="inline-flex flex-wrap items-center gap-2">
          <Button
            as="a"
            href="https://x.com/bichitradotdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter DM
          </Button>
          <span className="text-xs text-white/35">or</span>
          <Button
            as="a"
            href="mailto:bichitrabehera.345@gmail.com"
            variant="primary"
          >
            Email me
          </Button>
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
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-white underline underline-offset-4 hover:text-white/50"
    >
      {children}
    </a>
  );
}
