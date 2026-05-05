import { personal } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-5xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-accent text-sm">04.</span>
        <h2 className="font-display font-bold text-3xl text-text">About</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        {/* Text */}
        <div className="md:col-span-3">
          <p className="font-body text-text-dim text-base leading-8">
            {personal.about}
          </p>
        </div>

        {/* Quick facts */}
        <div className="md:col-span-2 bg-surface border border-border rounded-xl p-6 space-y-5">
          {[
            { label: "Focus", value: "AI Systems & Applications" },
            { label: "Currently", value: "Actively seeking internships" },
            { label: "Interests", value: "AI, ML, Optimization, Scalable Systems" },
            { label: "Location", value: "India 🇮🇳" },
          ].map((fact) => (
            <div key={fact.label} className="flex justify-between items-center border-b border-border pb-4 last:border-0 last:pb-0">
              <span className="font-mono text-xs text-muted">{fact.label}</span>
              <span className="font-body text-sm text-text">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
