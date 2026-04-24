"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";

const GithubIcon = ({ size = 24, ...props }) => (
  <svg
    {...props}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg
    {...props}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


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
    icono: GithubIcon,
    etiqueta: "Ver perfil de GitHub",
  },
  {
    nombre: "LinkedIn",
    href: perfilDatos.enlaces.linkedin,
    icono: LinkedinIcon,
    etiqueta: "Ver perfil de LinkedIn",
  },
  {
    nombre: "Email",
    href: `mailto:${perfilDatos.enlaces.email}`,
    icono: Mail,
    etiqueta: "Enviar email",
  },
];

export default function Sidebar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      {/* Botón hamburguesa en mobile */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden bg-[#111] border border-[#222] p-2 rounded-lg text-[#a1a1aa] hover:text-[#2dd4bf] transition-colors"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
      >
        {menuAbierto ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay para mobile */}
      {menuAbierto && (
        <div
          className="fixed inset-0 bg-black/70 z-30 md:hidden"
          onClick={() => setMenuAbierto(false)}
        />
      )}

      {/* Sidebar principal */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-[#0d0d0d] border-r border-[#1a1a1a] z-40
          flex flex-col py-10 px-8 gap-8
          transition-transform duration-300 ease-in-out
          ${menuAbierto ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Foto de perfil */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-[#2dd4bf]/30">
            <Image
              src="/profile.jpg"
              alt={`Foto de perfil de ${perfilDatos.nombre}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Nombre y rol */}
          <div>
            <h1 className="text-white font-semibold text-lg leading-tight">
              {perfilDatos.nombre}
            </h1>
            <p className="text-[#2dd4bf] text-sm font-medium mt-1">{perfilDatos.rol}</p>
          </div>

          {/* Descripción corta */}
          <p className="text-[#a1a1aa] text-sm leading-relaxed">{perfilDatos.descripcion}</p>
        </div>

        {/* Separador */}
        <div className="border-t border-[#1a1a1a]" />

        {/* Navegación */}
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
                <a
                  href={item.href}
                  onClick={() => setMenuAbierto(false)}
                  className="block px-3 py-2 rounded-lg text-[#a1a1aa] text-sm hover:text-[#2dd4bf] hover:bg-[#2dd4bf]/5 transition-all duration-200"
                >
                  {item.etiqueta}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Separador */}
        <div className="border-t border-[#1a1a1a]" />

        {/* Íconos de redes sociales */}
        <div className="flex items-center justify-center gap-4">
          {enlacesSociales.map((enlace) => {
            const Icono = enlace.icono;
            return (
              <Link
                key={enlace.nombre}
                href={enlace.href}
                target={enlace.nombre !== "Email" ? "_blank" : undefined}
                rel={enlace.nombre !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={enlace.etiqueta}
                className="text-[#a1a1aa] hover:text-[#2dd4bf] transition-colors duration-200 hover:drop-shadow-[0_0_8px_#2dd4bf]"
              >
                <Icono size={20} />
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
