"use client";

import Link from "next/link";
import { ExternalLink, Check } from "lucide-react";
import { Proyecto } from "@/data/proyectos";

interface PropsTarjetaProyecto {
  proyecto: Proyecto;
  indice: number;
}

export default function TarjetaProyecto({ proyecto, indice }: PropsTarjetaProyecto) {
  return (
    <article
      className="group relative rounded-2xl overflow-hidden transition-all duration-500 ease-out"
      style={{
        backgroundColor: "var(--color-fondo-tarjeta)",
        border: "1px solid var(--color-borde)",
        animationDelay: `${indice * 100}ms`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--color-acento-borde-hover)";
        el.style.boxShadow = `0 0 30px var(--color-acento-fondo)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--color-borde)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Barra de acento superior con gradiente */}
      <div
        className="h-px transition-all duration-500"
        style={{
          background: `linear-gradient(to right, transparent, var(--color-acento-borde), transparent)`,
        }}
      />

      <div className="p-7">
        {/* Encabezado de la tarjeta */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3
            className="font-semibold text-xl leading-tight transition-colors duration-300
              group-hover:opacity-80"
            style={{ color: "var(--color-texto-blanco)" }}
          >
            {proyecto.titulo}
          </h3>
          <Link
            href={proyecto.enlace}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver proyecto ${proyecto.titulo}`}
            className="shrink-0 mt-1 transition-all duration-200"
            style={{ color: "var(--color-texto)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--color-acento)";
              (e.currentTarget as HTMLElement).style.filter = `drop-shadow(0 0 8px var(--color-acento))`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--color-texto)";
              (e.currentTarget as HTMLElement).style.filter = "none";
            }}
          >
            <ExternalLink size={18} />
          </Link>
        </div>

        {/* Descripción del proyecto */}
        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "var(--color-texto)" }}
        >
          {proyecto.descripcion}
        </p>

        {/* Lista de características */}
        <ul className="flex flex-col gap-2 mb-6">
          {proyecto.caracteristicas.map((caracteristica) => (
            <li
              key={caracteristica}
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--color-texto-tenue)" }}
            >
              <Check
                size={13}
                className="shrink-0"
                style={{ color: "var(--color-acento)" }}
              />
              {caracteristica}
            </li>
          ))}
        </ul>

        {/* Badges de tecnologías */}
        <div className="flex flex-wrap gap-2">
          {proyecto.tecnologias.map((tecnologia) => (
            <span
              key={tecnologia}
              className="px-2.5 py-1 rounded-md text-xs font-medium"
              style={{
                backgroundColor: "var(--color-acento-fondo)",
                border: "1px solid var(--color-acento-borde)",
                color: "var(--color-acento)",
              }}
            >
              {tecnologia}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}