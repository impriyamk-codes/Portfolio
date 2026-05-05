/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#080c10",
        surface: "#0f1419",
        border: "#1c2433",
        accent: "#4fffb0",
        "accent-dim": "#1a3d2e",
        muted: "#4a5568",
        text: "#e2e8f0",
        "text-dim": "#718096",
      },
    },
  },
  plugins: [],
};
