/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ef34c7",

          secondary: "#e07b8c",

          accent: "#9bc637",

          neutral: "#1d1424",

          "base-100": "#f9f5fa",

          info: "#5488e8",

          success: "#1bb692",

          warning: "#bc720b",

          error: "#e02427",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
