import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary-color))",
        secondary: "rgb(var(--secondary-color))",
        background: "rgb(var(--background-color))",
        foreground: "rgb(var(--foreground-color))",
        accent: "rgb(var(--accent-color))",
      },
    },
  },
  plugins: [],
} satisfies Config;
