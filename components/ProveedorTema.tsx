"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Tipo para los temas disponibles
type Tema = "oscuro" | "claro";

// Interfaz del contexto de tema
interface ContextoTema {
  tema: Tema;
  alternarTema: () => void;
}

// Creación del contexto
const ContextoTema = createContext<ContextoTema>({
  tema: "oscuro",
  alternarTema: () => {},
});

// Hook personalizado para consumir el contexto de tema
export function usarTema() {
  return useContext(ContextoTema);
}

// Provider que envuelve la aplicación y provee el tema actual
export default function ProveedorTema({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>("oscuro");

  // Leer el tema guardado en localStorage al montar el componente
  useEffect(() => {
    const temaGuardado = localStorage.getItem("tema") as Tema | null;
    if (temaGuardado === "claro" || temaGuardado === "oscuro") {
      setTema(temaGuardado);
    }
  }, []);

  // Aplicar la clase del tema al elemento <html> y guardar en localStorage
  useEffect(() => {
    const html = document.documentElement;
    if (tema === "claro") {
      html.classList.add("tema-claro");
    } else {
      html.classList.remove("tema-claro");
    }
    localStorage.setItem("tema", tema);
  }, [tema]);

  // Función para alternar entre temas
  const alternarTema = () => {
    setTema((temaActual) => (temaActual === "oscuro" ? "claro" : "oscuro"));
  };

  return (
    <ContextoTema.Provider value={{ tema, alternarTema }}>
      {children}
    </ContextoTema.Provider>
  );
}