import Reveal from "./Reveal";
import WhatsAppCTA from "./WhatsAppCTA";
import { CaretDown, Dna, Heartbeat, Sparkle } from "@phosphor-icons/react/dist/ssr";

const ABOUT_ITEMS = [
  {
    icon: Dna,
    title: "Quem Somos",
    text: "Uma clínica que integra nutrição, medicina e tecnologia para transformar dados do corpo em decisões de cuidado.",
  },
  {
    icon: Sparkle,
    title: "O Que Fazemos",
    text: "Avaliamos exames, rotina e objetivos para orientar alimentação, suplementação e estratégias de longevidade.",
  },
  {
    icon: Heartbeat,
    title: "Nossa Abordagem",
    text: "Cada plano nasce de uma leitura individual e evolui com acompanhamento profissional.",
  },
];

const SPECIALTIES = ["Nutrição", "Nutrologia", "Endocrinologia"];

export default function About() {
  return (
    <section
      id="quem-somos"
      className="relative overflow-hidden bg-gradient-to-b from-white via-mist to-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10">
        <Reveal stagger>
          <span className="reveal mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            <span className="h-px w-8 bg-cyan/60" />
            NutriGen Clinic
          </span>
          <h2 className="reveal font-serif text-[2.35rem] font-light leading-[1.05] text-nutrigen sm:text-5xl lg:text-[4.2rem]">
            Quem somos
          </h2>
          <p className="reveal mt-7 max-w-md text-base leading-relaxed text-dna/82 sm:text-lg">
            Unimos ciência, genética e acompanhamento especializado para criar
            estratégias de saúde mais precisas, sustentáveis e coerentes com o
            corpo de cada paciente.
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-3">
            {SPECIALTIES.map((specialty) => (
              <span
                key={specialty}
                className="rounded-full border border-sky/35 bg-white px-5 py-2 text-[12px] font-bold uppercase tracking-[0.1em] text-dna shadow-sm"
              >
                {specialty}
              </span>
            ))}
          </div>

          <WhatsAppCTA
            className="reveal mt-9"
            label="Falar com a equipe da NutriGen"
            message="Olá! Quero conhecer melhor a equipe e a abordagem da NutriGen Clinic."
          />
        </Reveal>

        <Reveal className="self-center" stagger>
          <div className="reveal overflow-hidden rounded-2xl border border-softgray bg-white shadow-card">
            {ABOUT_ITEMS.map(({ icon: Icon, title, text }, index) => (
              <details
                key={title}
                className="group border-b border-softgray last:border-b-0"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 sm:px-8">
                  <span className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky/15 ring-1 ring-sky/30">
                      <Icon size={26} weight="thin" color="#087BB8" />
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-dna">
                      {title}
                    </span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-softgray text-dna transition-transform group-open:rotate-180">
                    <CaretDown size={17} weight="bold" />
                  </span>
                </summary>
                <p className="px-6 pb-7 text-base leading-relaxed text-dna/78 sm:px-8">
                  {text}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
