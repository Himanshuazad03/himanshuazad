"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  console.log(resolvedTheme)

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-md
      border bg-slate-50 cursor-pointer hover:border-slate-400 border-slate-200 dark:border-slate-800/60 
      dark:bg-slate-900/60 dark:backdrop-blur
      dark:text-slate-300 dark:hover:text-slate-100
      dark:hover:border-slate-700 transition"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4 text-black" />
      )}
    </button>
  );
}
