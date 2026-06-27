// Central configuration: assets, contact data and navigation.
// Asset filenames are mapped to the real files present in /public.

export const ASSETS = {
  logoColor: "/optimized/logo-color.webp", // header (fundo claro)
  logoWhite: "/optimized/logo-white.webp", // footer (fundo escuro)
  symbol: "/apenas_logo_nutrigen.jpg", // favicon / marca d'água
  hero: "/optimized/hero-longevidade.webp",
  manifesto: "/optimized/manifesto-performance.webp",
  geneticMapping: "/optimized/mapeamento-genetico.webp", // hélice de DNA
  practices: [
    "/woman_reflex_exerciced.jpg.avif",
    "/woman_exercite.png",
  ],
} as const;

// WhatsApp VIP da clínica (Recife) - 55 + DDD 81 + número.
export const WHATSAPP_URL =
  "https://wa.me/5581971121080?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20Assessor%20de%20Jornada%20de%20Sa%C3%BAde%20da%20NutriGen%20Clinic.";

export const PATIENT_AREA_URL = "#agendamento";

export const CONTACT = {
  address: "R. Dom Bôsco, 961 - 3º andar - Boa Vista, Recife - PE, 50070-070",
  hours: "Segunda a Sexta: 08h às 17h | Sábados: 08h às 12h",
  mapsQuery:
    "R. Dom B%C3%B4sco, 961 - Boa Vista, Recife - PE, 50070-070",
} as const;

export const NAV_LINKS = [
  { label: "O Método", href: "#metodo" },
  { label: "Protocolo DNA", href: "#protocolo" },
  { label: "Práticas de Longevidade", href: "#praticas" },
  { label: "Prova Científica", href: "#prova" },
] as const;
