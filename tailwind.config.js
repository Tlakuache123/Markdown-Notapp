/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        gruvbox: {
          css: {
            "--tw-prose-body": "#ebdbb2",
            "--tw-prose-headings": "#ebdbb2",
            "--tw-prose-bold": "#ebdbb2",
            "--tw-prose-links": "#a89984",
            "--tw-prose-code": "#fbf1c7",
            "--tw-prose-blockcode": "#ebdbb2",
            "--tw-prose-pre-code": "#ebdbb2",
            "--tw-prose-pre-bg": "#3c3836",
            "--tw-prose-quotes": "#a899984",
            "--tw-prose-quote-borders": "#a89984",
            "--tw-prose-counters": "#a89984",
            "--tw-prose-bullets": "#a89984",
            "--tw-prose-th-borders": "#a89984",
            "--tw-prose-td-borders": "#a89984",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
