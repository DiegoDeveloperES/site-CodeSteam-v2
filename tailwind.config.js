// Paleta e fontes herdadas do sistema visual do CUBYX (WEBSITE/css/cubyx-theme.css).
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1F2A44",
        muted: "#4A5878",
        page: "#F4F8FC",
        line: { DEFAULT: "#E1E8F0", strong: "#D5DEE9" },
        cyan: {
          DEFAULT: "#29B6E8",
          fill: "#0A8FC7",
          shadow: "#076A94",
          text: "#08729F",
          tint: "#E1F4FC",
        },
        green: {
          DEFAULT: "#34A300",
          shadow: "#257500",
          text: "#257500",
          tint: "#E4F8D9",
        },
        yellow: {
          DEFAULT: "#FFC800",
          shadow: "#D9A400",
          text: "#8A5A00",
          tint: "#FFF4CC",
        },
        purple: {
          DEFAULT: "#8E47D9",
          shadow: "#6A2FB0",
          tint: "#F1E6FD",
        },
        orange: { DEFAULT: "#FF8A1F", shadow: "#C25E00", tint: "#FFEBD9" },
        red: { DEFAULT: "#E53935", tint: "#FFE3E3" },
      },
      fontFamily: {
        sans: ["Nunito", "Segoe UI", "system-ui", "sans-serif"],
        display: ["Fredoka", "Nunito", "Segoe UI", "system-ui", "sans-serif"],
      },
      borderRadius: {
        cx: "18px",
        "cx-lg": "28px",
      },
    },
  },
  plugins: [],
};
