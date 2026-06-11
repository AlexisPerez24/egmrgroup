import { notFound } from "next/navigation";
import DedicatedDetalleClient from "./DedicatedDetalleClient";

const servicios = [
  {
    key: "internet-dedicado",
    titulo: "Internet Dedicado",
    badge: "Simétrico Empresarial",
    resumen: "Alta velocidad, conexión estable 24/7 y soporte especializado.",
    descripcion:
      "Internet dedicado simétrico para empresas: misma velocidad de subida y bajada. Sin límites de datos, sin interrupciones. Contamos con soporte técnico especializado y tiempos de respuesta garantizados.",
    bullets: [
      "Velocidad simétrica garantizada",
      "Conexión estable 24/7",
      "Soporte técnico especializado",
      "SLA garantizado",
      "Sin límite de datos",
    ],
    icon: "/icons/internet.png",
  },
  {
    key: "soporte-red",
    titulo: "Soporte de Red",
    badge: "Empresarial",
    resumen: "Instalación, configuración y mantenimiento de redes para empresas.",
    descripcion:
      "Diseñamos, instalamos y mantenemos la infraestructura de red de tu empresa. Cableado estructurado, configuración de routers, switches y puntos de acceso WiFi empresarial.",
    bullets: [
      "Cableado estructurado",
      "Configuración de equipos de red",
      "WiFi empresarial",
      "VPN y seguridad",
      "Mantenimiento preventivo",
    ],
    icon: "/icons/internet.png",
  },
];

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.key }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.key === slug);
  if (!servicio) return { title: "Servicio no encontrado | dEdicaTEd Services" };
  return {
    title: `${servicio.titulo} | dEdicaTEd Services`,
    description: servicio.resumen,
  };
}

export default async function DedicatedServicioPage({ params }: Props) {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.key === slug);
  if (!servicio) return notFound();
  return <DedicatedDetalleClient service={servicio} services={servicios} />;
}
