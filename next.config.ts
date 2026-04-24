import type { NextConfig } from "next";

// Configuración de Next.js optimizada para Vercel
const configuracionNext: NextConfig = {
  images: {
    // Permitir imágenes locales del proyecto
    formats: ["image/avif", "image/webp"],
  },
};

export default configuracionNext;
