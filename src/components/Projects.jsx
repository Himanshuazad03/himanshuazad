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
import { ExternalLink } from "lucide-react";

export default function Projects({
  title,
  description,
  image,
  tech = [],
  githubUrl,
}) {
  return (
    <Card
      className="group overflow-hidden border-slate-800 bg-slate-900/60 backdrop-blur transition-shadow hover:shadow-xl transition-all duration-300 ease-out
        hover:shadow-xl hover:scale-[1.02] "
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden border border-slate-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <CardHeader className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
        <p className="text-sm text-slate-400">{description}</p>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Tech Stack */}
        <div className="flex flex-wrap w-full gap-2 max-w-[340px]">
          {tech.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="bg-slate-800 text-slate-300"
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Links */}
      <CardFooter className="flex gap-3">
        {githubUrl && (
          <Button
            size="sm"
            variant="secondary"
            className="bg-cyan-500 text-slate-950 hover:bg-cyan-400"
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
