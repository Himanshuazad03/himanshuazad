"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileNav() {
  return (
    <Sheet>
      {/* HAMBURGER */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="
            md:hidden
            text-slate-700 hover:bg-slate-100
            dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white
          "
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      {/* DRAWER */}
      <SheetContent
        side="left"
        className="
          w-[280px] border-r p-0
          bg-white border-slate-200
          dark:bg-[#020617] dark:border-slate-800
        "
      >
        <div className="flex h-full flex-col">
          {/* HEADER */}
          <SheetHeader className="border-b border-slate-200 p-6 dark:border-slate-800">
            <SheetTitle className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Himanshu
              </span>
              <span
                className="
                  rounded-md px-2 py-0.5 text-xs
                  bg-cyan-100 text-cyan-700
                  dark:bg-cyan-400/10 dark:text-cyan-300
                "
              >
                Portfolio
              </span>
            </SheetTitle>
          </SheetHeader>

          {/* NAV */}
          <nav className="flex flex-col px-4 py-6 text-sm">
            {[
              {label: "Home", href: "/"},
              { label: "Projects", href: "/projects" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  rounded-md px-3 py-3
                  text-slate-600 hover:text-slate-900 hover:bg-slate-100
                  dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-900
                  transition
                "
              >
                {item.label}
              </Link>
            ))}

            {/* CTA */}
            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
              <Button
                asChild
                className="
                  w-full
                  bg-slate-800 text-white hover:bg-slate-900
                  dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400
                "
              >
                <Link href="/contact">Hire Me</Link>
              </Button>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
