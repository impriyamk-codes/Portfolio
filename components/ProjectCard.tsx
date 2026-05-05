type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div
      className="group relative bg-surface border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
        <div className="flex gap-3">
          
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Live demo"
          >
            {/* External link icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl text-text group-hover:text-accent transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-text-dim text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-2.5 py-1 bg-accent-dim text-accent rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
