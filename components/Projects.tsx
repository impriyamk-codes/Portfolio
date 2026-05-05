import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-5xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-accent text-sm">02.</span>
        <h2 className="font-display font-bold text-3xl text-text">
          Featured Projects
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
