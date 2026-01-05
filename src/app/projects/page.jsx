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
  const sectionRef = useRef(null);

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
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.5,
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
    <section ref={sectionRef} className="pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" />
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[600px]
          -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 relative">
        {/* ---------- SECTION HEADING ---------- */}
        <div className="mb-24 text-center">
          <h2
            ref={headingRef}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-100"
          >
            {"Selected Projects".split("").map((char, i) => (
              <span key={i} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <p className="mt-6 max-w-xl mx-auto text-lg text-slate-400">
            A selection of projects that reflect my approach to building
            scalable, production-ready web applications.
          </p>
        </div>

        {/* ---------- PROJECT LIST ---------- */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="project-card border-slate-800 bg-slate-900/40 backdrop-blur"
            >
              <CardContent className="p-0">
                <div
                  className={`grid items-center gap-16 lg:grid-cols-2 p-8 md:p-12 ${
                    index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* IMAGE */}
                  <div
                    className={` ${index % 2 !== 0 ? "lg:col-start-2" : ""}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1000}
                      height={900}
                      className="rounded-2xl object-cover relative z-10 bottom-10"
                      priority
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-semibold text-slate-100">
                      {project.title}
                    </h3>

                    {/* DESCRIPTION POINTS */}
                    <div className="max-w-xl space-y-3">
                      {project.description.map((item, i) => (
                        <div key={item.id} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          <div>
                            <p className="text-slate-200 font-medium text-sm">
                              {item.title}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t, i) => (
                        <div
                          key={t.name}
                          className="flex h-10 w-10 items-center justify-center
                    rounded-lg border border-slate-700 bg-slate-600/80"
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

                    {/* LINKS */}
                    <div className="flex gap-4 pt-4">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-lg
                    bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950
                    hover:bg-cyan-400 transition"
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
