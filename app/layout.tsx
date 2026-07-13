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
  title: "Teste Genético em Recife | NutriGen Clinic",
  description:
    "Teste genético em Recife com interpretação profissional. Nutrição baseada em genética, Medicina de Precisão, emagrecimento, suplementação e longevidade na NutriGen.",
  keywords: [
    "teste genético em Recife",
    "onde fazer teste genético em Recife",
    "teste nutrigenético em Recife",
    "mapeamento genético em Recife",
    "exame genético para emagrecimento",
    "teste genético para alimentação",
    "Medicina de Precisão em Recife",
    "clínica de genética em Recife",
    "teste nutrigenético",
    "nutrição personalizada",
    "NutriGen Clinic",
  ],
  icons: {
    icon: "/novas_logos/logo_azul_comtextonocentro_fundotransparente.png",
  },
  openGraph: {
    title: "Teste Genético em Recife | NutriGen Clinic",
    description:
      "Entenda o que seu DNA revela sobre alimentação, metabolismo e longevidade. Agende sua avaliação na NutriGen.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#043780",
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
