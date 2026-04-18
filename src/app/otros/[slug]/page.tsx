import { notFound } from "next/navigation";
import OtroServicioDetalleClient from "./OtroServicioDetalleClient";

const otrosServicios = [
  {
    key: "cableado",
    titulo: "Instalación de cableado estructurado",
    badge: "Infraestructura de red",
    resumen: "Infraestructura de red organizada y lista para crecer.",
    descripcion:
      "Diseñamos e instalamos cableado estructurado para oficinas, negocios y empresas, asegurando orden, escalabilidad y mejor desempeño en tu red.",
    bullets: [
      "Instalación profesional",
      "Organización de infraestructura",
      "Preparado para crecimiento",
      "Soporte y mantenimiento",
    ],
    icon: "/icons/cableado.png",
  },
  {
    key: "paneles-solares",
    titulo: "Paneles solares",
    badge: "Eficiencia energética",
    resumen: "Soluciones energéticas para eficiencia y ahorro.",
    descripcion:
      "Implementamos soluciones con paneles solares para ayudarte a reducir costos energéticos y mejorar la eficiencia operativa de tu negocio.",
    bullets: [
      "Ahorro energético",
      "Soluciones escalables",
      "Instalación especializada",
      "Asesoría para tu proyecto",
    ],
    icon: "/icons/paneles-solares.png",
  },
  {
    key: "incendios",
    titulo: "Sistemas de incendios",
    badge: "Prevención y seguridad",
    resumen: "Prevención, instalación y soporte de sistemas de seguridad.",
    descripcion:
      "Instalamos y damos soporte a sistemas de incendios para reforzar la seguridad de tus instalaciones y proteger a tu personal y activos.",
    bullets: [
      "Prevención de riesgos",
      "Instalación especializada",
      "Soporte técnico",
      "Protección de instalaciones",
    ],
    icon: "/icons/incendios.png",
  },
  {
    key: "papeleria",
    titulo: "Papelería y equipo de oficina",
    badge: "Suministros y equipos",
    resumen: "Todo lo necesario para tu oficina, desde insumos hasta equipos.",
    descripcion:
      "Ofrecemos un amplio catálogo de papelería y equipos de oficina para asegurar que tu empresa tenga todo lo indispensable para su operación diaria.",
    bullets: [
      "Amplia variedad de productos",
      "Entrega a domicilio",
      "Asesoría personalizada",
      "Precios competitivos",
    ],
    icon: "/icons/papeleria.png",
    catalogLink: "/catalogos/catalogo-papeleria.pdf", // ¡NUEVO! Define aquí la URL de tu catálogo
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return otrosServicios.map((item) => ({
    slug: item.key,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = otrosServicios.find((s) => s.key === slug);

  if (!item) {
    return {
      title: "Servicio no encontrado | EGMR GROUP",
    };
  }

  return {
    title: `${item.titulo} | EGMR GROUP`,
    description: item.resumen,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = otrosServicios.find((s) => s.key === slug);

  if (!item) return notFound();

  return (
    <OtroServicioDetalleClient
      service={item}
      services={otrosServicios}
    />
  );
}