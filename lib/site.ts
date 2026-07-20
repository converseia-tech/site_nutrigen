// Central configuration: assets, contact data and navigation.
// Asset filenames are mapped to the real files present in /public.

export const ASSETS = {
  logoColor:
    "/novas_logos/Logo_azul__texto_preto_NutriGen-lateral-comnome-fundotransparente.png",
  logoWhite: "/novas_logos/logo_branca_comtextobrancolateral_fundotransbranco.png",
  symbol: "/novas_logos/logo_azul_comtextonocentro_fundotransparente.png",
  // JPG de alta resolução (mesma cena do webp antigo, maior nitidez)
  hero: "/novasimagens/mulher_se_esticando_vidasaudavel_excelenteprahero.jpg",
  // PNG premium com top azul alinhado à identidade
  manifesto: "/novasimagens/parte_2/mulher_rindo_correndo.png",
  geneticMapping: "/mapeamento_genetico.jpg",
  reportPreview: "/novasimagens/imagem_prontuario_nutrigen.png",
  // WebP otimizado de alta qualidade (performance / manifesto)
  productFood: "/optimized/manifesto-performance.webp",
  // Performance/treino — sem rosto em evidência
  productExercise: "/novasimagens/mulher_praticando_yoga_sem_aparecer_o_rosto.webp",
  // Longevidade e vitalidade — retrato de alta resolução
  longevity: "/active-senior-woman-smiling-after-workout.jpg",
  // Medicina de Precisão — imagem lateral fixa
  precisionMedicine: "/novasimagens/yoga-bem-estar.webp",
  practices: [
    "/novasimagens/parte_2/mulher_fitness_se_exercitando.png",
    "/novasimagens/corrida-praia.webp",
    "/optimized/manifesto-performance.webp",
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
  hours: "Segunda a Sexta: 08h às 17h",
  hoursStructured: "Mo-Fr 08:00-17:00, Sa 08:00-12:00",
  areaServed:
    "Recife, Boa Vista, Derby, Graças, Espinheiro, Ilha do Leite, Casa Forte, Boa Viagem",
  mapsQuery:
    "R. Dom B%C3%B4sco, 961 - Boa Vista, Recife - PE, 50070-070",
} as const;

export const NAV_LINKS = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Teste Genético", href: "#produto" },
  { label: "Serviços", href: "#testes" },
  { label: "Contato", href: "#agendamento" },
] as const;

export const FAQS = [
  {
    question: "Quanto custa um teste genético em Recife?",
    answer:
      "O investimento depende do tipo de análise indicada para cada objetivo. Durante a avaliação inicial, nossa equipe apresenta a melhor opção para seu caso.",
  },
  {
    question: "O teste genético substitui uma consulta?",
    answer:
      "Não. O exame complementa a avaliação clínica e torna as decisões muito mais personalizadas.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "Em média, os resultados ficam disponíveis entre 20 e 30 dias, conforme o exame realizado.",
  },
  {
    question: "O teste precisa ser repetido?",
    answer:
      "Não. Seu DNA permanece o mesmo ao longo da vida. Novas interpretações podem ser feitas conforme a evolução da ciência e dos seus objetivos.",
  },
  {
    question: "O teste é indicado apenas para emagrecimento?",
    answer:
      "Não. Também auxilia decisões relacionadas à suplementação, metabolismo, prevenção, longevidade, saúde intestinal e qualidade de vida.",
  },
  {
    question: "A NutriGen atende apenas em Recife?",
    answer:
      "Sim. A Nutrigen realiza atendimento presencial no Aterar resposta para: Recife, no Polo Médico da cidade, com profissionais especializados em Medicina de Precisão. Nossa clínica está localizada na Boa Vista, em uma região central e de fácil acesso para pacientes da Zona Norte, Zona Sul e demais regiões metropolitanas.",
  },
] as const;
