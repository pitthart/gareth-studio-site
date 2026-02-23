import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class", '[data-theme="midnight"]'], // supports both dark mode and our custom themes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        primary: "var(--primary)",
        "primary-fg": "var(--primary-fg)",
        muted: "var(--muted)",
        card: "var(--card)",
        "border-card": "var(--border-card)",
        surface: "var(--surface)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
}

export default config
