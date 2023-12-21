import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    fontFamily: {
      jetBrains: ["var(--font-jetBrains)"],
      poppins: ["var(--font-poppins)"],
    },
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
      borderWidth: {
        "6": "6px",
      },
      colors: {
        main: {
          DEFAULT: "hsl(var(--main))",
          FOREGROUND: "hsl(var(--main-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent-color))",
        },

        common: {
          HOVER: "hsl(var(--common-hover))",
        },

        titlebar: {
          DEFAULT: "hsl(var(--titlebar))",
        },

        actionbar: {
          DEFAULT: "hsl(var(--actionbar))",
        },

        explorer: {
          DEFAULT: "hsl(var(--explorer))",
        },

        tab: {
          DEFAULT: "hsl(var(--tab))",
        },

        statusbar: {
          DEFAULT: "hsl(var(--statusbar))",
          REMOTE: "hsl(var(--statusbar-dev-remote-window))",
        },

        aboutme: {
          CLASS: "var(--aboutme-css-class)",
          PROPERTY: "var(--aboutme-css-property)",
          VALUE: "var(--aboutme-css-value)",
        },

        contactme: {
          CLASS: "var(--contactme-css-class)",
          PROPERTY: "var(--contactme-css-property)",
          VALUE: "var(--contactme-css-value)",
          "ALT-VALUE": "var(--contactme-css-alt-value)",
        },

        terminal: {
          DEFAULT: "hsl(var(--terminal))",
        },

        code: {
          CLASS: "var(--code-class)",
          PROPERTY: "var(--code-property)",
          VALUE: "var(--code-value)",
          BRACKET: "var(--code-bracket)",
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
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "custom-ping": "custom-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        blink: "blink 1s step-start 0s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
