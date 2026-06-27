import Reveal from "./Reveal";
import { Drop, ChartLineUp, FileText } from "@phosphor-icons/react/dist/ssr";

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

export default function Method() {
  return (
    <section id="protocolo" className="bg-clinical py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center" stagger>
          <span className="reveal mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            Teste Genético + Protocolo NutriGen
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-tight text-nutrigen sm:text-4xl lg:text-[2.9rem]">
            Mapeamento de Precisão: Como Funciona
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-base leading-relaxed text-dna/80">
            Um ecossistema de transformação 360°, estruturado em três pilares que
            traduzem o seu código genético em um plano de longevidade definitivo.
          </p>
        </Reveal>

        <Reveal
          className="mt-16 grid gap-7 md:grid-cols-3"
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
