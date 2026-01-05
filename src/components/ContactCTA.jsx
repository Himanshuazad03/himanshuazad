"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-cyan-500/10 blur-[160px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-100">
          Let’s build something{" "}
          <span className="text-cyan-400">meaningful</span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-xl leading-relaxed text-slate-300">
          I design and build scalable, modern web applications — turning ideas
          into production-ready solutions through clean architecture and
          thoughtful user experiences.
        </p>

        {/* Context line (this is the differentiator) */}
        <p className="mt-4 text-lg text-slate-500">
          Available for full-time roles, contract work, and long-term
          collaborations.
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-yellow-300 text-slate-950 hover:bg-yellow-500"
            asChild
          >
            <Link href="/contact">Start a conversation</Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-slate-700 text-slate-900 hover:bg-slate-900 hover:text-slate-50"
            asChild
          >
            <Link href="/projects">View my work</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
