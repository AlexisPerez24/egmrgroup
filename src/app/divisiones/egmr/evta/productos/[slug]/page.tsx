import { notFound } from "next/navigation";
import ProductoDetalleClient from "./ProductoDetalleClient";

export const productos = [
  {
    key: "computo",
    titulo: "Equipos de Cómputo",
    badge: "Laptops + Desktops",
    tipo: "venta",
    resumen: "Equipos de cómputo para oficina y negocio de las mejores marcas del mercado.",
    descripcion:
      "Vendemos laptops y desktops de marcas confiables para equipar tu oficina o negocio. Asesoría personalizada para elegir el equipo ideal según tus necesidades y presupuesto.",
    bullets: [
      "Laptops y desktops nuevos",
      "Marcas confiables y con garantía",
      "Asesoría personalizada",
      "Entrega e instalación incluida",
    ],
    icono: "💻",
  },
  {
    key: "papeleria",
    titulo: "Papelería",
    badge: "Material de oficina",
    tipo: "venta",
    resumen: "Artículos de papelería y material de oficina para tu día a día.",
    descripcion:
      "Contamos con un amplio catálogo de artículos de papelería y material de oficina. Desde lo más básico hasta material especializado, con entregas a domicilio y precios competitivos.",
    bullets: [
      "Amplio catálogo disponible",
      "Entregas a domicilio",
      "Precios competitivos",
      "Pedidos por WhatsApp",
    ],
    icono: "📦",
  },
  {
    key: "accesorios",
    titulo: "Accesorios y Consumibles",
    badge: "Teclados · Tintas · Tóner",
    tipo: "venta",
    resumen: "Teclados, ratones, tintas, tóner y accesorios compatibles con todas las marcas.",
    descripcion:
      "Encuentra los accesorios y consumibles que necesitas: teclados, ratones, tintas, tóner y más. Contamos con opciones originales y compatibles garantizadas para las principales marcas.",
    bullets: [
      "Consumibles originales y compatibles",
      "Teclados, ratones y más",
      "Tintas y tóner garantizados",
      "Entrega rápida",
    ],
    icono: "🖱️",
  },
  {
    key: "impresoras",
    titulo: "Renta de Impresoras",
    badge: "Renta mensual",
    tipo: "renta",
    resumen: "Renta mensual de impresoras para oficina con mantenimiento preventivo incluido.",
    descripcion:
      "Renta impresoras para tu oficina sin inversión inicial. Incluye mantenimiento preventivo, soporte técnico y reemplazo de equipo en caso de falla. Ideal para empresas que buscan reducir costos.",
    bullets: [
      "Sin inversión inicial",
      "Mantenimiento preventivo incluido",
      "Soporte técnico dedicado",
      "Reemplazo de equipo en falla",
    ],
    icono: "🖨️",
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return productos.map((p) => ({ slug: p.key }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const producto = productos.find((p) => p.key === slug);
  if (!producto) return { title: "Producto no encontrado | EVTA" };
  return {
    title: `${producto.titulo} | EVTA`,
    description: producto.resumen,
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const producto = productos.find((p) => p.key === slug);
  if (!producto) return notFound();
  return <ProductoDetalleClient producto={producto} productos={productos} />;
}
