"use client";

import {
  Globe,
  Settings,
  Calendar,
  Plug,
  Layers,
  LucideIcon,
} from "lucide-react";

// Datos de servicios definidos dentro del cliente para evitar pasar componentes como props
const servicios: { titulo: string; icono: LucideIcon }[] = [
  { titulo: "Desarrollo de aplicaciones SaaS", icono: Layers },
  { titulo: "Desarrollo web fullstack", icono: Globe },
  { titulo: "Software a medida", icono: Settings },
  { titulo: "Integración de APIs", icono: Plug },
  { titulo: "Sistemas de turnos online", icono: Calendar },
];

// Lista completa de servicios con sus tarjetas interactivas
export default function ListaServicios() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {servicios.map(({ titulo, icono: Icono }) => (
        <div
          key={titulo}
          className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300"
          style={{
            backgroundColor: "var(--color-fondo-tarjeta)",
            border: "1px solid var(--color-borde)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--color-acento-borde-hover)";
            el.style.backgroundColor = "var(--color-acento-fondo)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--color-borde)";
            el.style.backgroundColor = "var(--color-fondo-tarjeta)";
          }}
        >
          {/* Ícono del servicio */}
          <div
            className="p-2 rounded-lg shrink-0"
            style={{
              backgroundColor: "var(--color-acento-fondo-hover)",
              color: "var(--color-acento)",
            }}
          >
            <Icono size={18} />
          </div>

          {/* Título del servicio */}
          <p
            className="text-sm font-medium leading-snug"
            style={{ color: "var(--color-texto)" }}
          >
            {titulo}
          </p>
        </div>
      ))}
    </div>
  );
}