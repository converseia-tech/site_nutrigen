// Central configuration: assets, contact data and navigation.
// Asset filenames are mapped to the real files present in /public.

export const ASSETS = {
  logoColor: "/NutriGen_Clinic_Principal.png", // header (fundo claro)
  logoWhite: "/NutriGen_Clinic_Negativa_Branca.png", // footer (fundo escuro)
  symbol: "/apenas_logo_nutrigen.jpg", // favicon / marca d'água
  hero: "/active-senior-woman-smiling-after-workout.jpg",
  manifesto: "/amazing-strong-young-sports-woman-make-sports-stretching-exercises.jpg",
  gallery: [
    "/woman_reflex_exerciced.jpg.avif",
    "/woman_exercite.png",
    "/woan_exercite.jpg",
    "/sporty-senior-woman-with-short-hair-front-view.jpg",
  ],
} as const;

// Placeholder VIP WhatsApp — substitua pelo número real da clínica.
export const WHATSAPP_URL =
  "https://wa.me/5581999999999?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20Assessor%20de%20Jornada%20de%20Sa%C3%BAde%20da%20NutriGen%20Clinic.";

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
