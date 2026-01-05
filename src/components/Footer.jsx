"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./Stagger";

export default function Footer() {
  return (
    <footer
      className="
        border-t backdrop-blur
        border-slate-200 bg-white/80
        dark:border-slate-800 dark:bg-[#020617]/80
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-14">
        <StaggerContainer className="grid gap-10 md:grid-cols-3">
          {/* BRAND */}
          <StaggerItem>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Himanshu
              </h3>
              <p className="mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-400">
                Building modern, scalable web applications with a focus on clean
                architecture and thoughtful user experiences.
              </p>
            </div>
          </StaggerItem>

          {/* NAVIGATION */}
          <StaggerItem>
            <div className="md:justify-self-center">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Navigation
              </h4>
              <ul className="mt-3 space-y-2 text-sm">

                <li>
                  <Link
                    href="/"
                    className="
                      text-slate-600 hover:text-slate-900
                      dark:text-slate-400 dark:hover:text-slate-200
                      transition
                    "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="
                      text-slate-600 hover:text-slate-900
                      dark:text-slate-400 dark:hover:text-slate-200
                      transition
                    "
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="
                      text-slate-600 hover:text-slate-900
                      dark:text-slate-400 dark:hover:text-slate-200
                      transition
                    "
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="
                      text-slate-600 hover:text-slate-900
                      dark:text-slate-400 dark:hover:text-slate-200
                      transition
                    "
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* SOCIAL */}
          <StaggerItem>
            <div className="md:justify-self-end">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Get in touch
              </h4>
              <div className="mt-4 flex items-center gap-4">
                <Link
                  href="https://github.com/Himanshuazad03"
                  target="_blank"
                  className="
                    text-slate-500 hover:text-slate-900
                    dark:text-slate-400 dark:hover:text-slate-200
                    transition
                  "
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/himanshu-azad-5a97a3310/"
                  target="_blank"
                  className="
                    text-slate-500 hover:text-slate-900
                    dark:text-slate-400 dark:hover:text-slate-200
                    transition
                  "
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:himanshuazad05@gmail.com"
                  className="
                    text-slate-500 hover:text-slate-900
                    dark:text-slate-400 dark:hover:text-slate-200
                    transition
                  "
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* BOTTOM BAR */}
        <div
          className="
            mt-12 flex flex-col items-center justify-between gap-4
            border-t border-slate-200 pt-6
            dark:border-slate-800
            sm:flex-row
          "
        >
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Himanshu Azad. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
