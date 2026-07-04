import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        base: "#0a0a0a",
        surface: {
          DEFAULT: "#111111",
          raised: "#1a1a1a",
          card: "#1e1e1e",
          hover: "#242424",
        },
        // Text
        ink: {
          DEFAULT: "#ffffff",
          muted: "#a0a0a0",
          soft: "#e5e5e5",
          faint: "#6b6b6b",
        },
        // Single accent — electric cyan, used sparingly
        accent: {
          DEFAULT: "#22d3ee",
          dim: "#0e7490",
        },
        line: "#2a2a2a",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontWeight: {
        // Body intentionally restricted to ExtraLight / Light
        extralight: "200",
        light: "300",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
