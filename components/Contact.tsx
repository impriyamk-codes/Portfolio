import { personal } from "@/lib/data";

const contactLinks = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "@impriyamk-codes",
    href: personal.github,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "in/priyam",
    href: personal.linkedin,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 max-w-5xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-accent text-sm">05.</span>
        <h2 className="font-display font-bold text-3xl text-text">Contact</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="max-w-xl">
        <p className="font-body text-text-dim text-base leading-relaxed mb-10">
          I'm currently looking for new opportunities — whether it's an internship, collaboration, or just a good conversation about AI. My inbox is always open.
        </p>

        <div className="space-y-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-accent/40 hover:bg-accent-dim transition-all group"
            >
              <span className="text-muted group-hover:text-accent transition-colors">
                {link.icon}
              </span>
              <div>
                <div className="font-mono text-xs text-muted mb-0.5">{link.label}</div>
                <div className="font-body text-sm text-text group-hover:text-accent transition-colors">
                  {link.value}
                </div>
              </div>
              <span className="ml-auto text-muted group-hover:text-accent transition-colors text-sm">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border flex items-center justify-between">
        <span className="font-mono text-xs text-muted">
          Built with Next.js & Tailwind CSS
        </span>
        <span className="font-mono text-xs text-muted">
          {personal.name} © 2026
        </span>
      </div>
    </section>
  );
}
