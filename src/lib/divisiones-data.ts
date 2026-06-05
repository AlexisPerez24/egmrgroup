// src/lib/divisiones-data.ts

export type Servicio = {
  slug: string;
  titulo: string;
  badge: string;
  resumen: string;
  descripcion: string;
  icon: string;
  caracteristicas: string[];
};

export type Division = {
  id: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  color: string;
  accentColor: string;
  servicios: Servicio[];
};

export const divisiones: Division[] = [
  {
    id: "evta",
    nombre: "EVTA",
    subtitulo: "Venta y Renta de Equipos",
    descripcion:
      "Equipos de cómputo, papelería, accesorios y consumibles para tu oficina o negocio. También rentamos impresoras con soporte incluido.",
    color: "#0ea5e9",
    accentColor: "#38bdf8",
    servicios: [
      {
        slug: "equipos-computo",
        titulo: "Equipos de Cómputo",
        badge: "Venta",
        resumen: "Computadoras de escritorio, laptops y servidores para oficina.",
        descripcion:
          "Ofrecemos una amplia variedad de equipos de cómputo: desktops, laptops y servidores de las mejores marcas. Asesoría personalizada para elegir el equipo ideal según tus necesidades y presupuesto.",
        icon: "/icons/soporte.png",
        caracteristicas: [
          "Computadoras de escritorio",
          "Laptops y ultrabooks",
          "Servidores para empresa",
          "Garantía de fábrica",
          "Asesoría personalizada",
        ],
      },
      {
        slug: "papeleria",
        titulo: "Papelería",
        badge: "Venta",
        resumen: "Suministros de oficina, papelería en general y consumibles.",
        descripcion:
          "Todo lo que tu oficina necesita en papelería: papel, folders, plumas, libretas y más. Manejamos marcas reconocidas y tenemos precios competitivos para empresas.",
        icon: "/icons/soporte.png",
        caracteristicas: [
          "Papel bond y especial",
          "Folders y archiveros",
          "Material de escritorio",
          "Pedidos por volumen",
          "Entrega a domicilio",
        ],
      },
      {
        slug: "accesorios-consumibles",
        titulo: "Accesorios y Consumibles",
        badge: "Venta",
        resumen: "Tóner, tinta, cables, mouse, teclados y más accesorios.",
        descripcion:
          "Mantenemos tu equipo al máximo rendimiento con tóner, cartuchos de tinta originales y compatibles, cables, periféricos y todos los accesorios que necesitas.",
        icon: "/icons/soporte.png",
        caracteristicas: [
          "Cartuchos y tóner original",
          "Tinta compatible",
          "Cables y conectores",
          "Mouse y teclados",
          "UPS y reguladores",
        ],
      },
      {
        slug: "renta-impresoras",
        titulo: "Renta de Impresoras",
        badge: "Renta",
        resumen: "Impresoras en renta con soporte y mantenimiento incluido.",
        descripcion:
          "Renta impresoras de alta calidad sin preocuparte por mantenimiento. El plan incluye soporte técnico, consumibles y visitas programadas. Ideal para empresas y oficinas.",
        icon: "/icons/impresoras.png",
        caracteristicas: [
          "Impresoras láser y de inyección",
          "Mantenimiento incluido",
          "Soporte técnico",
          "Consumibles incluidos",
          "Contratos flexibles",
        ],
      },
    ],
  },
  {
    id: "dedicated-services",
    nombre: "dEdicatEd Services",
    subtitulo: "Internet Dedicado Empresarial",
    descripcion:
      "Internet simétrico de alta velocidad para empresas. Conexión estable 24/7 con soporte especializado y garantía de disponibilidad.",
    color: "#a855f7",
    accentColor: "#c084fc",
    servicios: [
      {
        slug: "internet-dedicado",
        titulo: "Internet Dedicado",
        badge: "Simétrico Empresarial",
        resumen: "Alta velocidad, conexión estable 24/7 y soporte especializado.",
        descripcion:
          "Internet dedicado simétrico para empresas: misma velocidad de subida y bajada. Sin límites de datos, sin interrupciones. Contamos con soporte técnico especializado y tiempos de respuesta garantizados.",
        icon: "/icons/internet.png",
        caracteristicas: [
          "Velocidad simétrica garantizada",
          "Conexión estable 24/7",
          "Soporte especializado",
          "SLA garantizado",
          "Sin límite de datos",
        ],
      },
      {
        slug: "soporte-red",
        titulo: "Soporte de Red",
        badge: "Empresarial",
        resumen: "Instalación, configuración y mantenimiento de redes.",
        descripcion:
          "Diseñamos, instalamos y mantenemos la infraestructura de red de tu empresa. Cableado estructurado, configuración de routers, switches y puntos de acceso WiFi.",
        icon: "/icons/internet.png",
        caracteristicas: [
          "Cableado estructurado",
          "Configuración de equipos",
          "WiFi empresarial",
          "VPN y seguridad",
          "Mantenimiento preventivo",
        ],
      },
    ],
  },
  {
    id: "egmr",
    nombre: "EGMR",
    subtitulo: "Seguridad y Soporte Técnico",
    descripcion:
      "Sistemas de videovigilancia, control de acceso y soporte técnico especializado para empresas en Tijuana y toda Baja California.",
    color: "#14b8a6",
    accentColor: "#2dd4bf",
    servicios: [
      {
        slug: "camaras-videovigilancia",
        titulo: "Cámaras y Videoporteros",
        badge: "Instalación + Mantenimiento",
        resumen:
          "Monitoreo de alta definición y protección de instalaciones con sistemas de vigilancia profesionales.",
        descripcion:
          "Instalamos sistemas de videovigilancia IP y analógica de alta definición para interiores y exteriores, videoporteros inteligentes, DVR/NVR y soluciones de grabación y respaldo. Acceso remoto desde tu celular, tablet o computadora en cualquier momento.",
        icon: "/icons/camaras.png",
        caracteristicas: [
          "Cámaras IP y analógicas HD",
          "Videoporteros inteligentes",
          "Grabación y respaldo en la nube",
          "Acceso remoto desde celular/computadora",
          "Monitoreo en tiempo real 24/7",
          "Instalación profesional",
          "Mantenimiento preventivo y correctivo",
        ],
      },
      {
        slug: "control-acceso",
        titulo: "Control de Acceso",
        badge: "Seguridad por Áreas",
        resumen:
          "Autoriza, restringe y protege accesos a tu negocio con tecnología confiable y escalable.",
        descripcion:
          "Sistemas de control de acceso con tarjetas, huellas digitales, PIN o reconocimiento facial. Lleva un registro detallado de entradas y salidas de tu personal. Soluciones adaptadas a las necesidades específicas de cada cliente.",
        icon: "/icons/control-acceso.png",
        caracteristicas: [
          "Lectores de tarjeta y huella digital",
          "Reconocimiento facial avanzado",
          "Registro de accesos con historial",
          "Control por zonas y áreas",
          "Integración con sistemas existentes",
          "Alertas ante accesos no autorizados",
          "Tecnología escalable y confiable",
        ],
      },
      {
        slug: "soporte-tecnico",
        titulo: "Soporte y Mantenimiento",
        badge: "Remoto + Visitas",
        resumen:
          "Soporte técnico dedicado para resolver problemas con mayor velocidad y eficiencia.",
        descripcion:
          "Soporte técnico remoto inmediato y presencial para computadoras, servidores y equipos de red. Mantenimiento preventivo y correctivo especializado para mantener tu empresa funcionando sin interrupciones.",
        icon: "/icons/soporte.png",
        caracteristicas: [
          "Soporte remoto inmediato",
          "Visitas técnicas programadas",
          "Mantenimiento preventivo",
          "Reparación de equipos",
          "Respuesta rápida garantizada",
          "Equipo técnico especializado",
          "Disponibilidad 24/7",
        ],
      },
      {
        slug: "cableado-estructurado",
        titulo: "Cableado Estructurado",
        badge: "Instalación",
        resumen: "Infraestructura de red física robusta para oficinas y empresas.",
        descripcion:
          "Diseño e instalación de cableado estructurado Categoría 5e, 6 y 6A. Certificación de puntos de red, rack y patch panels para una infraestructura sólida, escalable y profesional.",
        icon: "/icons/internet.png",
        caracteristicas: [
          "Cableado Cat 5e, 6 y 6A",
          "Certificación de puntos de red",
          "Rack y patch panels profesionales",
          "Documentación técnica completa",
          "Garantía de instalación",
          "Infraestructura escalable",
          "Cumplimiento de estándares",
        ],
      },
    ],
  },
];

export function getDivision(id: string): Division | undefined {
  return divisiones.find((d) => d.id === id);
}

export function getServicio(
  divisionId: string,
  slug: string
): Servicio | undefined {
  const div = getDivision(divisionId);
  return div?.servicios.find((s) => s.slug === slug);
}