/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
              "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
          "max-1080": { max: "1080px" },
          "max-1024": { max: "1024px" },
          "max-980": { max: "980px" },
          "max-840": { max: "840px" },
          "max-768": { max: "768px" },
          "max-720": { max: "720px" },
          "max-640": { max: "640px" },
          "max-599": { max: "599px" }, // for adjusting padding left of main container
          "max-480": { max: "480px" },
          "max-420": { max: "420px" },
          "max-360": { max: "360px" },
          "max-320": { max: "320px" },
      },
  },
  },
  plugins: [],
}