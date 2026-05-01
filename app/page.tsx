import Sidebar from "@/components/Sidebar";
import Seccion from "@/components/Seccion";
import TarjetaProyecto from "@/components/TarjetaProyecto";
import ListaServicios from "@/components/ListaServicios";
import ListaStack from "@/components/ListaStack";
import BotonHero from "@/components/BotonHero";
import { proyectos } from "@/data/proyectos";
import { Analytics } from "@vercel/analytics/react";

export default function PaginaInicio() {
  return (
    <>
      <Analytics />
      <div
        className="min-h-screen"
        style={{ backgroundColor: "var(--color-fondo)", color: "var(--color-texto)" }}
      >
        {/* Sidebar fijo — en desktop (lg+) ocupa 288px a la izquierda */}
        <Sidebar />

        {/*
        Contenido principal:
        - Mobile/Tablet (< lg): sin margen lateral, ocupa todo el ancho
        - Desktop (lg+): margen izquierdo de 72 (288px) para dejar espacio al sidebar
        */}
        <main className="lg:ml-72 px-6 md:px-16 max-w-4xl">

          {/* ── HERO ─────────────────────────────────────────── */}
          <Seccion id="inicio" claseAdicional="min-h-screen flex flex-col justify-center pt-20 lg:pt-0">
            <div className="flex flex-col gap-6 animate-fade-in">
              <span
                className="text-sm font-medium tracking-widest uppercase"
                style={{ color: "var(--color-acento)" }}
              >
                Disponible para proyectos
              </span>

              <h1
                className="text-5xl md:text-7xl font-bold leading-none tracking-tight"
                style={{ color: "var(--color-texto-blanco)" }}
              >
                Fullstack
                <br />
                <span style={{ color: "var(--color-acento)" }}>Developer</span>
              </h1>

              <p
                className="text-lg max-w-lg leading-relaxed"
                style={{ color: "var(--color-texto-tenue)" }}
              >
                Construyo aplicaciones web modernas, escalables y centradas en el usuario.
              </p>

              {/* Botón principal — componente cliente para manejar el hover */}
              <div className="mt-4">
                <BotonHero />
              </div>
            </div>
          </Seccion>

          {/* ── SOBRE MÍ ─────────────────────────────────────── */}
          <Seccion id="sobre-mi" titulo="Sobre mí">
            <div
              className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl"
              style={{ color: "var(--color-texto-tenue)" }}
            >
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
            {/* Los datos e íconos viven dentro del componente cliente */}
            <ListaServicios />
          </Seccion>

          {/* ── STACK TECNOLÓGICO ────────────────────────────── */}
          <Seccion id="stack" titulo="Stack Tecnológico">
            {/* Los datos e íconos viven dentro del componente cliente */}
            <ListaStack />
          </Seccion>

          {/* Footer */}
          <footer
            className="py-12 mt-8"
            style={{ borderTop: "1px solid var(--color-borde)" }}
          >
            <p
              className="text-sm text-center"
              style={{ color: "var(--color-texto-mas-tenue)" }}
            >
              © {new Date().getFullYear()} Luciano Baltazar Celes — Todos los derechos reservados
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}