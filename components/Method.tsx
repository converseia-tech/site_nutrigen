import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import { ASSETS } from "@/lib/site";
import { Drop, ChartLineUp, FileText, Dna } from "@phosphor-icons/react/dist/ssr";

const PILLARS = [
  {
    icon: Drop,
    step: "01",
    title: "A Coleta Avançada",
    text: "Realizada em ambiente clínico ultra-confortável, mapeando marcadores genéticos associados ao envelhecimento, metabolismo e absorção de nutrientes.",
  },
  {
    icon: ChartLineUp,
    step: "02",
    title: "A Análise Multidisciplinar",
    text: "Leitura orientada por dados cruzando genética, nutrologia e estilo de vida atual.",
  },
  {
    icon: FileText,
    step: "03",
    title: "O Protocolo Definitivo",
    text: "Um guia de vida personalizado. Suplementação celular avançada e estratégias alimentares moldadas para o seu código genético.",
  },
];

const HIGHLIGHTS = [
  "Marcadores de envelhecimento",
  "Metabolismo & nutrientes",
  "Expressão epigenética",
];

export default function Method() {
  return (
    <section
      id="protocolo"
      className="bg-gradient-to-b from-white via-white to-mist py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center" stagger>
          <span className="reveal mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            <Dna size={18} weight="thin" color="#009CD9" />
            Mapeamento Genético + Protocolo NutriGen
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-tight text-nutrigen sm:text-4xl lg:text-[2.9rem]">
            Mapeamento de Precisão: Como Funciona
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-base leading-relaxed text-dna/80">
            Tudo começa no seu DNA. Decodificamos o seu código genético e o
            traduzimos em um plano de longevidade definitivo, em três etapas.
          </p>
        </Reveal>

        {/* Cinematic genetic-mapping banner */}
        <Reveal className="mt-12 sm:mt-16" y={56}>
          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-dna/20">
            <ParallaxImage
              src={ASSETS.geneticMapping}
              alt="Hélice de DNA — mapeamento genético de precisão"
              sizes="(max-width: 1024px) 92vw, 1200px"
              className="aspect-[16/10] sm:aspect-[21/9]"
            />
            {/* Legibility overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-dna/90 via-dna/55 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-center px-7 py-8 sm:px-12 lg:px-16">
              <div className="max-w-xl">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:text-[11px]">
                  <Dna size={16} weight="thin" color="#FFFFFF" />
                  O seu DNA é o mapa
                </span>
                <h3 className="font-serif text-2xl font-light leading-[1.15] text-white sm:text-3xl lg:text-4xl">
                  Cada protocolo nasce da leitura única do seu código genético.
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {HIGHLIGHTS.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-white/25 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-white/90 backdrop-blur-sm sm:text-xs"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3 pillars */}
        <Reveal
          className="mt-10 grid gap-6 sm:mt-12 sm:gap-7 md:grid-cols-3"
          stagger
        >
          {PILLARS.map(({ icon: Icon, step, title, text }) => (
            <article
              key={step}
              className="reveal group relative flex flex-col rounded-2xl border border-softgray bg-mist/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky hover:shadow-card"
            >
              <span className="font-serif text-5xl font-light text-sky/60">
                {step}
              </span>
              <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-softgray/70">
                <Icon size={32} weight="thin" color="#087BB8" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-medium text-dna">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dna/75">{text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
