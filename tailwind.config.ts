import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner-radial":
          "radial-gradient(59.82% 121.73% at -9.66% 130.31%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
      },
      screens: {
        xs: { min: "576px", max: "639px" },
        xxs: { min: "350px", max: "575px" },
      },
      fontSize: {
        xxs: ["10px", "14px"],
      },

      container: {
        padding: {
          DEFAULT: "0.5rem",
          xs: "0.3rem",
          xxs: "0.2rem",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
