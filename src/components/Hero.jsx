"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/* ---------- ANIMATION VARIANTS ---------- */

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* subtle background glow */}
      <div
        className="pointer-events-none absolute top-[-30%] left-1/2 -translate-x-1/2
        h-[700px] w-[700px] rounded-full bg-cyan-400/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">
        {/* ---------- TEXT CONTENT ---------- */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span
            variants={textItem}
            className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60
              px-4 py-1 text-sm text-slate-300"
          >
            ⚡ Building scalable web products
          </motion.span>

          <motion.h1
            variants={textItem}
            className="mt-6 text-4xl sm:text-4xl md:text-7xl
              font-semibold tracking-tight text-slate-100"
          >
            <span className="block">Full-Stack</span>
            <span
              className="block bg-gradient-to-r from-cyan-400 to-blue-500
              bg-clip-text text-transparent"
            >
              Developer
            </span>
          </motion.h1>

          <motion.h2
            variants={textItem}
            className="mt-2 text-lg sm:text-xl
            font-medium tracking-tight text-slate-300"
          >
            crafting modern SaaS experiences
          </motion.h2>

          <motion.p
            variants={textItem}
            className="mt-6 max-w-xl text-lg text-slate-400"
          >
            I design and build high-performance web applications using Next.js,
            React, and clean backend architecture—focused on clarity,
            scalability, and real-world usability.
          </motion.p>

          {/* ---------- CTA BUTTONS ---------- */}
          <motion.div
            variants={textItem}
            className="mt-8 flex items-center gap-4"
          >
            <Button
              className="bg-yellow-300 text-slate-950 hover:bg-yellow-400"
              asChild
            >
              <Link href="/projects">View Projects</Link>
            </Button>

            <Button
              variant="outline"
              className="border-slate-700 text-slate-900 hover:bg-slate-900 hover:text-slate-50"
              asChild
            >
              <Link href="/Resume.pdf" download>
                Resume
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* ---------- IMAGE / MOCKUP ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.8,
          }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative  backdrop-blur shadow-xl">
            <Image
              src="/photo.png" // replace with your dashboard / app mockup
              alt="App preview"
              width={500}
              height={500}
              className="rounded-3xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
