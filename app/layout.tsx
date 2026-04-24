import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// Fuente principal del portfolio
const fuentePrincipal = DM_Sans({
  subsets: ["latin"],
  variable: "--fuente-principal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luciano Baltazar Celes — Fullstack Developer",
  description:
    "Portfolio de Luciano Baltazar Celes, Analista de Sistemas y Desarrollador Fullstack especializado en Next.js, Node.js y soluciones SaaS.",
  keywords: ["fullstack developer", "next.js", "portfolio", "desarrollo web", "argentina"],
  authors: [{ name: "Luciano Baltazar Celes" }],
  openGraph: {
    title: "Luciano Baltazar Celes — Fullstack Developer",
    description: "Analista de Sistemas con experiencia en desarrollo fullstack.",
    type: "website",
  },
};

export default function LayoutRaiz({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={fuentePrincipal.variable}>
      <body className={`${fuentePrincipal.className} antialiased`}>{children}</body>
    </html>
  );
}
