import Image from "next/image";
import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
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
    <section
      id="praticas"
      className="bg-gradient-to-b from-mist via-mist to-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Editorial header — text + first practice image */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal stagger>
            <span className="reveal mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
              <span className="h-px w-8 bg-cyan/60" />
              Procedimentos Complementares
            </span>
            <h2 className="reveal font-serif text-3xl font-light leading-tight text-nutrigen sm:text-4xl lg:text-[2.9rem]">
              Práticas de Longevidade de Alta Performance
            </h2>
            <p className="reveal mt-6 max-w-lg text-base leading-relaxed text-dna/80">
              Movimento inteligente, equilíbrio do microbioma e ativos celulares —
              cada prática é calibrada pela sua capacidade de recuperação genética.
            </p>
          </Reveal>

          <Reveal y={48}>
            <ParallaxImage
              src={ASSETS.practices[0]}
              alt="Exercício de mobilidade e recuperação"
              sizes="(max-width: 1024px) 90vw, 48vw"
              className="aspect-[4/5] rounded-[2rem] shadow-card ring-1 ring-softgray/60 sm:aspect-[5/6]"
            />
          </Reveal>
        </div>

        {/* Cards */}
        <Reveal className="mt-14 grid grid-cols-1 gap-6 sm:mt-20 sm:gap-8 md:grid-cols-3" stagger>
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

        {/* Wide cinematic band — second practice image */}
        <Reveal className="mt-14 sm:mt-20" y={56}>
          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-softgray/60">
            <ParallaxImage
              src={ASSETS.practices[1]}
              alt="Treino de força e performance física"
              sizes="(max-width: 1024px) 92vw, 1200px"
              className="aspect-[16/11] sm:aspect-[21/9]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dna/80 via-dna/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-7 py-8 sm:px-12 sm:py-10">
              <p className="font-serif text-xl font-light leading-snug text-white sm:text-2xl lg:text-3xl">
                Movimento inteligente, guiado pela sua genética.
              </p>
              <p className="mt-2 max-w-md text-sm text-white/80">
                Rotinas de performance e recuperação desenhadas para o seu corpo.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
