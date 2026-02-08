import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        primary: "#1DBCE7",
        "primary-light": "#A1EBFF",
        gray: {
          400: "#676767",
          800: "#343434",
        },
      },
      maxWidth: {
        "1440": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
