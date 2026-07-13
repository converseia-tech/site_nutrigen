import SideImage from "./SideImage";
import Reveal from "./Reveal";
import WhatsAppCTA from "./WhatsAppCTA";
import { ASSETS } from "@/lib/site";
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

const HIGHLIGHTS = [
  "Metabolismo",
  "Nutrientes",
  "Hábitos",
  "Intestino",
  "Longevidade",
];

export default function Method() {
  return (
    <section
      id="metodo"
      className="bg-gradient-to-b from-white via-white to-mist py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center" stagger>
          <span className="reveal mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            <Dna size={18} weight="thin" color="#009CD9" />
            Como funciona
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-tight text-dna sm:text-4xl lg:text-[2.9rem]">
            Como funciona o teste genético na NutriGen?
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-nutrigen">
            Um processo claro, da avaliação inicial ao plano personalizado —
            com interpretação profissional em cada etapa.
          </p>
        </Reveal>

        <Reveal className="mt-12 sm:mt-16" y={56}>
          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-dna/30">
            <SideImage
              src={ASSETS.geneticMapping}
              alt="Hélice de DNA — mapeamento genético de precisão"
              sizes="(max-width: 1024px) 92vw, 1200px"
              matchTextHeight={false}
              className="aspect-[16/10] min-h-0 rounded-none shadow-none ring-0 sm:aspect-[21/9]"
            />
            {/* Camadas de contraste: base escura + vinheta lateral + glow ciano */}
            <div className="pointer-events-none absolute inset-0 bg-dna/55" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-dna via-dna/90 to-dna/35" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dna/70 via-transparent to-dna/25" />
            <div className="pointer-events-none absolute -left-8 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan/15 blur-3xl" />

            <div className="absolute inset-0 flex flex-col justify-center px-7 py-8 sm:px-12 lg:px-16">
              <div className="max-w-xl rounded-2xl border border-white/15 bg-dna/35 p-5 shadow-[0_12px_40px_-12px_rgba(4,55,128,0.55)] backdrop-blur-md sm:p-7">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-sm sm:text-[11px]">
                  <Dna size={16} weight="bold" color="#FFFFFF" />
                  O seu DNA é o mapa
                </span>
                <h3 className="font-serif text-2xl font-medium leading-[1.15] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-3xl lg:text-4xl">
                  O teste genético analisa pequenas variações no seu DNA que
                  ajudam a entender como seu organismo funciona.
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {HIGHLIGHTS.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-white/35 bg-white/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white shadow-sm backdrop-blur-sm sm:text-xs"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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
