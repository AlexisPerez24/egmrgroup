import HomePage from './home/page';  // Importa la nueva página de inicio

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
      <body>
        {/* Aquí estamos renderizando la nueva página de inicio */}
        <HomePage />
      </body>
    </html>
  );
}