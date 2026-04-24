import { ReactNode } from "react";

interface PropSeccion {
  id: string;
  titulo?: string;
  children: ReactNode;
  claseAdicional?: string;
}

// Componente de sección reutilizable con título y separador
export default function Seccion({ id, titulo, children, claseAdicional = "" }: PropSeccion) {
  return (
    <section id={id} className={`py-20 ${claseAdicional}`}>
      {titulo && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-3">{titulo}</h2>
          {/* Línea de acento debajo del título */}
          <div className="h-px w-12 bg-[#2dd4bf]" />
        </div>
      )}
      {children}
    </section>
  );
}
