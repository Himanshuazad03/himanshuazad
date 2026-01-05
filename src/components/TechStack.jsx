"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StaggerItem, StaggerContainer } from "./Stagger";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const techStack = [
  {
    category: "Programming Languages",
    items: [
      { name: "C++", icon: "/tech/cpp.png" },
      { name: "C", icon: "/tech/c.png" },
      { name: "Python", icon: "/tech/python.svg" },
      { name: "JavaScript", icon: "/tech/javascript.svg" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "/tech/react.svg" },
      { name: "Next.js", icon: "/tech/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/tech/tailwind.svg" },
      { name: "Material UI", icon: "/tech/mui.svg" },
      { name: "shadcn/ui", icon: "/tech/shadcn.png" },
      { name: "Framer Motion", icon: "/tech/framer.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "/tech/nodejs.svg" },
      { name: "Express.js", icon: "/tech/expressjs.svg" },
      { name: "Socket.IO", icon: "/tech/socket.png" },
    ],
  },
  {
    category: "Database",
    items: [{ name: "MongoDB", icon: "/tech/mongodb.svg" }],
  },
  {
    category: "Tools & Version Control",
    items: [
      { name: "Git", icon: "/tech/git.svg" },
      { name: "GitHub", icon: "/tech/github.svg" },
      { name: "Vercel", icon: "/tech/vercel.svg" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-20">
      <StaggerContainer className="mx-auto max-w-6xl px-6 space-y-14">
        <StaggerItem>
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-slate-100">
              Tech Stack
            </h2>
            <p className="mt-2 text-slate-400">
              Technologies I use to build scalable and maintainable products
            </p>
          </div>
        </StaggerItem>

        {techStack.map((group) => (
          <div key={group.category} className="space-y-8">
            {/* Category title (no stagger needed) */}
            <h3 className="text-lg font-medium text-slate-300">
              {group.category}
            </h3>

            {/* NEW stagger container PER GRID */}
            <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {group.items.map((tech) => (
                <StaggerItem key={tech.name}>
                  <div
                    className="
                  flex flex-col gap-1 h-22 w-22 items-center justify-center px-4
                  rounded-2xl border border-slate-700
                  bg-slate-600/80
                  transition-transform duration-300
                  md:hover:scale-110
                "
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={45}
                      height={45}
                    />
                    <span className="text-xs text-slate-100 font-medium text-center">
                      {tech.name}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        ))}
      </StaggerContainer>
    </section>
  );
}
