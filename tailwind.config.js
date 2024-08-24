/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#F9153E",
        bg: "#f4f4f4",
        oranger: "#ffaf74",
        xam: "#4d6472",
        itxam: "#7692a9",
        banner: "#f2f2f2",
        text: "#666666",
        blueColor: "#2563eb",
        redColor: "#ef4444",
        yellowColor: "#facc15",
        greenColor: "#22c55e",
        white: "#f9f9f9",
        be: "#fffcf5",
        bgGray: "rgba(50,50,50,0.6)",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554"
        }
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      },
      height: {
        64: "16rem",
        102: "460px",
        full: "100%" // Định nghĩa giá trị 100% cho height
      },
      width: {
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "37.5%",
        "5/8": "62.5%",
        "6/8": "75%",
        "7/8": "87.5%"
      }
    }
  },
  plugins: []
}
