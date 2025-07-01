import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.5, 
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "1rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem",
          small: "1.25rem",
          medium: "1.5rem",
          large: "1.75rem",
        },
        radius: {
          small: "0.375rem",
          medium: "0.5rem",
          large: "0.75rem",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "3px",
        },
      },
      themes: {
        dark: {
          colors: {
            background: "#000000",
            foreground: "#FFFFFF",
            primary: {
              50: "#E6F1FE",
              100: "#CCE3FD",
              200: "#99C7FB",
              300: "#66AAF9",
              400: "#338EF7",
              500: "#006FEE",
              600: "#005BC4",
              700: "#004493",
              800: "#002E62",
              900: "#001731",
              DEFAULT: "#006FEE",
              foreground: "#FFFFFF"
            },
            focus: "#006FEE",
            content1: {
              DEFAULT: "#18181B",
              foreground: "#FFFFFF"
            },
            content2: {
              DEFAULT: "#27272A",
              foreground: "#FFFFFF"
            },
            content3: {
              DEFAULT: "#3F3F46",
              foreground: "#FFFFFF"
            },
            content4: {
              DEFAULT: "#52525B",
              foreground: "#FFFFFF"
            },
          }
        }
      }
    })
  ]
}
