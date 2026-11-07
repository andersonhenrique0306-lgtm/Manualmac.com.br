import "./globals.css";

export const metadata = {
  title: "MANUALMAC | Biblioteca técnica digital",
  description: "Manuais de serviço, catálogos de peças e documentação técnica para veículos e máquinas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
