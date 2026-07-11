/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f5ef",
          100: "#efece3",
          200: "#d9d5c6",
          800: "#1a1a22",
          900: "#0f0f16",
          950: "#0a0a0f",
        },
        accent: {
          DEFAULT: "#5eead4",
          soft: "#a7f3d0",
          deep: "#0d9488",
        },
        magenta: "#f472b6",
        amber: "#fbbf24",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      backgroundImage: {
        aurora:
          "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(94,234,212,0.28), transparent 60%), radial-gradient(ellipse 70% 55% at 80% 70%, rgba(244,114,182,0.22), transparent 60%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(251,191,36,0.16), transparent 60%)",
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blink: {
          "0%, 50%": { opacity: 1 },
          "51%, 100%": { opacity: 0 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
