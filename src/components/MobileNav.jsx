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
      {/* Hamburger button */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-slate-200 hover:bg-slate-800 hover:text-white"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      {/* Drawer */}
      <SheetContent
        side="left"
        className="w-[280px] bg-[#020617] border-slate-800"
      >
        <SheetHeader>
          <SheetTitle className="text-slate-100 flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight text-slate-100">
              Himanshu
            </span>
            <span className="rounded-md bg-cyan-400/10 px-2 py-0.5 text-xs text-cyan-300">
              Portfolio
            </span>
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8 flex flex-col text-slate-300 px-2">
          <Link
            href="/projects"
            className="hover:text-slate-100 transition hover:bg-slate-900 px-2 py-3 rounded-sm"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="hover:text-slate-100 transition  hover:bg-slate-900 px-2 py-3 rounded-sm"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="hover:text-slate-100 transition  hover:bg-slate-900 px-2 py-3 rounded-sm"
          >
            Contact
          </Link>

          <div className="mt-6 border-t border-slate-800 pt-6">
            <Button
              asChild
              className="w-full bg-cyan-500 text-slate-950 hover:bg-cyan-400"
            >
              <Link href="/contact">Hire Me</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
