// Datos de los proyectos del portfolio
export interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  caracteristicas: string[];
  enlace: string;
  imagen?: string;
}

export const proyectos: Proyecto[] = [
  {
    titulo: "Urban Barber",
    descripcion:
      "Plataforma de turnos online para barberías que permite a los usuarios seleccionar servicio, profesional y horario, con integración de pagos online.",
    tecnologias: ["Next.js", "Prisma", "Node.js", "Nodemailer", "OAuth", "Mercado Pago"],
    caracteristicas: [
      "Reserva de turnos",
      "Autenticación con OAuth",
      "Pagos online",
      "Notificaciones por email",
    ],
    enlace: "https://urbanbarber-web.vercel.app/",
  },
  {
    titulo: "Gestión OK",
    descripcion:
      "Sistema interno de gestión para control de stock, proveedores y pagos orientado a negocios.",
    tecnologias: ["Next.js", "Prisma"],
    caracteristicas: [
      "Gestión de stock",
      "Administración de proveedores",
      "Control de pagos",
    ],
    enlace: "https://gestionok.vercel.app/",
  },
  {
    titulo: "Lavadero Web",
    descripcion:
      "Sistema de turnos para lavadero de autos con gestión de servicios, usuarios y roles administrativos.",
    tecnologias: ["Next.js", "Prisma", "Node.js", "Nodemailer", "OAuth"],
    caracteristicas: [
      "Turnos online",
      "Panel admin",
      "Gestión de servicios y precios",
      "Roles de usuario",
    ],
    enlace: "https://lavadero-web.vercel.app/",
  },
];
