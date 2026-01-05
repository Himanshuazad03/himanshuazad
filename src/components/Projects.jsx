"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

export default function Projects({
  title,
  description,
  image,
  tech = [],
  githubUrl,
}) {
  return (
    <Card
      className="
        group overflow-hidden backdrop-blur
        border border-slate-200 bg-white
        dark:border-slate-800 dark:bg-slate-900/60
        transition-all duration-300 ease-out
        hover:shadow-lg hover:scale-[1.02]
        dark:hover:shadow-xl
      "
    >
      {/* IMAGE */}
      <div
        className="
          relative h-48 overflow-hidden
          border-b border-slate-200
          dark:border-slate-800
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <CardHeader className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* TECH STACK */}
        <div className="flex flex-wrap w-full gap-2 max-w-[340px]">
          {tech.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="
                bg-slate-100 text-slate-600
                dark:bg-slate-800 dark:text-slate-300
              "
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* LINKS */}
      <CardFooter className="flex gap-3">
        {githubUrl && (
          <Button
            size="sm"
            className="bg-slate-800 text-slate-50 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
            asChild
          >
            <Link
              href={githubUrl}
              target="_blank"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              Source Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
