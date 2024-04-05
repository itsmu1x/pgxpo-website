/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
      extend: {
          colors: {
              darkbody: "#101018",
              lightbody: "#ffffff",
              darkblue: "#1f0757",
              lightblue: "#0d6efd",
              lighterblue: "#0b5ed7",
              lightyellow: "#ffd607",
              darkerblue: "#0C153B",
              lightwhite: "#c2d4f8",
              dashbody: "#dddddd",
          },
          screens: {
              sm: "576px",
              md: "768px",
              lg: "1280px",
              xl: "1444px",
          },
          container: {
              screens: null,
          },
      },
  },
  plugins: [require("tailwindcss-rtl")],
}
