const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled:
      process.env.HUGO_ENVIRONMENT === "production" ||
      process.env.NODE_ENV === "production",
    content: ["./layouts/**/*.html", "./content/**/*.md"],
  },
  darkMode: "media",
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      sans: ["Aileron", "Arial", "sans-serif"],
    },
    extend: {
      backgroundSize: {
        96: "24rem",
      },
      inset: {
        "1/4-screen": "25vh",
        "3/4-screen": "75vh",
      },
      minHeight: {
        "1/4-screen": "25vh",
      },
      colors: {
        route: "var(--route-color)",
        gray: {
          ...colors.trueGray,
          750: "#333",
        },
        blue: {
          50: "hsl(212, 20%, 90%)",
          100: "hsl(212, 10%, 72%)",
          200: "hsl(212, 10%, 64%)",
          300: "hsl(212, 10%, 53%)",
          400: "hsl(212, 10%, 42%)",
          500: "hsl(212, 10%, 32%)",
          600: "hsl(212, 10%, 28%)",
          700: "hsl(212, 10%, 22%)",
          800: "hsl(212, 10%, 18%)",
          900: "hsl(212, 10%, 10%)",
        },
        red: "#c7826b",
        yellow: "#ceb195",
      },
      fill: (theme) => ({
        "blue-500": theme("colors.blue.500"),
        "blue-600": theme("colors.blue.600"),
      }),
      textColor: {
        route: "var(--route-text-color)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
