import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#222222",
      white: "#fff",
      grey: "#f0f0f0",
      blue: "#314AFF",
      sky: "#0095FF",
      greytxt: "#7A7A7A",
      green: "#5CCB5F"
    },
  },
  plugins: [],
} satisfies Config;
