"use client";

import { Code2, Server, Database, GitBranch, Zap, LucideIcon } from "lucide-react";

// Datos del stack definidos dentro del cliente para evitar pasar componentes como props
const stackTecnologico: { categoria: string; tecnologias: string[]; icono: LucideIcon }[] = [
  {
    categoria: "Frontend",
    tecnologias: ["React", "Next.js", "Tailwind CSS"],
    icono: Code2,
  },
  {
    categoria: "Backend",
    tecnologias: ["Node.js", "Express", "ASP.NET Core"],
    icono: Server,
  },
  {
    categoria: "Base de Datos",
    tecnologias: ["MySQL", "SQL Server", "Prisma / Dapper"],
    icono: Database,
  },
  {
    categoria: "Otros",
    tecnologias: ["Git", "WebSocket", "OAuth", "Nodemailer"],
    icono: GitBranch,
  },
];

// Grid completo del stack tecnológico con tarjetas interactivas
export default function ListaStack() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {stackTecnologico.map(({ categoria, tecnologias, icono: Icono }) => (
        <div
          key={categoria}
          className="p-6 rounded-xl transition-all duration-300"
          style={{
            backgroundColor: "var(--color-fondo-tarjeta)",
            border: "1px solid var(--color-borde)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--color-acento-borde)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--color-borde)";
          }}
        >
          {/* Encabezado de categoría */}
          <div className="flex items-center gap-3 mb-4">
            <Icono size={16} style={{ color: "var(--color-acento)" }} />
            <h3 className="text-sm font-semibold" style={{ color: "var(--color-texto-blanco)" }}>
              {categoria}
            </h3>
          </div>

          {/* Lista de tecnologías */}
          <ul className="flex flex-col gap-2">
            {tecnologias.map((tecnologia) => (
              <li
                key={tecnologia}
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--color-texto-tenue)" }}
              >
                <Zap size={11} style={{ color: "var(--color-acento)", opacity: 0.5 }} />
                {tecnologia}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}