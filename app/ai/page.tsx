import { Divider } from "@/components/ui/Divider";
import type { Metadata } from "next";
import { ChatGPT, ClaudeAI } from "developer-icons";
import { SiPerplexity } from "react-icons/si";

export const metadata: Metadata = {
  title: "What AI Thinks",
  description:
    "What AI thinks about Bichitra Behera — from Claude, ChatGPT, and Perplexity",
};

const aiOpinions = [
  {
    name: "Claude",
    by: "Anthropic",
    icon: <ClaudeAI />,
    quote: `A pragmatic visionary with a bias for action. You think fast, move faster, and transform ideas into reality without hesitation. Direct, curious, and results-driven—you see potential everywhere and waste no time capturing it.`,
    emphasis: "ships with intent",
  },
  {
    name: "ChatGPT",
    by: "OpenAI",
    icon: <ChatGPT />,
    quote: `not just a developer — a fast-moving product builder
      who cares about shipping, usability, and iteration. strong in
      frontend + product thinking, with growing depth in backend
      systems and scalability.`,
    emphasis: "bridges design & engineering",
  },
  {
    name: "Perplexity",
    by: "Perplexity AI",
    icon: <SiPerplexity />,
    quote: `product-first builder who ships fast and thinks in systems. focused on
        reliability, UX, and clean architecture with a bias toward action,
        iteration, and real-world impact. actively explores AI/LLMs to build
        better, smarter products `,
    emphasis: "real projects, real shipping",
  },
];

export default function AIPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-6 py-8 flex-1 min-h-screen text-foreground bg-neutral-900">
        <div className="mb-12">
          <h1 className="text-lg font-semibold text-white mb-2">
            what ai thinks about bichitra
          </h1>
          <p className="text-white/40 text-sm">
            three different models, one consistent take
          </p>
        </div>

        <div className="space-y-10">
          {aiOpinions.map((ai) => (
            <div key={ai.name} className="">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center text-xs text-white/30">
                  {ai.icon}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{ai.name}</p>
                  <p className="text-white/30 text-xs">{ai.by}</p>
                </div>
              </div>

              <p className="text-white/60 text-sm mb-4">
                {ai.quote}
              </p>

              <span className="text-xs text-white/40 italic">
                ~ {ai.emphasis}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
