"use client";

import { memo } from "react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon, MailIcon, XIcon } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { Divider } from "../ui/Divider";

function Home() {
  return (
    <section
      id="home"
      className="max-w-2xl mx-auto px-6 pt-12 text-foreground bg-background"
    >
      <div className="relative mb-10">
        <div className="rounded-2xl border border-foreground/20 w-fit">
          <Image
            src="/assets/me.jpg"
            alt="Bichitra Behera"
            width={120}
            height={120}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>

      <div
        className="space-y-4 text-white/35"
        style={{
          lineHeight: 2,
          wordSpacing: "0.1em",
          letterSpacing: "0.015em",
          fontSize: "16px",
        }}
      >
        <p>
          hi, i&apos;m{" "}
          <span className="text-white font-semibold tracking-wide">
            Bichitra
          </span>{" "}
          a full-stack developer building modern web products. i focus on fast,
          reliable systems, clean architecture, and thoughtful developer
          experience.
        </p>

        <p className="text-white">
          building{" "}
          <a
            href="https://tixly.bichitrabehera.dev/"
            target="_blank"
            className="font-semibold underline underline-offset-4 hover:opacity-80"
          >
            tixlyai
          </a>{" "}
        </p>

        <p>
          i build cool stuff with tech i love, always shipping{" "}
          <span className="text-white font-semibold tracking-wide">
            <InlineChip
              href="https://github.com/bichitrabehera"
              icon={GithubIcon}
            >
              GitHub
            </InlineChip>{" "}
            <InlineChip href="https://x.com/bichitradotdev" icon={XIcon}>
              Twitter
            </InlineChip>{" "}
            <InlineChip
              href="https://www.linkedin.com/in/bichitrabehera"
              icon={LinkedinIcon}
            >
              LinkedIn
            </InlineChip>
          </span>
        </p>

        <p>
          got an idea worth building?{" "}
          <span className="text-white">let&apos;s chat</span>{" "}
          <InlineChip href="https://x.com/bichitradotdev" icon={XIcon}>
            Twitter DM
          </InlineChip>{" "}
          <span className="text-white/35 text-xs mx-1">or</span>{" "}
          <InlineChip
            href="mailto:bichitrabehera.345@gmail.com"
            icon={MailIcon}
          >
            Email me
          </InlineChip>
        </p>
      </div>

      <Divider />
    </section>
  );
}

export default memo(Home);

function InlineChip({
  href,
  children,
}: {
  href: string;
  icon?: LucideIcon; // or IconType for react-icons
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 underline decoration-dotted italic"
      style={{ wordSpacing: 0, letterSpacing: "0.01em" }}
    >
      {children}
    </a>
  );
}
