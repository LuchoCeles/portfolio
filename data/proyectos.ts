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
    titulo: "Tienda Magic",
    descripcion:
      "E-commerce desarrollado para una tienda de bazar, papelería y regalos, con una experiencia de compra simple y adaptable a un catálogo amplio de productos y categorías.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Mercado Pago"],
    caracteristicas: [
      "Catálogo organizado por categorías y subcategorías",
      "Carrito de compras",
      "Gestión de productos, stock y variantes",
      "Panel de administración",
      "Diseño responsive adaptado a dispositivos móviles",
    ],
    enlace: "https://tiendamagic.vercel.app/",
  },
  {
    titulo: "MyA IMP",
    descripcion:
      "E-commerce de zapatillas e indumentaria desarrollado para ofrecer una experiencia de compra moderna, con gestión de productos, variantes y stock desde un panel administrativo.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Mercado Pago"],
    caracteristicas: [
      "Catálogo de zapatillas e indumentaria",
      "Productos con talles, colores y variantes",
      "Carrito de compras",
      "Control de stock y productos",
      "Panel de administración",
    ],
    enlace: "https://myaimp.vercel.app/",
  },
  {
    titulo: "Alegres Lencería",
    descripcion:
      "Tienda online de indumentaria femenina desarrollada con una experiencia visual enfocada en la presentación de productos y una navegación simple desde cualquier dispositivo.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Mercado Pago"],
    caracteristicas: [
      "Catálogo de indumentaria femenina",
      "Gestión de talles, colores y variantes",
      "Carrito de compras",
      "Panel administrativo para productos y stock",
      "Diseño responsive orientado a dispositivos móviles",
    ],
    enlace: "https://alegreslenceria.vercel.app/",
  },
  {
    titulo: "Mayoraz Barber",
    descripcion:
      "Plataforma de turnos online para barberías que permite a los usuarios seleccionar servicio, profesional y horario, con integración de pagos online.",
    tecnologias: ["Next.js", "Prisma", "Node.js", "Nodemailer", "OAuth", "Mercado Pago"],
    caracteristicas: [
      "Reserva de turnos",
      "Autenticación con OAuth",
      "Pagos online",
      "Notificaciones por email",
    ],
    enlace: "https://mayoraz.logabyte.com.ar/",
  },
  {
    titulo: "New Surfboards",
    descripcion:
      "E-commerce especializado en surf con catálogo de productos, gestión integral de inventario y herramientas específicas para la comercialización de tablas, indumentaria y accesorios.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Mercado Pago"],
    caracteristicas: [
      "Catálogo especializado en productos de surf",
      "Configuración de tablas y variantes",
      "Gestión de stock y proveedores",
      "Carrito y gestión de pedidos",
      "Panel de administración integral",
    ],
    enlace: "https://newsurfboards.vercel.app/",
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
  {
    titulo: "El Directo",
    descripcion:
      "Plataforma profesional de logística y transporte de carga especializada en la ruta Mar del Plata - Rosario, optimizada para conversión y visibilidad en buscadores.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React", "Vercel"],
    caracteristicas: [
      "Diseño responsive y moderno",
      "Optimización SEO avanzada (JSON-LD)",
      "Integración de mapas interactivos",
      "Formularios de contacto directos",
      "Animaciones fluidas con Framer Motion",
    ],
    enlace: "https://transporteeldirecto.com.ar/",
  }
];
