"use client";
import { useState, useEffect } from "react";
import { personal } from "@/lib/data";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-lg text-text tracking-tight hover:text-accent transition-colors"
        >
          {personal.name}
          <span className="text-accent">.</span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body text-text-dim hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personal.resume}
            className="text-sm font-mono px-4 py-1.5 border border-accent text-accent rounded hover:bg-accent hover:text-bg transition-all"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
