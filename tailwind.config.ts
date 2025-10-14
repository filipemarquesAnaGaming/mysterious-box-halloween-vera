import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(255, 255, 255, 1)",
            filter: "brightness(1.5)",
          },
          "50%": {
            boxShadow: "0 0 15px rgba(0, 72, 255, 1)",
            filter: "brightness(1)",
          },
        },
      },
      animation: {
        shine: "shine 2s infinite ease-in-out",
      },
      textShadow: {
        custom:
          "-1px -1px 0 #01031a, 1px -1px 0 #01031a, -1px 2px 0 #01031a, 1px 2.5px 0 #01031a",
      },
    },
    screens: {
      mobile: "768px",
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        ".text-shadow-custom": {
          textShadow: "0px 2px 0px rgba(0, 0, 0, 0.25)",
        },
      });
    },
  ],
};
export default config;
