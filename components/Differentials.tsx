import Reveal from "./Reveal";
import WhatsAppCTA from "./WhatsAppCTA";
import SideImage from "./SideImage";
import { ASSETS } from "@/lib/site";
import {
  BowlFood,
  ChartLineUp,
  ClipboardText,
  Dna,
  Fire,
  Heartbeat,
  PersonSimpleRun,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

const ORIENTATIONS = [
  { icon: BowlFood, label: "alimentação" },
  { icon: ClipboardText, label: "suplementação" },
  { icon: Heartbeat, label: "vitaminas" },
  { icon: Fire, label: "emagrecimento" },
  { icon: PersonSimpleRun, label: "performance" },
  { icon: ShieldCheck, label: "longevidade" },
  { icon: ChartLineUp, label: "prevenção" },
];

const DIFFERENTIALS = [
  {
    icon: Dna,
    title: "Interpretação profissional",
    text: "O teste genético sozinho não muda sua saúde. O que faz diferença é saber interpretar essas informações com critério clínico.",
  },
  {
    icon: ChartLineUp,
    title: "Visão integrada",
    text: "Cruzamos genética, exames laboratoriais, microbiota intestinal, composição corporal e histórico clínico.",
  },
  {
    icon: ClipboardText,
    title: "Estratégia personalizada",
    text: "Cada resultado vira orientação prática, alinhada aos seus objetivos e à sua rotina real.",
  },
];

export default function Differentials() {
  return (
    <section className="bg-mist py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center" stagger>
          <span className="reveal mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            O diferencial da NutriGen
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-tight text-dna sm:text-4xl lg:text-[2.9rem]">
            O teste genético sozinho não muda sua saúde.
          </h2>
          <p className="reveal mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-nutrigen">
            O que faz diferença é saber interpretar essas informações.
          </p>
        </Reveal>

        <Reveal
          className="mt-12 grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr]"
          y={48}
        >
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-sky/40 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan shadow-sm">
              Interpretação clínica
            </span>
            <h3 className="font-serif text-3xl font-light leading-tight text-dna sm:text-4xl">
              Dados + contexto = decisões claras
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-dna/90">
              Na NutriGen, cada resultado é analisado por profissionais
              especializados que integram genética, exames laboratoriais,
              microbiota intestinal, composição corporal e histórico clínico
              para construir uma estratégia personalizada.
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-cyan">
              Você recebe orientação prática sobre:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {ORIENTATIONS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-white px-3.5 py-1.5 text-sm font-medium capitalize text-dna shadow-sm"
                >
                  <Icon size={16} weight="bold" color="#009CD9" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-full min-h-[280px] lg:min-h-[360px]">
            <SideImage
              src={ASSETS.reportPreview}
              alt="Relatório NutriGen com painéis de saúde metabólica, intestinal e imunológica"
              quality={95}
              objectPosition="center"
              sizes="(max-width: 1024px) 92vw, 680px"
              matchTextHeight
              className="h-full min-h-[280px] lg:min-h-full"
            />
          </div>
        </Reveal>

        <Reveal className="mt-12 grid gap-6 md:grid-cols-3" stagger>
          {DIFFERENTIALS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="reveal rounded-2xl border border-sky/25 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-dna/10 to-cyan/15 ring-1 ring-sky/30">
                <Icon size={30} weight="thin" color="#043780" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-medium text-dna">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dna/80">{text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className="mt-10 text-center" y={28}>
          <WhatsAppCTA
            align="center"
            label="Escolher um cuidado guiado por dados"
            message="Olá! Quero um cuidado guiado por dados e interpretação profissional na NutriGen."
          />
        </Reveal>
      </div>
    </section>
  );
}
