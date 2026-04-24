import type { Config } from "tailwindcss";

// Configuración de Tailwind CSS para el portfolio
const configuracion: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados del portfolio
        fondo: "#0a0a0a",
        "fondo-secundario": "#0f0f0f",
        acento: "#2dd4bf",
        borde: "#1a1a1a",
      },
      fontFamily: {
        principal: ["var(--fuente-principal)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default configuracion;
