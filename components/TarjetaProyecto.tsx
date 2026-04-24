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
      className="group relative bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl overflow-hidden
        hover:border-[#2dd4bf]/30 transition-all duration-500 ease-out
        hover:shadow-[0_0_30px_rgba(45,212,191,0.07)]"
      style={{ animationDelay: `${indice * 100}ms` }}
    >
      {/* Barra de acento superior */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#2dd4bf]/20 to-transparent
        group-hover:via-[#2dd4bf]/60 transition-all duration-500" />

      <div className="p-7">
        {/* Encabezado de la tarjeta */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-white font-semibold text-xl leading-tight group-hover:text-[#2dd4bf] transition-colors duration-300">
            {proyecto.titulo}
          </h3>
          <Link
            href={proyecto.enlace}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver proyecto ${proyecto.titulo}`}
            className="shrink-0 text-[#a1a1aa] hover:text-[#2dd4bf] transition-all duration-200
              hover:drop-shadow-[0_0_8px_#2dd4bf] mt-1"
          >
            <ExternalLink size={18} />
          </Link>
        </div>

        {/* Descripción */}
        <p className="text-[#a1a1aa] text-sm leading-relaxed mb-5">
          {proyecto.descripcion}
        </p>

        {/* Características */}
        <ul className="flex flex-col gap-2 mb-6">
          {proyecto.caracteristicas.map((caracteristica) => (
            <li key={caracteristica} className="flex items-center gap-2 text-sm text-[#71717a]">
              <Check size={13} className="text-[#2dd4bf] shrink-0" />
              {caracteristica}
            </li>
          ))}
        </ul>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2">
          {proyecto.tecnologias.map((tecnologia) => (
            <span
              key={tecnologia}
              className="px-2.5 py-1 bg-[#2dd4bf]/5 border border-[#2dd4bf]/15 rounded-md
                text-[#2dd4bf] text-xs font-medium"
            >
              {tecnologia}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
