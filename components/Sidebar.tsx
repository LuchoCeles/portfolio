"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { perfilDatos, enlacesSociales } from "@/data/perfil";

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
              src="/perfil.jpg"
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
                <Link
                  href={item.href}
                  onClick={() => setMenuAbierto(false)}
                  className="block px-3 py-2 rounded-lg text-[#a1a1aa] text-sm hover:text-[#2dd4bf] hover:bg-[#2dd4bf]/5 transition-all duration-200"
                >
                  {item.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Separador */}
        <div className="border-t border-[#1a1a1a]" />

        {/* Íconos de redes sociales (visibles solo en desktop, ya que en mobile se muestran debajo de "Sobre mí") */}
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