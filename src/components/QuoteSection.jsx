"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuoteSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <section className="relative py-36 px-6 overflow-hidden flex justify-center">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        <div
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px]
          -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-cyan-500/10 blur-[120px]"
        />
      </div>

      {/* CONTENT */}
      <div
        ref={sectionRef}
        className="relative max-w-3xl text-center opacity-0"
      >
        <p
          className="text-2xl md:text-3xl lg:text-4xl
          font-medium tracking-tight leading-relaxed text-slate-200"
        >
          Progress is built by showing up{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
            consistently
          </span>
          , even when motivation fades.
        </p>
      </div>
    </section>
  );
}
