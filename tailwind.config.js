/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "gvb-black": "#282828",
      "gvb-white": "#fbf1c7",
      "gvb-fg": {
        50: "#fbf1c7",
        100: "#ebdbb2",
        200: "#d5c4a1",
        300: "#bdae93",
        400: "#a89984",
      },
      "gvb-gray": {
        50: "#928374",
        100: "#7c6f64",
        200: "#665c54",
        300: "#504945",
        400: "#3c3836",
      },
    },
    extend: {
      typography: ({ theme }) => ({
        gruvbox: {
          css: {
            "--tw-prose-body": theme("colors.gvb-black"),
            "--tw-prose-headings": theme("colors.gvb-black"),
            "--tw-prose-bold": theme("colors.gvb-black"),
            "--tw-prose-links": theme("colors.gvb-gray[400]"),
            "--tw-prose-code": theme("colors.gvb-gray[50]"),
            "--tw-prose-blockcode": theme("colors.gvb-black"),
            "--tw-prose-pre-code": theme("colors.gvb-black"),
            "--tw-prose-pre-bg": theme("colors.gvb-fg[200]"),
            "--tw-prose-quotes": theme("colors.gvb-gray[300]"),
            "--tw-prose-quote-borders": theme("colors.gvb-gray[400]"),
            "--tw-prose-counters": theme("colors.gvb-gray[400]"),
            "--tw-prose-bullets": theme("colors.gvb-gray[400]"),
            "--tw-prose-th-borders": theme("colors.gvb-gray[400]"),
            "--tw-prose-td-borders": theme("colors.gvb-gray[400]"),
            // Darkmode
            "--tw-prose-invert-body": theme("colors.gvb-white"),
            "--tw-prose-invert-headings": theme("colors.gvb-white"),
            "--tw-prose-invert-bold": theme("colors.gvb-white"),
            "--tw-prose-invert-links": theme("colors.gvb-fg[400]"),
            "--tw-prose-invert-code": theme("colors.gvb-fg[300]"),
            "--tw-prose-invert-blockcode": theme("colors.gvb-white"),
            "--tw-prose-invert-pre-code": theme("colors.gvb-white"),
            "--tw-prose-invert-pre-bg": theme("colors.gvb-gray[300]"),
            "--tw-prose-invert-quotes": theme("colors.gvb-fg[300]"),
            "--tw-prose-invert-quote-borders": theme("colors.gvb-fg[400]"),
            "--tw-prose-invert-counters": theme("colors.gvb-fg[400]"),
            "--tw-prose-invert-bullets": theme("colors.gvb-fg[400]"),
            "--tw-prose-invert-th-borders": theme("colors.gvb-fg[400]"),
            "--tw-prose-invert-td-borders": theme("colors.gvb-fg[400]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
