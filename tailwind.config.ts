import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      colors: {
        rose: {
          50: "#FFF1F6",
          100: "#FFE4EF",
          200: "#FFD0E4",
          300: "#FFB7D4",
          400: "#FF9BC1",
          500: "#F878A9",
        },
        violet: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
