import Reveal from "./Reveal";
import WhatsAppCTA from "./WhatsAppCTA";
import {
  CalendarCheck,
  ChartLineUp,
  ClipboardText,
  Dna,
  Drop,
  FileText,
} from "@phosphor-icons/react/dist/ssr";

const PILLARS = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Agendamento da avaliação",
    text: "Entendemos seus objetivos e definimos os exames necessários.",
  },
  {
    icon: Drop,
    step: "02",
    title: "Coleta",
    text: "A coleta é simples, rápida e indolor.",
  },
  {
    icon: ChartLineUp,
    step: "03",
    title: "Análise Laboratorial",
    text: "Seu material é analisado em laboratório especializado.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Interpretação Clínica",
    text: "A equipe da NutriGen interpreta os resultados.",
  },
  {
    icon: ClipboardText,
    step: "05",
    title: "Plano Personalizado",
    text: "Você recebe orientações adaptadas ao seu perfil biológico.",
  },
];

export default function Method() {
  return (
    <section
      id="metodo"
      className="bg-gradient-to-b from-white via-white to-mist py-14 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center" stagger>
          <span className="reveal mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            <Dna size={18} weight="thin" color="#009CD9" />
            Como funciona
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-tight text-dna sm:text-4xl lg:text-[2.9rem]">
            COMO É FEITO O TESTE NUTRIGENÉTICO NA NUTRIGEN?
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-nutrigen">
            Um processo claro, da avaliação inicial ao plano personalizado,
            com interpretação profissional em cada etapa.
          </p>
        </Reveal>

        <Reveal
          className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-5"
          stagger
        >
          {PILLARS.map(({ icon: Icon, step, title, text }) => (
            <article
              key={step}
              className="reveal group relative flex flex-col rounded-2xl border border-sky/25 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-card"
            >
              <span className="font-serif text-4xl font-light text-sky/70">
                {step}
              </span>
              <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-dna/10 to-cyan/15 ring-1 ring-sky/30">
                <Icon size={28} weight="thin" color="#043780" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-medium text-dna">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dna/80">{text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className="mt-10 text-center" y={28}>
          <WhatsAppCTA
            align="center"
            label="Agendar minha avaliação inicial"
            message="Olá! Quero agendar minha avaliação de teste genético na NutriGen Clinic."
          />
        </Reveal>
      </div>
    </section>
  );
}
