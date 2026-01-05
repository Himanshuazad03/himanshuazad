"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/data";
import { Card, CardContent } from "@/components/ui/card";
import QuoteSection from "@/components/QuoteSection";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const headingRef = useRef(null);

  /* ---------- SPLIT TEXT HEADING ---------- */
  useEffect(() => {
    const chars = headingRef.current.querySelectorAll("span");

    gsap.fromTo(
      chars,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  /* ---------- PROJECT CARDS ---------- */
  useEffect(() => {
    gsap.utils.toArray(".project-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative pt-32">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        {/* LIGHT */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:bg-none" />
        {/* DARK */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" />

        {/* GLOW */}
        <div
          className="
            absolute left-1/2 top-0 h-[600px] w-[600px]
            -translate-x-1/2 rounded-full blur-[140px]
             dark:bg-cyan-500/10
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ---------- HEADING ---------- */}
        <div className="mb-24 text-center">
          <h2
            ref={headingRef}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
          >
            {"Selected Projects".split("").map((char, i) => (
              <span key={i} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <p className="mt-6 max-w-xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            A selection of projects that reflect my approach to building
            scalable, production-ready web applications.
          </p>
        </div>

        {/* ---------- PROJECT LIST ---------- */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="
                project-card backdrop-blur
                border border-slate-200 bg-white
                dark:border-slate-800 dark:bg-slate-900/40
                shadow-sm dark:shadow-none
              "
            >
              <CardContent className="p-0">
                <div
                  className={`grid items-center gap-16 lg:grid-cols-2 p-8 md:p-12 ${
                    index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* IMAGE */}
                  <div className={`${index % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1000}
                      height={900}
                      className="rounded-2xl object-cover relative z-10 bottom-6"
                      priority
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
                      {project.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <div className="max-w-xl space-y-3">
                      {project.description.map((item) => (
                        <div key={item.id} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                          <div>
                            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                              {item.title}
                            </p>
                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t) => (
                        <div
                          key={t.name}
                          className="
                            flex h-10 w-10 items-center justify-center rounded-lg
                            border border-slate-300 bg-slate-50
                            dark:border-slate-700 dark:bg-slate-800/80
                          "
                        >
                          <Image
                            src={t.icon}
                            alt={t.name}
                            width={20}
                            height={20}
                          />
                        </div>
                      ))}
                    </div>

                    {/* LINK */}
                    <div className="flex gap-4 pt-4">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="
                            inline-flex items-center gap-2 rounded-lg
                            bg-slate-800 hover:bg-slate-900 px-5 py-2.5 text-sm font-medium text-white
                            hover:bg-cyan-700 transition
                            dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400
                          "
                        >
                          View Project
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <QuoteSection />
    </section>
  );
}
