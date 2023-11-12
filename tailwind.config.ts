import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      ms: "0.9rem",
      md: "1rem",
      lg: "1.15rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      spacing: {
        "0.5px": "2px",
        "1.5px": "6px",
      },
      colors: {
        main: {
          DEFAULT: "var(--main)",
          FOREGROUND: "hsl(var(--main-foreground))",
        },

        accent: "var(--accent-color)",
        faded: "var(--faded-color)",

        titlebar: {
          DEFAULT: "var(--titlebar)",
          HOVER: "var(--titlebar-hover)",
        },

        aboutme: {
          CLASS: "var(--aboutme-css-class)",
          PROPERTY: "var(--aboutme-css-property)",
          VALUE: "var(--aboutme-css-value)",
        },

        actionbar: {
          DEFAULT: "var(--actionbar)",
          HOVER: "var(--actionbar-hover)",
        },

        explorer: {
          DEFAULT: "var(--explorer)",
          HOVER: "var(--explorer-hover)",
          BORDER: "var(--explorer-border)",
        },
        tab: {
          DEFAULT: "var(--tab)",
          ACTIVE: "var(--tab-active)",
          BORDER: "var(--tab-border)",
          BACKGROUND: "var(--tab-background)",
        },
        statusbar: {
          DEFAULT: "var(--statusbar)",
          HOVER: "hsl(var(--statusbar-hover))",
          BORDER: "var(--statusbar-border)",
          REMOTE: "var(--statusbar-dev-remote-window)",
        },

        terminal: "var(--terminal)",

        // terminal: {
        //   DEFAULT: "var(--terminal)",
        // },

        button: {
          DEFAULT: "var(--button-bg)",
          FOREGROUND: "var(--button-foreground)",
        },
        scrollbar: {
          TRACK: "var(--scrollbar-track)",
          THUMB: "var(--scrollbar-thumb)",
        },
      },
      keyframes: {
        "custom-ping": {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        "custom-ping": "custom-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
