import Sidebar from "@/components/Sidebar";
import Seccion from "@/components/Seccion";
import TarjetaProyecto from "@/components/TarjetaProyecto";
import { proyectos } from "@/data/proyectos";
import {
  Code2,
  Server,
  Database,
  GitBranch,
  Zap,
  ArrowRight,
  Globe,
  Settings,
  Calendar,
  Plug,
  Layers,
} from "lucide-react";

// Datos del stack tecnológico organizado por categoría
const stackTecnologico = [
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

// Servicios ofrecidos con íconos correspondientes
const servicios = [
  { titulo: "Desarrollo de aplicaciones SaaS", icono: Layers },
  { titulo: "Desarrollo web fullstack", icono: Globe },
  { titulo: "Software a medida", icono: Settings },
  { titulo: "Integración de APIs", icono: Plug },
  { titulo: "Sistemas de turnos online", icono: Calendar },
];

export default function PaginaInicio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#a1a1aa]">
      {/* Sidebar fijo */}
      <Sidebar />

      {/* Contenido principal con margen para el sidebar en desktop */}
      <main className="md:ml-72 px-6 md:px-16 max-w-4xl">

        {/* ── HERO ─────────────────────────────────────────── */}
        <Seccion id="inicio" claseAdicional="min-h-screen flex flex-col justify-center pt-10 md:pt-0">
          <div className="flex flex-col gap-6 animate-fade-in">
            <span className="text-[#2dd4bf] text-sm font-medium tracking-widest uppercase">
              Disponible para proyectos
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tight">
              Fullstack
              <br />
              <span className="text-[#2dd4bf]">Developer</span>
            </h1>

            <p className="text-lg text-[#71717a] max-w-lg leading-relaxed">
              Construyo aplicaciones web modernas, escalables y centradas en el usuario.
            </p>

            {/* Botón principal con glow turquesa */}
            <div className="mt-4">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2dd4bf] text-[#0a0a0a]
                  font-semibold rounded-xl text-sm
                  hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] hover:bg-[#2dd4bf]/90
                  transition-all duration-300"
              >
                Ver proyectos
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </Seccion>

        {/* ── SOBRE MÍ ─────────────────────────────────────── */}
        <Seccion id="sobre-mi" titulo="Sobre mí">
          <div className="flex flex-col gap-5 text-[#71717a] text-base leading-relaxed max-w-2xl">
            <p>
              Soy Analista de Sistemas con experiencia en desarrollo fullstack, especializado en
              la creación de aplicaciones web modernas utilizando tecnologías como Next.js,
              Node.js y bases de datos relacionales.
            </p>
            <p>
              Tengo experiencia desarrollando APIs REST, integrando sistemas complejos y
              construyendo soluciones escalables orientadas a negocio. Me enfoco en escribir
              código limpio, mantener buenas prácticas y construir productos que realmente
              aporten valor.
            </p>
            <p>
              He trabajado tanto en entornos académicos como en proyectos reales, participando
              en metodologías ágiles y colaborando con equipos de desarrollo.
            </p>
            <p>
              Actualmente sigo perfeccionando mis habilidades y construyendo proyectos propios
              con foco en SaaS y soluciones a medida.
            </p>
          </div>
        </Seccion>

        {/* ── PROYECTOS ────────────────────────────────────── */}
        <Seccion id="proyectos" titulo="Proyectos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {proyectos.map((proyecto, indice) => (
              <TarjetaProyecto key={proyecto.titulo} proyecto={proyecto} indice={indice} />
            ))}
          </div>
        </Seccion>

        {/* ── SERVICIOS ────────────────────────────────────── */}
        <Seccion id="servicios" titulo="Servicios">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {servicios.map(({ titulo, icono: Icono }) => (
              <div
                key={titulo}
                className="group flex items-start gap-4 p-5 bg-[#0f0f0f] border border-[#1a1a1a]
                  rounded-xl hover:border-[#2dd4bf]/25 hover:bg-[#2dd4bf]/3
                  transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-[#2dd4bf]/10 text-[#2dd4bf] shrink-0
                  group-hover:bg-[#2dd4bf]/20 transition-colors duration-300">
                  <Icono size={18} />
                </div>
                <p className="text-sm text-[#a1a1aa] font-medium leading-snug group-hover:text-white
                  transition-colors duration-300">
                  {titulo}
                </p>
              </div>
            ))}
          </div>
        </Seccion>

        {/* ── STACK TECNOLÓGICO ────────────────────────────── */}
        <Seccion id="stack" titulo="Stack Tecnológico">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stackTecnologico.map(({ categoria, tecnologias, icono: Icono }) => (
              <div
                key={categoria}
                className="p-6 bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl
                  hover:border-[#2dd4bf]/20 transition-all duration-300"
              >
                {/* Encabezado de categoría */}
                <div className="flex items-center gap-3 mb-4">
                  <Icono size={16} className="text-[#2dd4bf]" />
                  <h3 className="text-white text-sm font-semibold">{categoria}</h3>
                </div>

                {/* Lista de tecnologías */}
                <ul className="flex flex-col gap-2">
                  {tecnologias.map((tecnologia) => (
                    <li key={tecnologia} className="flex items-center gap-2 text-sm text-[#71717a]">
                      <Zap size={11} className="text-[#2dd4bf]/50" />
                      {tecnologia}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Seccion>

        {/* Footer */}
        <footer className="py-12 border-t border-[#1a1a1a] mt-8">
          <p className="text-[#3f3f46] text-sm text-center">
            © {new Date().getFullYear()} Luciano Baltazar Celes — Todos los derechos reservados
          </p>
        </footer>
      </main>
    </div>
  );
}
