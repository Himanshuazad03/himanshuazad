"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        {/* Light */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:bg-none" />
        {/* Dark */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" />
        {/* Glow */}
        <div
          className="
            absolute left-1/2 top-32 h-[500px] w-[500px]
            -translate-x-1/2 rounded-full blur-[160px]
             dark:bg-cyan-500/10
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl grid gap-20 lg:grid-cols-2 items-center">
        {/* IMAGE */}
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            relative mx-auto
            w-full max-w-lg lg:max-w-xl xl:max-w-2xl
            lg:pr-6
  "
        >
          <div
            className="
            relative md:bottom-30 overflow-hidden rounded-3xl
            shadow-[0_30px_80px_-30px_rgba(0,0,0,0.3)]
            dark:shadow-xl
    "
          >
            <Image
              src="/photo.png"
              alt="Himanshu Azad"
              width={1200}
              height={1500}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* EYEBROW */}
          <span
            className="
              inline-block rounded-full px-4 py-1 text-sm font-medium
              bg-cyan-100 text-cyan-700
              dark:bg-cyan-400/10 dark:text-cyan-300
            "
          >
            About me
          </span>

          {/* HEADING WITH NAME */}
          {/* HEADING */}
          <div className="space-y-3">
            <h2
              className="
                text-4xl md:text-5xl font-semibold tracking-tight
                text-slate-900 dark:text-slate-100
    "
            >
              Hi, I’m{" "}
              <span
                className="
                    bg-gradient-to-r from-blue-600 to-indigo-500
                    dark:from-cyan-400 dark:to-sky-500
                    bg-clip-text text-transparent
      "
              >
                Himanshu Azad
              </span>
            </h2>

            <p
              className="
      text-xl md:text-2xl
      font-medium leading-relaxed
      text-slate-600 dark:text-slate-400
      max-w-xl
    "
            >
              A full-stack developer who builds products with clarity,
              scalability, and long-term thinking.
            </p>
          </div>

          {/* PARAGRAPHS */}
          <div className="space-y-5 text-lg leading-relaxed">
            <p className="text-slate-600 dark:text-slate-400">
              I focus on building scalable, reliable, and maintainable web
              applications. I care deeply about writing clean code, designing
              systems that age well, and creating user experiences that feel
              intentional rather than rushed.
            </p>

            <p className="text-slate-600 dark:text-slate-400">
              My work spans across frontend and backend — from crafting modern
              interfaces with React and Next.js to designing APIs, data models,
              and background workflows that support real products in production.
            </p>

            <p className="text-slate-600 dark:text-slate-400">
              I enjoy working on meaningful problems, learning continuously, and
              collaborating with people who value ownership, quality, and
              long-term impact over shortcuts.
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid gap-4 sm:grid-cols-2 pt-6">
            {[
              {
                title: "Product-focused mindset",
                desc: "I build with real users, edge cases, and growth in mind.",
              },
              {
                title: "Clean architecture",
                desc: "Readable code, predictable data flow, scalable systems.",
              },
              {
                title: "End-to-end ownership",
                desc: "From idea → UI → backend → deployment.",
              },
              {
                title: "Always improving",
                desc: "I treat learning as a constant, not a phase.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  rounded-xl border p-5
                  border-slate-200 bg-white
                  dark:border-slate-800 dark:bg-slate-900/50
                "
              >
                <h4 className="font-medium text-slate-900 dark:text-slate-100">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
