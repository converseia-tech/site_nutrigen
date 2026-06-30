import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

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
  title: "Mapeamento Genético em Recife | NutriGen",
  description:
    "Mapeamento genético em Recife para nutrição de precisão, saúde e longevidade. Fale com a NutriGen e agende sua avaliação.",
  keywords: [
    "mapeamento genético em Recife",
    "teste nutrigenético Recife",
    "nutrição de precisão Recife",
    "NutriGen Clinic",
    "longevidade Recife",
  ],
  icons: {
    icon: "/novas_logos/logo_azul_comtextonocentro_fundotransparente.png",
  },
  openGraph: {
    title: "Mapeamento Genético em Recife | NutriGen",
    description:
      "Mapeamento genético em Recife para nutrição de precisão, saúde e longevidade. Fale com a NutriGen e agende sua avaliação.",
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
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
