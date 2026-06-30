import Reveal from "./Reveal";
import WhatsAppCTA from "./WhatsAppCTA";
import ParallaxImage from "./ParallaxImage";
import { ASSETS } from "@/lib/site";
import {
  Dna,
  ChartLineUp,
  ClipboardText,
  Heartbeat,
  Target,
} from "@phosphor-icons/react/dist/ssr";

const DIFFERENTIALS = [
  {
    icon: Dna,
    title: "Nutrição e Nutrologia Baseada em Genética",
    text: "Utilizamos testes genéticos e nutrigenéticos para que nossas estratégias sejam guiadas pelo seu DNA.",
  },
  {
    icon: ChartLineUp,
    title: "Avaliação Metabólica Completa",
    text: "Análise detalhada do seu perfil metabólico e nutricional para direcionar escolhas mais precisas.",
  },
  {
    icon: Target,
    title: "Programas de Emagrecimento Personalizados",
    text: "Estratégias alimentares e infusionais construídas de acordo com seu metabolismo, estilo de vida e objetivos.",
  },
  {
    icon: Heartbeat,
    title: "Otimização de Micronutrientes",
    text: "Avaliação e correção de possíveis deficiências nutricionais com orientação profissional.",
  },
  {
    icon: ClipboardText,
    title: "Acompanhamento Estratégico",
    text: "Monitoramento contínuo para garantir evolução real, sustentável e alinhada ao seu plano.",
  },
];

export default function Differentials() {
  return (
    <section className="bg-mist py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center" stagger>
          <span className="reveal mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            Diferenciais
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-tight text-nutrigen sm:text-4xl lg:text-[2.9rem]">
            Por que escolher a NutriGen?
          </h2>
        </Reveal>

        <Reveal className="mt-12 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]" y={48}>
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky/35 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-sky shadow-sm">
              Relatório interpretado
            </span>
            <h3 className="font-serif text-3xl font-light leading-tight text-dna sm:text-4xl">
              Seus dados precisam virar decisões simples para a rotina
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-dna/78">
              O diferencial da NutriGen não é apenas solicitar testes. A equipe
              organiza as informações em uma leitura clara para orientar
              alimentação, suplementação, metabolismo e acompanhamento.
            </p>
          </div>

          <ParallaxImage
            src={ASSETS.reportPreview}
            alt="Relatório NutriGen com painéis de saúde metabólica, intestinal e imunológica"
            quality={95}
            objectPosition="center"
            sizes="(max-width: 1024px) 92vw, 680px"
            className="aspect-[16/9] rounded-[2rem] shadow-card ring-1 ring-softgray/70"
          />
        </Reveal>

        <Reveal className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger>
          {DIFFERENTIALS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="reveal rounded-2xl border border-softgray bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky hover:shadow-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky/15 ring-1 ring-sky/30">
                <Icon size={30} weight="thin" color="#087BB8" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-medium text-dna">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dna/75">{text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className="mt-10 text-center" y={28}>
          <WhatsAppCTA
            align="center"
            label="Escolher um cuidado guiado por dados"
            message="Olá! Quero escolher um cuidado guiado por dados na NutriGen Clinic."
          />
        </Reveal>
      </div>
    </section>
  );
}
