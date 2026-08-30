import Button from "@/components/ui/button";

function Home() {
  return (
    <section id="home" className="mx-auto flex-col py-12 md:flex-row">
      <div className="mt-10 space-y-6 text-white/40">
        <p>
          Hi, I&apos;m <span className="text-white">Bichitra</span> — a full-stack
          developer building modern web products. I focus on fast, reliable
          systems, clean architecture, and thoughtful developer experience.
        </p>

        <p>
          I build to ship things people actually use — today that&apos;s AI
          tooling and a live client storefront — and I&apos;m always open to
          freelance work and product collaborations.
        </p>

        <p>
          I build cool stuff with tech I love, always shipping{" "}
          <span className="inline-flex flex-wrap items-center gap-2">
            <InlineChip href="https://github.com/bichitrabehera">
              GitHub
            </InlineChip>
            <InlineChip href="https://x.com/bichitradotdev">
              Twitter
            </InlineChip>
            <InlineChip href="https://www.linkedin.com/in/bichitrabehera">
              LinkedIn
            </InlineChip>
          </span>
        </p>

        <p>
          Got an idea worth building?{" "}
          <span className="text-white">let&apos;s chat</span>
        </p>

        <span className="inline-flex flex-wrap items-center gap-2">
          <Button as="a" href="https://x.com/bichitradotdev" target="_blank" rel="noopener noreferrer">
            Twitter DM
          </Button>
          <span className="text-xs text-white/35">or</span>
          <Button as="a" href="mailto:bichitrabehera.345@gmail.com" variant="primary">
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
      className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-white"
    >
      {children}
    </a>
  );
}
