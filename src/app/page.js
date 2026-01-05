import Image from "next/image";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { projectData } from "@/data/data";
import { StaggerContainer, StaggerItem } from "@/components/Stagger";
import TechStack from "@/components/TechStack";
import ContactCTA from "@/components/ContactCTA";
export default function Home() {
  return (
    <>
      <Hero />
      <StaggerContainer>
        <div className="flex flex-col gap-4">
          <StaggerItem>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-6 px-6 text-center">
              Featured Projects
            </h2>
          </StaggerItem>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
            {projectData.map((project) => (
              <StaggerItem>
                <Projects
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tech={project.tech}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              </StaggerItem>
            ))}
          </section>
        </div>
      </StaggerContainer>

      <TechStack />

      <ContactCTA />
    </>
  );
}
