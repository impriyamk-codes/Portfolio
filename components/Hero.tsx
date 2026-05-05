import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      {/* Background grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,36,51,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(28,36,51,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(79,255,176,0.06) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10">
        {/* Eyebrow */}
        <p
          className="font-mono text-accent text-sm mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          Hi, I'm
        </p>

        {/* Name */}
        <h1
          className="font-display font-extrabold text-6xl sm:text-8xl text-text leading-none tracking-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          {personal.name}
          <span className="text-accent">.</span>
        </h1>

        {/* Tagline */}
        <p
          className="font-body text-text-dim text-lg sm:text-xl max-w-xl leading-relaxed mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          {personal.tagline}
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-bg font-display font-semibold text-sm rounded hover:bg-accent/90 transition-all"
          >
            View Projects
          </a>
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-border text-text font-display font-semibold text-sm rounded hover:border-accent hover:text-accent transition-all"
          >
            Download Resume ↓
          </a>
        </div>

        
      </div>
    </section>
  );
}
