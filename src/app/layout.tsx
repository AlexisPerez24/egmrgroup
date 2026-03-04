import "./globals.css";

export const metadata = {
  title: "EGMR GROUP",
  description: "Soluciones Tecnológicas Integrales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}