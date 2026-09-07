"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { usarTema } from "@/components/ProveedorTema";
import { perfilDatos, enlacesSociales } from "@/data/perfil";

export default function Sidebar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { tema, alternarTema } = usarTema();

  return (
    <>
      {/* Botón hamburguesa adaptado al tema */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden p-2 rounded-lg transition-colors boton-respiracion"
        style={{
          backgroundColor: "var(--color-boton-mobile)",
          border: "1px solid var(--color-boton-mobile-borde)",
          color: "var(--color-acento)",
        }}
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
      >
        {menuAbierto ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay con opacidad dinámica */}
      {menuAbierto && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          style={{ backgroundColor: "var(--color-overlay)" }}
          onClick={() => setMenuAbierto(false)}
        />
      )}

      {/* Sidebar con colores dinámicos mediante variables CSS */}
      <aside
        className={`
          fixed inset-y-0 left-0 w-72 z-40
          flex flex-col
          px-8 py-6 md:py-8
          gap-5 md:gap-6
          overflow-y-auto overflow-x-hidden
          scrollbar-hide
          transition-transform duration-300 ease-in-out
          ${menuAbierto ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
        style={{
          backgroundColor: "var(--color-sidebar)",
          borderRight: "1px solid var(--color-borde)",
          color: "var(--color-texto)",
        }}
      >
        {/* Foto de perfil */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-[var(--color-acento)]/30">
            <Image
              src="/perfil.jpg"
              alt={`Foto de perfil de ${perfilDatos.nombre}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1
              className="font-semibold text-lg leading-tight"
              style={{ color: "var(--color-texto-blanco)" }}
            >
              {perfilDatos.nombre}
            </h1>
            <p
              className="text-sm font-medium mt-1"
              style={{ color: "var(--color-acento)" }}
            >
              {perfilDatos.rol}
            </p>
          </div>

          <p className="text-sm leading-relaxed" style={{ color: "var(--color-texto)" }}>
            {perfilDatos.descripcion}
          </p>
        </div>

        {/* Separador */}
        <div style={{ borderTop: "1px solid var(--color-borde)" }} />

        {/* Navegación con hover dinámico */}
        <nav aria-label="Navegación principal">
          <ul className="flex flex-col gap-2">
            {[
              { etiqueta: "Inicio", href: "#inicio" },
              { etiqueta: "Sobre mí", href: "#sobre-mi" },
              { etiqueta: "Proyectos", href: "#proyectos" },
              { etiqueta: "Servicios", href: "#servicios" },
              { etiqueta: "Stack", href: "#stack" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuAbierto(false)}
                  className="block px-3 py-2 rounded-lg text-sm transition-all duration-200"
                  style={{ color: "var(--color-texto)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-acento)";
                    e.currentTarget.style.backgroundColor = "var(--color-acento-fondo)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-texto)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {item.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Separador */}
        <div style={{ borderTop: "1px solid var(--color-borde)" }} />

        {/* Redes sociales (solo desktop) con hover dinámico */}
        <div className="hidden md:flex items-center justify-center gap-4">
          {enlacesSociales.map((enlace) => {
            const Icono = enlace.icono;
            return (
              <Link
                key={enlace.nombre}
                href={enlace.href}
                target={enlace.nombre !== "Email" ? "_blank" : undefined}
                rel={enlace.nombre !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={enlace.etiqueta}
                className="transition-colors duration-200"
                style={{ color: "var(--color-texto)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-acento)";
                  e.currentTarget.style.filter = "drop-shadow(0 0 8px var(--color-acento))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-texto)";
                  e.currentTarget.style.filter = "none";
                }}
              >
                <Icono size={20} />
              </Link>
            );
          })}
        </div>

        {/* Toggle deslizable Sol/Luna */}
        <div className="flex items-center justify-center">
          <button
            onClick={alternarTema}
            aria-label="Cambiar tema"
            className="relative w-16 h-7 rounded-full p-0.5 transition-colors duration-300 flex items-center"
            style={{
              backgroundColor: "var(--color-acento)",
            }}
          >
            {/* Íconos de fondo (sol y luna) */}
            <Sun
              size={12}
              className={`absolute left-1 transition-opacity ${tema === "claro" ? "opacity-100" : "opacity-30"
                }`}
              color="black"
            />
            <Moon
              size={12}
              className={`absolute right-1 transition-opacity ${tema === "oscuro" ? "opacity-100" : "opacity-30"
                }`}
              color="black"
            />

            {/* Thumb deslizante */}
            <span
              className={`
                absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md
                transform transition-transform duration-300 flex items-center justify-center
                ${tema === "oscuro" ? "translate-x-9" : "translate-x-0"}
              `}
            >
              {tema === "oscuro" ? (
                <Moon size={12} color="#6366f1" />
              ) : (
                <Sun size={12} color="#f59e0b" />
              )}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}