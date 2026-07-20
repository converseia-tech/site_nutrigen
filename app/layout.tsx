import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

// Fonte geométrica arredondada alinhada ao manual de marca NutriGen
// (equivalente livre à All Round Gothic Book usada no logotipo).
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
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

const GTM_ID = "GTM-KMXHZWH8";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={quicksand.variable}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
