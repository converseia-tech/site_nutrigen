import Image from "next/image";
import Reveal from "./Reveal";
import Carousel from "./Carousel";
import { ASSETS } from "@/lib/site";
import { Virus, Pill, PersonSimpleRun } from "@phosphor-icons/react/dist/ssr";

const CARDS = [
  {
    icon: Virus,
    title: "Modulação Intestinal Personalizada",
    text: "O equilíbrio do microbioma como pilar fundamental para o humor, imunidade e absorção de nutrientes de precisão.",
  },
  {
    icon: Pill,
    title: "Suplementação Celular Avançada",
    text: "Prescrição de ativos biotecnológicos de ponta para neutralizar o estresse oxidativo e otimizar a energia mitocondrial.",
  },
  {
    icon: PersonSimpleRun,
    title: "Longevidade e Performance Física",
    text: "Alinhamento de rotinas de movimento inteligente baseadas na sua capacidade de recuperação genética e muscular.",
  },
];

export default function Procedures() {
  return (
    <section id="praticas" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center" stagger>
          <span className="reveal mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            Procedimentos Complementares
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-tight text-nutrigen sm:text-4xl lg:text-[2.9rem]">
            Práticas de Longevidade de Alta Performance
          </h2>
        </Reveal>

        {/* Cards */}
        <Reveal className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3" stagger>
          {CARDS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="reveal group relative overflow-hidden rounded-2xl border border-softgray bg-clinical p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              {/* Subtle watermark */}
              <Image
                src={ASSETS.logoColor}
                alt=""
                aria-hidden
                width={160}
                height={160}
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
            </article>
          ))}
        </Reveal>

        {/* Associated practices gallery */}
        <Reveal className="mx-auto mt-16 max-w-3xl" y={48}>
          <Carousel images={ASSETS.gallery} alt="Rotina de movimento inteligente" />
        </Reveal>
      </div>
    </section>
  );
}
