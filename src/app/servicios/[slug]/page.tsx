import { notFound } from "next/navigation";
import ServicioDetalleClient from "./ServicioDetalleClient";

const services = [
  {
    key: "internet",
    titulo: "Internet",
    badge: "Conexión dedicada / simétrica",
    resumen:
      "Internet de alta velocidad para optimizar operaciones y productividad.",
    descripcion:
      "Contrata con nosotros Internet de alta velocidad. Conexión dedicada o simétrica para optimizar tus operaciones, aumentar tu productividad y mejorar la experiencia de navegación.",
    bullets: [
      "Alta velocidad",
      "Conexión dedicada o simétrica",
      "Mejora productividad y navegación",
      "Soporte técnico especializado",
    ],
    icon: "/icons/internet.png",
  },
  {
    key: "camaras",
    titulo: "Cámaras",
    badge: "Videovigilancia + instalación",
    resumen:
      "Monitoreo y protección de instalaciones con sistemas de vigilancia.",
    descripcion:
      "Monitorea tus instalaciones y protege tus activos. Servicio de instalación y mantenimiento de sistemas de vigilancia.",
    bullets: [
      "Instalación profesional",
      "Mantenimiento preventivo",
      "Protección de activos",
      "Soluciones para oficina, negocio o empresa",
    ],
    icon: "/icons/camaras.png",
  },
  {
    key: "acceso",
    titulo: "Control de acceso",
    badge: "Seguridad por áreas",
    resumen: "Autoriza, restringe y protege accesos a tu negocio.",
    descripcion:
      "Autoriza, restringe y protege accesos a empleados, edificio y áreas clave de tu empresa o negocio: inventarios, stock, efectivo, equipo o información.",
    bullets: [
      "Restricción por áreas",
      "Protección de información",
      "Control de entradas y salidas",
      "Mayor seguridad operativa",
    ],
    icon: "/icons/control-acceso.png",
  },
  {
    key: "soporte",
    titulo: "Soporte y mantenimiento",
    badge: "Remoto + visitas programadas",
    resumen:
      "Soporte técnico dedicado para resolver problemas con mayor velocidad.",
    descripcion:
      "Contar con un apoyo de soporte técnico dedicado a tu compañía ayuda a resolver los problemas con mayor velocidad, ya sea vía remota o visitas programadas.",
    bullets: [
      "Soporte remoto",
      "Visitas programadas",
      "Respuesta rápida",
      "Acompañamiento técnico continuo",
    ],
    icon: "/icons/soporte.png",
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.key,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.key === slug);

  if (!service) {
    return {
      title: "Servicio no encontrado | EGMR GROUP",
    };
  }

  return {
    title: `${service.titulo} | EGMR GROUP`,
    description: service.resumen,
  };
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.key === slug);

  if (!service) return notFound();

  return <ServicioDetalleClient service={service} services={services} />;
}