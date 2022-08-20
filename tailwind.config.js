/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#292524",
          "secondary": "#DC8665",
          "accent": "#fcccae",
          "neutral": "#a8a29e",
          "base-100": "#E8E5EB",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}