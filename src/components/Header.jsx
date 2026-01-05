"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "./Stagger";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/60 bg-[#020617]/80 backdrop-blur">
      <div className="mx-auto h-16 max-w-7xl px-6 flex items-center">
        <StaggerContainer animateOnView={false} className="flex w-full justify-between items-center">
          <StaggerItem>
            <div className="flex justify-between items-center">
              <MobileNav />
              <span className="md:hidden">Menu</span>
            </div>
          </StaggerItem>
          <div className="flex w-full items-center justify-between">
            {/* Logo */}
            <StaggerItem>
              <Link href="/" className="hidden md:flex items-center gap-2">
                <span className="text-lg font-semibold tracking-tight text-slate-100">
                  Himanshu
                </span>
                <span className="rounded-md bg-cyan-400/10 px-2 py-0.5 text-xs text-cyan-300">
                  Portfolio
                </span>
              </Link>
            </StaggerItem>

            {/* Nav */}
            <StaggerItem>
              <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
                <Link
                  href="/"
                  className="hover:text-slate-200 transition"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="hover:text-slate-200 transition"
                >
                  Projects
                </Link>
                <Link href="#about" className="hover:text-slate-200 transition">
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-slate-200 transition"
                >
                  Contact
                </Link>
              </nav>
            </StaggerItem>

            {/* CTA */}
          </div>
        </StaggerContainer>
      </div>
    </header>
  );
}
