function Home() {
  return (
    <section id="home" className="mx-auto flex-col py-8 md:flex-row">
      <div className="mt-10 space-y-6 text-white/60">
        {/* <p className="mb-8 text-white">
          Currently shipping{" "}
          <a
            href="https://tixly.bichitrabehera.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Tixly
          </a>{" "}
          &{" "}
          <a
            href="https://iconora.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Iconora
          </a>{" "}
        </p> */}
        <p>
          Hi, I&apos;m <span className="text-white">Bichitra</span> — a full-stack
          developer building modern web products. I focus on fast, reliable
          systems, clean architecture, and thoughtful developer experience.
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
          <span className="text-white">let&apos;s chat</span>{" "}
          <span className="inline-flex flex-wrap items-center gap-2">
            <InlineChip href="https://x.com/bichitradotdev">
              Twitter DM
            </InlineChip>
            <span className="text-xs text-white/35">or</span>
            <InlineChip href="mailto:bichitrabehera.345@gmail.com">
              Email me
            </InlineChip>
          </span>
        </p>
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
