import { skills } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  "ML / AI": "◈",
  "Web Development": "◇",
  "Core CS": "○",
  "Design": "◆",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-5xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-accent text-sm">03.</span>
        <h2 className="font-display font-bold text-3xl text-text">Skills</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
          >
            {/* Category header */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-accent text-lg">{categoryIcons[category]}</span>
              <h3 className="font-display font-semibold text-text text-sm tracking-wide uppercase">
                {category}
              </h3>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-3 py-1.5 bg-bg border border-border text-text-dim rounded hover:border-accent/50 hover:text-accent transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
