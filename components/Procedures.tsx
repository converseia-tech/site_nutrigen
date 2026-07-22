import Image from "next/image";
import SideImage from "./SideImage";
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
  ChartLineUp,
  Stethoscope,
} from "@phosphor-icons/react/dist/ssr";

const CARDS = [
  {
    icon: Dna,
    title: "Mapeamento Nutrigenético",
    text: "Identifica variações que orientam escolhas alimentares, suplementação e prevenção.",
    cta: "Solicitar orientação sobre Mapeamento Nutrigenético",
  },
  {
    icon: TestTube,
    title: "Teste de Microbiota",
    text: "Avalia o equilíbrio intestinal, fundamental para digestão, imunidade e metabolismo.",
    cta: "Avaliar minha microbiota",
  },
  {
    icon: ChartLineUp,
    title: "Avaliação Metabólica",
    text: "Leitura do perfil metabólico para direcionar estratégias com mais precisão.",
    cta: "Quero uma avaliação metabólica",
  },
  {
    icon: PersonSimpleRun,
    title: "Bioimpedância",
    text: "Composição corporal para acompanhar evolução e calibrar o plano.",
    cta: "Agendar bioimpedância",
  },
  {
    icon: Pill,
    title: "Suplementação Personalizada",
    text: "Orientação baseada na sua avaliação, sem escolhas aleatórias.",
    cta: "Ver opções de suplementação personalizada",
  },
  {
    icon: Drop,
    title: "Terapias Injetáveis",
    text: "Condutas complementares avaliadas caso a caso, com indicação profissional.",
    cta: "Conversar sobre terapias injetáveis",
  },
  {
    icon: Leaf,
    title: "Nutrição Clínica",
    text: "Planos alimentares coerentes com genética, exames e objetivos reais.",
    cta: "Conhecer a nutrição clínica",
  },
  {
    icon: Stethoscope,
    title: "Nutrologia",
    text: "Abordagem médica integrada à Medicina de Precisão e à longevidade.",
    cta: "Falar sobre nutrologia",
  },
];

export default function Procedures() {
  return (
    <section
      id="testes"
      className="bg-gradient-to-b from-mist via-mist to-white py-14 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col justify-center" stagger>
            <span className="reveal mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
              <span className="h-px w-8 bg-cyan/70" />
              Medicina de Precisão
            </span>
            <h2 className="reveal font-serif text-3xl font-light leading-tight text-dna sm:text-4xl lg:text-[2.9rem]">
              Muito além do teste genético.
            </h2>
            <p className="reveal mt-6 max-w-lg text-base font-medium leading-relaxed text-nutrigen">
              Na NutriGen acreditamos que nenhuma informação deve ser analisada
              isoladamente.
            </p>
            <p className="reveal mt-4 max-w-lg text-base leading-relaxed text-dna/90">
              Por isso, integramos genética com outros recursos para construir
              uma visão completa da sua saúde.
            </p>
          </Reveal>

          <Reveal y={48}>
            <SideImage
              src={ASSETS.precisionMedicine}
              alt="Prática de yoga e bem-estar para saúde integrada"
              quality={96}
              objectPosition="center 30%"
              sizes="(max-width: 1024px) 90vw, 620px"
              matchTextHeight
              className="lg:min-h-[380px]"
            />
          </Reveal>
        </div>

        <Reveal
          className="mt-14 grid grid-cols-1 gap-6 sm:mt-20 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
          stagger
        >
          {CARDS.map(({ icon: Icon, title, text, cta }) => (
            <article
              key={title}
              id={
                title === "Mapeamento Nutrigenético" ? "especialidades" : undefined
              }
              className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-sky/25 bg-clinical p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-card"
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
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-dna/10 to-cyan/15 ring-1 ring-sky/30">
                <Icon size={30} weight="thin" color="#043780" />
              </div>
              <h3 className="relative mt-5 font-serif text-xl font-medium text-dna">
                {title}
              </h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-dna/80">
                {text}
              </p>
              <a
                href={whatsappUrl(`Olá! ${cta} na NutriGen Clinic.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-nutrigen"
              >
                {cta}
                <ArrowRight size={17} weight="bold" />
              </a>
            </article>
          ))}
        </Reveal>

        <Reveal className="mt-14 sm:mt-20" y={56}>
          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-dna/20">
            <SideImage
              src={ASSETS.practices[1]}
              alt="Mulher correndo com fone em cenário ao ar livre"
              quality={94}
              objectPosition="center 45%"
              sizes="(max-width: 1024px) 92vw, 1200px"
              matchTextHeight={false}
              className="aspect-[16/9] min-h-0 rounded-none shadow-none ring-0 sm:aspect-[21/9]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dna/85 via-dna/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-7 py-8 sm:px-12 sm:py-10">
              <p className="font-serif text-xl font-light leading-snug text-white sm:text-2xl lg:text-3xl">
                Onde fazer teste genético em Recife?
              </p>
              <p className="mt-2 max-w-xl text-sm text-white/85">
                Se você procura um teste genético em Recife, a NutriGen
                oferece uma abordagem diferente: não entregamos apenas um
                exame, acompanhamos toda a jornada até o plano personalizado.
              </p>
              <a
                href={whatsappUrl(
                  "Olá! Quero agendar meu teste genético em Recife na NutriGen."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-[12px] font-bold uppercase tracking-[0.06em] text-dna shadow-float transition-transform hover:scale-[1.02]"
              >
                Agendar meu teste genético em Recife
                <ArrowRight size={17} weight="bold" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
