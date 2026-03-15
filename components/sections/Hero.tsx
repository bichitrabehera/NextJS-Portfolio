"use client";

import { memo } from "react";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/data/social";
import { GithubIcon, LinkedinIcon, MailIcon, XIcon } from "lucide-react";

function Home() {
  const age = (() => {
    const b = new Date(2005, 3, 6);
    const t = new Date();
    return (
      t.getFullYear() -
      b.getFullYear() -
      +(t < new Date(t.getFullYear(), b.getMonth(), b.getDate()))
    );
  })();

  return (
    <section
      id="home"
      className="max-w-3xl mx-auto px-6 py-12 text-foreground bg-background"
    >
      <div className="relative mb-10">
        <div className="rounded-2xl border border-foreground/20 p-1 w-fit">
          <Image
            src="/assets/mee.jpeg"
            alt="Bichitra Behera"
            width={120}
            height={120}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>

     <div
  className="space-y-3 text-white/75"
  style={{ lineHeight: 2, wordSpacing: "0.1em", letterSpacing: "0.015em", fontSize: "16px" }}
>
  <p>
    hi, i&apos;m <span className="text-white font-semibold tracking-wide">Bichitra</span>  a
    full-stack developer building modern web products.
    i focus on fast, reliable systems, clean architecture, and thoughtful
    developer experience. i build cool stuff with tech i love, always shipping{" "}
    <InlineChip href="https://github.com/bichitrabehera" icon={GithubIcon}>GitHub</InlineChip>{" "}
    <InlineChip href="https://x.com/bichitradotdev" icon={XIcon}>Twitter</InlineChip>{" "}
    <InlineChip href="https://www.linkedin.com/in/bichitrabehera" icon={LinkedinIcon}>LinkedIn</InlineChip>
  </p>

  <p>
    got an idea worth building?{" "}
    <span className="text-white">let&apos;s chat</span>{" "}
    <InlineChip href="https://x.com/bichitradotdev" icon={XIcon}>Twitter DM</InlineChip>{" "}
    <span className="text-white/35 text-xs mx-1">or</span>{" "}
    <InlineChip href="mailto:bichitrabehera.345@gmail.com" icon={MailIcon}>Email me</InlineChip>
  </p>
</div>
    </section>
  );
}

export default memo(Home);  


function InlineChip({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 border border-white/20 hover:border-white/50 px-2.5 py-0.5 rounded-full text-[13px] bg-black/40 text-white/80 hover:text-white align-middle relative -top-px transition-colors whitespace-nowrap"
      style={{ wordSpacing: 0, letterSpacing: "0.05em" }}
    >
      <Icon className="w-3.5 h-3.5" />
      {children}
    </a>
  );
}