import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: "#EDEEF0", // Cinza Névoa – background base
        clinical: "#FFFFFF", // Branco Clínico
        nutrigen: "#087BB8", // Azul NutriGen – títulos principais
        dna: "#043780", // Azul Profundo DNA – subtítulos, hover
        cyan: "#009CD9", // Ciano de Destaque – CTAs
        sky: "#66AACD", // Azul Claro Clínico – cards secundários
        softgray: "#DADADA", // Cinza Suave – divisórias e sombras
      },
      fontFamily: {
        serif: ["var(--font-quicksand)", "Quicksand", "sans-serif"],
        sans: ["var(--font-quicksand)", "Quicksand", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.04em",
      },
      boxShadow: {
        float: "0 12px 40px -12px rgba(8, 123, 184, 0.18)",
        card: "0 8px 30px -10px rgba(4, 55, 128, 0.12)",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0, 156, 217, 0.45)" },
          "50%": { boxShadow: "0 0 0 16px rgba(0, 156, 217, 0)" },
        },
      },
      animation: {
        pulseSoft: "pulseSoft 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
