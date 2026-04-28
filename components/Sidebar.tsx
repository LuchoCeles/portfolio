"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon } from "lucide-react";
import { usarTema } from "@/components/ProveedorTema";

// Datos de perfil del sidebar
const perfilDatos = {
  nombre: "Luciano Baltazar Celes",
  rol: "Fullstack Developer",
  descripcion:
    "Desarrollador y Analista de Sistemas enfocado en crear soluciones escalables y funcionales",
  enlaces: {
    github: "https://github.com/LuchoCeles",
    linkedin: "https://www.linkedin.com/in/lucianoceles/",
    email: "lucianoceles@gmail.com",
  },
};

// Íconos de redes sociales con sus datos
const enlacesSociales = [
  {
    nombre: "GitHub",
    href: perfilDatos.enlaces.github,
    icono: Github,
    etiqueta: "Ver perfil de GitHub",
  },
  {
    nombre: "LinkedIn",
    href: perfilDatos.enlaces.linkedin,
    icono: Linkedin,
    etiqueta: "Ver perfil de LinkedIn",
  },
  {
    nombre: "Email",
    href: `mailto:${perfilDatos.enlaces.email}`,
    icono: Mail,
    etiqueta: "Enviar email",
  },
];

// Ítems de navegación del sidebar
const itemsNav = [
  { etiqueta: "Inicio", href: "#inicio" },
  { etiqueta: "Sobre mí", href: "#sobre-mi" },
  { etiqueta: "Proyectos", href: "#proyectos" },
  { etiqueta: "Servicios", href: "#servicios" },
  { etiqueta: "Stack", href: "#stack" },
];

export default function Sidebar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { tema, alternarTema } = usarTema();

  return (
    <>
      {/* ── Botón hamburguesa mobile con animación de respiración ── */}
      <button
        className={`
          fixed top-4 right-4 z-50 md:hidden
          p-2.5 rounded-xl transition-all duration-300
          ${!menuAbierto ? "boton-respiracion" : ""}
        `}
        style={{
          backgroundColor: menuAbierto
            ? "var(--color-acento-fondo-hover)"
            : "var(--color-boton-mobile)",
          border: "1.5px solid var(--color-acento-borde)",
          color: "var(--color-acento)",
        }}
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
      >
        {/* Ícono cambia entre X y Menu con transición suave */}
        <span
          className="block transition-transform duration-300"
          style={{ transform: menuAbierto ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          {menuAbierto ? <X size={20} /> : <Menu size={20} />}
        </span>
      </button>

      {/* ── Overlay con fade para mobile ── */}
      <div
        className={`
          fixed inset-0 z-30 md:hidden
          transition-opacity duration-300
          ${menuAbierto ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        style={{ backgroundColor: "var(--color-overlay)" }}
        onClick={() => setMenuAbierto(false)}
      />

      {/* ── Sidebar principal ── */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 z-40
          flex flex-col py-10 px-8 gap-8
          transition-transform duration-300 ease-in-out
          ${menuAbierto ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
        style={{
          backgroundColor: "var(--color-sidebar)",
          borderRight: "1px solid var(--color-borde)",
        }}
      >
        {/* ── Foto y datos de perfil ── */}
        <div
          className={`flex flex-col items-center gap-4 text-center ${
            menuAbierto ? "sidebar-item-animado" : ""
          }`}
          style={{ animationDelay: "60ms" }}
        >
          <div
            className="relative w-24 h-24 rounded-full overflow-hidden"
            style={{ boxShadow: "0 0 0 2px var(--color-acento-borde)" }}
          >
            <Image
              src="/perfil.jpg"
              alt={`Foto de perfil de ${perfilDatos.nombre}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Nombre y rol */}
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

          {/* Descripción corta */}
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-texto)" }}>
            {perfilDatos.descripcion}
          </p>
        </div>

        {/* Separador */}
        <div style={{ borderTop: "1px solid var(--color-borde)" }} />

        {/* ── Navegación con items animados escalonados en mobile ── */}
        <nav aria-label="Navegación principal">
          <ul className="flex flex-col gap-2">
            {itemsNav.map((item, indice) => (
              <li
                key={item.href}
                className={menuAbierto ? "sidebar-item-animado" : ""}
                style={{ animationDelay: `${120 + indice * 55}ms` }}
              >
                <a
                  href={item.href}
                  onClick={() => setMenuAbierto(false)}
                  className="block px-3 py-2 rounded-lg text-sm transition-all duration-200"
                  style={{ color: "var(--color-texto)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-acento)";
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "var(--color-acento-fondo)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-texto)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  {item.etiqueta}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Separador */}
        <div style={{ borderTop: "1px solid var(--color-borde)" }} />

        {/* ── Íconos de redes sociales animados en mobile ── */}
        <div
          className={`flex items-center justify-center gap-4 ${
            menuAbierto ? "sidebar-item-animado" : ""
          }`}
          style={{ animationDelay: "420ms" }}
        >
          {enlacesSociales.map((enlace) => {
            const Icono = enlace.icono;
            return (
              <Link
                key={enlace.nombre}
                href={enlace.href}
                target={enlace.nombre !== "Email" ? "_blank" : undefined}
                rel={enlace.nombre !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={enlace.etiqueta}
                className="transition-all duration-200"
                style={{ color: "var(--color-texto)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--color-acento)";
                  (e.currentTarget as HTMLElement).style.filter =
                    "drop-shadow(0 0 8px var(--color-acento))";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--color-texto)";
                  (e.currentTarget as HTMLElement).style.filter = "none";
                }}
              >
                <Icono size={20} />
              </Link>
            );
          })}
        </div>

        {/* Separador */}
        <div style={{ borderTop: "1px solid var(--color-borde)" }} />

        {/* ── Toggle switch de cambio de tema ── */}
        <div
          className={`flex items-center justify-center gap-3 ${
            menuAbierto ? "sidebar-item-animado" : ""
          }`}
          style={{ animationDelay: "480ms" }}
        >

          {/* Pista del toggle */}
          <button
            onClick={alternarTema}
            aria-label={tema === "oscuro" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="relative flex-shrink-0 rounded-full transition-all duration-300 cursor-pointer"
            style={{
              width: "52px",
              height: "28px",
              backgroundColor:
                tema === "oscuro"
                  ? "rgba(45, 212, 191, 0.12)"
                  : "rgba(232, 97, 42, 0.12)",
              border:
                tema === "oscuro"
                  ? "1.5px solid rgba(45, 212, 191, 0.35)"
                  : "1.5px solid rgba(232, 97, 42, 0.35)",
              boxShadow:
                tema === "oscuro"
                  ? "inset 0 0 8px rgba(45, 212, 191, 0.08)"
                  : "inset 0 0 8px rgba(232, 97, 42, 0.08)",
            }}
          >
            {/* Thumb deslizante con el ícono */}
            <span
              className="absolute top-1/2 flex items-center justify-center rounded-full transition-all duration-300"
              style={{
                width: "20px",
                height: "20px",
                transform: "translateY(-50%)",
                left: tema === "oscuro" ? "3px" : "calc(100% - 23px)",
                backgroundColor:
                  tema === "oscuro" ? "#2dd4bf" : "#e8612a",
                boxShadow:
                  tema === "oscuro"
                    ? "0 0 10px rgba(45, 212, 191, 0.6)"
                    : "0 0 10px rgba(232, 97, 42, 0.6)",
              }}
            >
              {/* Ícono dentro del thumb */}
              {tema === "oscuro" ? (
                <Moon size={11} color="#0a0a0a" />
              ) : (
                <Sun size={11} color="#ffffff" />
              )}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}