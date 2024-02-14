import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        colorPrimary: "rgba(0, 163, 255, 1)",
        colorText: "rgba(23, 23, 23, 1)",
        colorLink: "rgba(38, 38, 38, 1)",
        colorTitle: "rgba(23, 23, 23, 1)",
      },
    },
    container: {
      // or have default horizontal padding
      padding: '42px',

      // default breakpoints but with 40px removed
      screens: {
        xl: '100%',
        '2xl': '100%',
      },
    },
  },
  plugins: [],
};
export default config;
