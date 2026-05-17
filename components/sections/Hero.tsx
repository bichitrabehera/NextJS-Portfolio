"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  XIcon,
  ArrowUpRight,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { Divider } from "../ui/Divider";

function Home() {
  return (
    <section
      id="home"
      className="max-w-2xl mx-auto px-6 pt-0 text-foreground bg-background"
    >
      {/* Profile Image */}
      <div className="relative mb-8">
        <div className="rounded-2xl border border-white/10 w-fit">
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

      {/* Current Work */}
      <p className="text-white mb-8">
        building{" "}
        <a
          href="https://tixly.bichitrabehera.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          tixlyai
        </a>
      </p>

      {/* Main Bio */}
      <div className="space-y-6 text-white/60 leading-relaxed">
        <p>
          hi, i'm <span className="text-white font-semibold">Bichitra</span>{" "}
          — a full-stack developer building modern web products. i focus on
          fast, reliable systems, clean architecture, and thoughtful
          developer experience.
        </p>

        {/* AI Quote */}
        <Link
          href="/ai"
          className="group my-8 py-6 border-y border-white/10 block hover:border-white/20 transition-colors"
        >
          What AI thinks about Bichitra ? Click here
        </Link>

        {/* Social Links */}
        <p>
          i build cool stuff with tech i love, always shipping{" "}
          <span className="inline-flex flex-wrap gap-2 items-center">
            <InlineChip
              href="https://github.com/bichitrabehera"
              icon={GithubIcon}
            >
              GitHub
            </InlineChip>
            <InlineChip href="https://x.com/bichitradotdev" icon={XIcon}>
              Twitter
            </InlineChip>
            <InlineChip
              href="https://www.linkedin.com/in/bichitrabehera"
              icon={LinkedinIcon}
            >
              LinkedIn
            </InlineChip>
          </span>
        </p>

        {/* CTA */}
        <p>
          got an idea worth building?{" "}
          <span className="text-white">let's chat</span>{" "}
          <span className="inline-flex flex-wrap gap-2 items-center">
            <InlineChip href="https://x.com/bichitradotdev" icon={XIcon}>
              Twitter DM
            </InlineChip>
            <span className="text-white/35 text-xs">or</span>
            <InlineChip
              href="mailto:bichitrabehera.345@gmail.com"
              icon={MailIcon}
            >
              Email me
            </InlineChip>
          </span>
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
  icon?: LucideIcon;
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
