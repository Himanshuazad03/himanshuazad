"use client";

import Image from "next/image";
import { StaggerItem, StaggerContainer } from "./Stagger";

const techStack = [
  {
    id: 1,
    category: "Programming Languages",
    items: [
      { id: 1, name: "C++", icon: "/tech/cpp.png" },
      { id: 2, name: "C", icon: "/tech/c.png" },
      { id: 3, name: "Python", icon: "/tech/python.svg" },
      { id: 4, name: "JavaScript", icon: "/tech/javascript.svg" },
    ],
  },
  {
    id: 2,
    category: "Frontend",
    items: [
      { id: 1, name: "React", icon: "/tech/react.svg" },
      { id: 2, name: "Next.js", icon: "/tech/nextjs.svg" },
      { id: 3, name: "Tailwind CSS", icon: "/tech/tailwind.svg" },
      { id: 4, name: "TypeScript", icon: "/tech/typescript.svg" },
      { id: 5, name: "Material UI", icon: "/tech/mui.svg" },
      { id: 6, name: "shadcn/ui", icon: "/tech/shadcn.png" },
      { id: 7, name: "Framer Motion", icon: "/tech/framer.svg" },
    ],
  },
  {
    id: 3,
    category: "Backend",
    items: [
      { id: 1, name: "Node.js", icon: "/tech/nodejs.svg" },
      { id: 2, name: "Express.js", icon: "/tech/expressjs.svg" },
      { id: 3, name: "Socket.IO", icon: "/tech/socket.png" },
    ],
  },
  {
    id: 4,
    category: "Database",
    items: [
      { id: 1, name: "MongoDB", icon: "/tech/mongodb.svg" },
      { id: 2, name: "MySQL", icon: "/tech/mysql.svg" },
      { id: 3, name: "PostgreSQL", icon: "/tech/postgresql.svg" },
    ],
  },
  {
    id: 5,
    category: "Tools & Version Control",
    items: [
      { id: 1, name: "Git", icon: "/tech/git.svg" },
      { id: 2, name: "GitHub", icon: "/tech/github.svg" },
      { id: 3, name: "Vercel", icon: "/tech/vercel.svg" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-20">
      <StaggerContainer className="mx-auto max-w-6xl px-6 space-y-14">
        {/* HEADER */}
        <StaggerItem>
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-slate-900 dark:text-slate-100">
              Tech Stack
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Technologies I use to build scalable and maintainable products
            </p>
          </div>
        </StaggerItem>

        {techStack.map((group) => (
          <div key={group.id} className="space-y-8">
            {/* CATEGORY TITLE */}
            <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">
              {group.category}
            </h3>

            {/* GRID */}
            <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
              {group.items.map((tech) => (
                <StaggerItem key={tech.id}>
                  <div
                    className="
                     flex flex-col gap-1 h-22 w-22 items-center justify-center px-4 border-slate-200 bg-slate-50
                      rounded-2xl border dark:border-slate-700 dark:bg-slate-800/80
                      transition-all duration-300
                      hover:shadow-md dark:hover:shadow-lg
                      md:hover:scale-105
                    "
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={44}
                      height={44}
                    />
                    <span className="text-xs font-medium text-center text-slate-700 dark:text-slate-100">
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
