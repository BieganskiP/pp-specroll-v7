import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#12294d",
        secondary: "#76b5ff",
        additional: "#bddafd",
        contrast: "#ffc531",
        neutral: "#080e24",
        white: "#ffffff",
        transparentWhite: "#ffffff33",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
  },
  extend: {
    spacing: {
      "128": "32rem",
      "144": "36rem",
    },
    borderRadius: {
      "4xl": "2rem",
    },
  },
  plugins: [],
};
export default config;
