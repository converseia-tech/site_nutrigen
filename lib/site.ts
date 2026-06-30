// Central configuration: assets, contact data and navigation.
// Asset filenames are mapped to the real files present in /public.

export const ASSETS = {
  logoColor:
    "/novas_logos/Logo_azul__texto_preto_NutriGen-lateral-comnome-fundotransparente.png",
  logoWhite: "/novas_logos/logo_branca_comtextobrancolateral_fundotransbranco.png",
  symbol: "/novas_logos/logo_azul_comtextonocentro_fundotransparente.png",
  hero: "/novasimagens/hero-saude.webp",
  manifesto: "/novasimagens/parte_2/mulher_rindo_correndo.png",
  geneticMapping: "/mapeamento_genetico.jpg", // hélice de DNA mantida conforme solicitado
  interpretation: "/novasimagens/vida-saudavel-paz.webp",
  reportPreview: "/novasimagens/imagem_prontuario_nutrigen.png",
  productFood: "/novasimagens/mulher_fitness_cortando_frutas.webp",
  productExercise: "/novasimagens/parte_2/mulher_fitness_se_exercitando.png",
  practices: [
    "/novasimagens/mulher_praticando_yoga_sem_aparecer_o_rosto.webp",
    "/novasimagens/corrida-praia.webp",
  ],
} as const;

export const PHONE_DISPLAY = "(81) 97112-1080";
export const PHONE_E164 = "+5581971121080";

export function whatsappUrl(message: string) {
  return `https://wa.me/5581971121080?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl(
  "Olá! Gostaria de falar com um consultor da NutriGen Clinic."
);

export const PATIENT_AREA_URL = "#agendamento";

export const CONTACT = {
  address: "R. Dom Bôsco, 961 - 3º andar - Boa Vista, Recife - PE, 50070-070",
  hours: "Segunda a Sexta: 08h às 17h | Sábados: 08h às 12h",
  hoursStructured: "Mo-Fr 08:00-17:00, Sa 08:00-12:00",
  areaServed:
    "Recife, Boa Vista, Derby, Graças, Espinheiro, Ilha do Leite, Casa Forte, Boa Viagem",
  mapsQuery:
    "R. Dom B%C3%B4sco, 961 - Boa Vista, Recife - PE, 50070-070",
} as const;

export const NAV_LINKS = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "O Teste", href: "#produto" },
  { label: "Serviços", href: "#testes" },
  { label: "Contato", href: "#agendamento" },
] as const;

export const FAQS = [
  {
    question: "Quanto custa o atendimento na NutriGen Clinic?",
    answer:
      "O valor pode variar conforme a avaliação, testes indicados e tipo de protocolo necessário. O melhor caminho é falar com um consultor para entender sua necessidade e receber a orientação correta.",
  },
  {
    question: "O teste genético substitui uma consulta?",
    answer:
      "Não. O teste é uma ferramenta de análise. A consulta e a interpretação profissional são essenciais para transformar os dados em um plano seguro, claro e aplicável.",
  },
  {
    question: "Em quanto tempo recebo meu protocolo?",
    answer:
      "O prazo depende dos testes solicitados e da análise necessária. Durante o atendimento, a equipe explica cada etapa e informa os próximos passos.",
  },
  {
    question: "Preciso estar doente para fazer o mapeamento genético?",
    answer:
      "Não. Muitas pessoas procuram a NutriGen para prevenção, longevidade, performance, qualidade de vida e decisões mais inteligentes sobre saúde.",
  },
  {
    question: "A NutriGen atende apenas emagrecimento?",
    answer:
      "Não. O foco é saúde personalizada. Emagrecimento pode fazer parte da jornada, mas a proposta principal é entender o corpo e construir um plano mais preciso.",
  },
  {
    question: "O atendimento é em Recife?",
    answer:
      "Sim. A NutriGen Clinic atende em Boa Vista, Recife, com fácil acesso para regiões como Derby, Graças, Espinheiro, Ilha do Leite, Casa Forte e Boa Viagem.",
  },
  {
    question: "Existe garantia de resultado?",
    answer:
      "Na área da saúde, não é correto prometer resultado igual para todos. O compromisso da NutriGen é oferecer uma avaliação individualizada, orientação responsável e acompanhamento baseado em dados.",
  },
] as const;
