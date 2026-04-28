"use client";

import { ArrowRight } from "lucide-react";

// Botón principal del hero con efecto de glow al hacer hover
export default function BotonHero() {
  return (
    <a
      href="#proyectos"
      className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl text-sm
        transition-all duration-300"
      style={{
        backgroundColor: "var(--color-acento)",
        color: "var(--color-fondo)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 0 25px var(--color-acento-sombra)";
        el.style.backgroundColor = "var(--color-acento-hover)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.backgroundColor = "var(--color-acento)";
      }}
    >
      Ver proyectos
      <ArrowRight size={16} />
    </a>
  );
}