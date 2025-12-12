import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx,mdx}", "./data/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./ui/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#05070C",
        surface: "#0F141E",
        accent: {
          ai: "#2CD4FF",
          infra: "#F7B733",
          lab: "#FF72D2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        mono: ["var(--font-ibm)", ...fontFamily.mono],
      },
      boxShadow: {
        card: "0 20px 35px rgba(5, 7, 12, 0.5)",
      },
      backgroundImage: {
        grid: "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 0), linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
