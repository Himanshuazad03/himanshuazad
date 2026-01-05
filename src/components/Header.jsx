"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "./Stagger";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 z-50 w-full border-b backdrop-blur
        border-slate-200 bg-white/80
        dark:border-slate-800/60 dark:bg-[#020617]/80
      "
    >
      <div className="mx-auto h-16 max-w-7xl px-6 flex items-center">
        <StaggerContainer
          animateOnView={false}
          className="flex w-full justify-between items-center"
        >
          {/* MOBILE */}
          <StaggerItem>
            <div className="flex items-center gap-2 md:hidden">
              <MobileNav />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Menu
              </span>
            </div>
          </StaggerItem>

          <div className="flex w-full items-center justify-between">
            {/* LOGO */}
            <StaggerItem>
              <Link href="/" className="hidden md:flex items-center gap-2">
                <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                  Himanshu
                </span>
                <span
                  className="
                    rounded-md px-2 py-0.5 text-xs
                    bg-cyan-400/10 text-cyan-700
                    dark:bg-cyan-400/10 dark:text-cyan-300
                  "
                >
                  Portfolio
                </span>
              </Link>
            </StaggerItem>

            {/* NAV */}
            <StaggerItem>
              <nav className="hidden md:flex items-center gap-8 text-sm">
                <Link
                  href="/"
                  className="text-slate-600 hover:text-slate-900
                  dark:text-slate-400 dark:hover:text-slate-200 transition"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-slate-600 hover:text-slate-900
                  dark:text-slate-400 dark:hover:text-slate-200 transition"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="text-slate-600 hover:text-slate-900
                  dark:text-slate-400 dark:hover:text-slate-200 transition"
                >
                  About me
                </Link>
                <Link
                  href="/contact"
                  className="text-slate-600 hover:text-slate-900
                  dark:text-slate-400 dark:hover:text-slate-200 transition"
                >
                  Contact
                </Link>

                {/* THEME TOGGLE */}
                <ThemeToggle />
              </nav>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </header>
  );
}
