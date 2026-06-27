import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NutriGen Clinic | Medicina de Precisão & Longevidade",
  description:
    "A ciência da sua genética a serviço da sua longevidade. Mapeamento de DNA e protocolos de saúde ultra personalizados em Recife.",
  icons: {
    icon: "/apenas_logo_nutrigen.jpg",
  },
  openGraph: {
    title: "NutriGen Clinic | Medicina de Precisão & Longevidade",
    description:
      "Decodificamos seus biomarcadores para desenhar um estilo de vida sob medida através da epigenética.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#087BB8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
