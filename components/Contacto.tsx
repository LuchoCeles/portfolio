import Link from "next/link";
import { enlacesSociales } from "@/data/perfil";

// Bloque de contacto que solo se muestra en mobile, debajo de "Sobre mí"
export default function Contacto() {
  return (
    <div className="md:hidden flex flex-col gap-3 mt-10">
      <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
        Contacto
      </h3>
      <div className="flex flex-col gap-3">
        {enlacesSociales.map((enlace) => {
          const Icono = enlace.icono;
          return (
            <Link
              key={enlace.nombre}
              href={enlace.href}
              target={enlace.nombre !== "Email" ? "_blank" : undefined}
              rel={enlace.nombre !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={enlace.etiqueta}
              className="flex items-center gap-3 p-3 bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl
                text-[#a1a1aa] hover:text-[#2dd4bf] hover:border-[#2dd4bf]/30
                transition-all duration-200"
            >
              <Icono size={18} />
              <span className="text-sm font-medium">{enlace.nombre}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}