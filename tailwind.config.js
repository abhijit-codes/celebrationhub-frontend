/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {

      backgroundImage: {
        "celebration-gradient":
          "linear-gradient(135deg,#0f172a,#312e81,#7e22ce,#db2777,#f97316)",
      },

      animation: {
        logoPop: "logoPop 2s ease-in-out infinite",
      },

      keyframes: {
        logoPop: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
      },

    },
  },

  plugins: [],
};