"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* BACKGROUND GLOW */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        {/* HEADING */}
        <h2
          className="
            text-4xl md:text-5xl font-semibold tracking-tight
            text-slate-900 dark:text-slate-100
          "
        >
          Let’s build something{" "}
          <span
            className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent
             dark:text-cyan-400"
          >
            meaningful
          </span>
        </h2>

        {/* SUBHEADING */}
        <p
          className="
            mt-6 text-xl leading-relaxed
            text-slate-600 dark:text-slate-300
          "
        >
          I design and build scalable, modern web applications — turning ideas
          into production-ready solutions through clean architecture and
          thoughtful user experiences.
        </p>

        {/* CONTEXT LINE */}
        <p
          className="
            mt-4 text-lg
            text-slate-500 dark:text-slate-500
          "
        >
          Available for full-time roles, contract work, and long-term
          collaborations.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex items-center justify-center gap-4">
          {/* PRIMARY */}
          <Button
            size="lg"
            className="
              bg-yellow-400 text-slate-950 hover:bg-yellow-500
              dark:bg-yellow-300 dark:hover:bg-yellow-500
            "
            asChild
          >
            <Link href="/contact">Start a conversation</Link>
          </Button>

          {/* SECONDARY */}
          <Button
            size="lg"
            variant="outline"
            className="
              border-slate-300 text-slate-700 hover:bg-slate-100
              dark:border-slate-700 dark:text-slate-300
              dark:hover:bg-slate-900 dark:hover:text-slate-50
            "
            asChild
          >
            <Link href="/projects">View my work</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
