import Image from "next/image";
import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import { ASSETS, whatsappUrl } from "@/lib/site";
import {
  ArrowRight,
  Dna,
  Drop,
  Leaf,
  Pill,
  PersonSimpleRun,
  TestTube,
  Virus,
} from "@phosphor-icons/react/dist/ssr";

const CARDS = [
  {
    icon: Dna,
    title: "Mapeamento Nutrigenético",
    text: "Identifica variações que podem orientar escolhas alimentares, suplementação e prevenção.",
    cta: "Solicitar orientação sobre Mapeamento Nutrigenético",
  },
  {
    icon: TestTube,
    title: "Teste Nutrigenético",
    text: "Analisa como seus genes influenciam a resposta aos alimentos e nutrientes.",
    cta: "Quero fazer meu teste nutrigenético",
  },
  {
    icon: Virus,
    title: "Teste de Microbioma",
    text: "Avalia o equilíbrio das bactérias intestinais, fundamentais para digestão, imunidade e metabolismo.",
    cta: "Avaliar meu microbioma",
  },
  {
    icon: Leaf,
    title: "Teste de Hipersensibilidade Alimentar",
    text: "Identifica possíveis reações alimentares que podem impactar o organismo de forma silenciosa.",
    cta: "Avaliar hipersensibilidade alimentar",
  },
  {
    icon: Drop,
    title: "Terapias Injetáveis",
    text: "Condutas complementares avaliadas caso a caso e alinhadas à indicação profissional.",
    cta: "Conversar sobre terapias injetáveis",
  },
  {
    icon: Pill,
    title: "Suplementação Personalizada",
    text: "Orientação de suplementação baseada na sua avaliação, evitando escolhas aleatórias ou excesso de produtos sem direção.",
    cta: "Ver opções de suplementação personalizada",
  },
  {
    icon: PersonSimpleRun,
    title: "Protocolo de Longevidade",
    text: "Estratégias para envelhecer com mais energia, autonomia e qualidade de vida.",
    cta: "Iniciar protocolo de longevidade",
  },
  {
    icon: Leaf,
    title: "NutriGen Foods",
    text: "Linha de programas alimentares funcionais que chegam até a sua casa, oferecendo soluções nutricionais para apoiar sua rotina.",
    cta: "Conhecer NutriGen Foods",
  },
];

export default function Procedures() {
  return (
    <section
      id="testes"
      className="bg-gradient-to-b from-mist via-mist to-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal stagger>
            <span className="reveal mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
              <span className="h-px w-8 bg-cyan/60" />
              Serviços
            </span>
            <h2 className="reveal font-serif text-3xl font-light leading-tight text-nutrigen sm:text-4xl lg:text-[2.9rem]">
              Testes e protocolos para diferentes objetivos
            </h2>
            <p className="reveal mt-6 max-w-lg text-base leading-relaxed text-dna/80">
              Cada serviço entra quando faz sentido para seu caso, com indicação
              profissional e leitura integrada dos dados.
            </p>
          </Reveal>

          <Reveal y={48}>
            <ParallaxImage
              src={ASSETS.practices[0]}
              alt="Mulher praticando yoga em rotina de bem-estar"
              quality={94}
              objectPosition="center 55%"
              sizes="(max-width: 1024px) 90vw, 620px"
              className="aspect-[16/10] rounded-[2rem] shadow-card ring-1 ring-softgray/60 lg:aspect-[3/2]"
            />
          </Reveal>
        </div>

        <Reveal
          className="mt-14 grid grid-cols-1 gap-6 sm:mt-20 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          stagger
        >
          {CARDS.map(({ icon: Icon, title, text, cta }) => (
            <article
              key={title}
              id={title === "Mapeamento Nutrigenético" ? "especialidades" : undefined}
              className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-softgray bg-clinical p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <Image
                src={ASSETS.logoColor}
                alt=""
                aria-hidden
                width={160}
                height={160}
                quality={70}
                sizes="128px"
                className="pointer-events-none absolute -right-8 -top-8 w-32 opacity-[0.06]"
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-sky/15 ring-1 ring-sky/30">
                <Icon size={32} weight="thin" color="#087BB8" />
              </div>
              <h3 className="relative mt-6 font-serif text-2xl font-medium text-dna">
                {title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-dna/75">
                {text}
              </p>
              <a
                href={whatsappUrl(`Olá! ${cta} na NutriGen Clinic.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-nutrigen"
              >
                {cta}
                <ArrowRight size={17} weight="bold" />
              </a>
            </article>
          ))}
        </Reveal>

        <Reveal className="mt-14 sm:mt-20" y={56}>
          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-softgray/60">
            <ParallaxImage
              src={ASSETS.practices[1]}
              alt="Mulher correndo com fone em cenário ao ar livre"
              quality={94}
              objectPosition="center 45%"
              sizes="(max-width: 1024px) 92vw, 1200px"
              className="aspect-[16/9] sm:aspect-[21/9]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dna/80 via-dna/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-7 py-8 sm:px-12 sm:py-10">
              <p className="font-serif text-xl font-light leading-snug text-white sm:text-2xl lg:text-3xl">
                Comece por dados. Evolua com acompanhamento.
              </p>
              <p className="mt-2 max-w-md text-sm text-white/80">
                A equipe orienta cada etapa com clareza, responsabilidade e foco em qualidade de vida.
              </p>
              <a
                href={whatsappUrl("Olá! Quero mais informações sobre os serviços da NutriGen Clinic.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-[12px] font-bold uppercase tracking-[0.06em] text-nutrigen shadow-float transition-transform hover:scale-[1.02]"
              >
                Quero mais informações
                <ArrowRight size={17} weight="bold" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
