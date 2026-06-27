import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import { ASSETS } from "@/lib/site";

export default function Manifesto() {
  return (
    <section
      id="metodo"
      className="bg-gradient-to-b from-mist via-mist to-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:gap-12 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Asymmetric image block — valorizada */}
        <Reveal className="lg:col-span-6" y={48}>
          <div className="relative">
            <ParallaxImage
              src={ASSETS.manifesto}
              alt="Mulher forte em alongamento — performance e longevidade ativa"
              sizes="(max-width: 1024px) 90vw, 600px"
              className="aspect-[4/5] rounded-[2rem] shadow-card ring-1 ring-softgray/60"
            />
            <div className="pointer-events-none absolute -right-4 -top-4 -z-10 h-32 w-32 rounded-full bg-sky/25 blur-2xl" />
          </div>
        </Reveal>

        {/* Text block */}
        <Reveal className="lg:col-span-6 lg:pl-6" stagger>
          <span className="reveal mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            <span className="h-px w-8 bg-cyan/60" />
            O Manifesto
          </span>
          <h2 className="reveal font-serif text-[1.9rem] font-light leading-[1.12] text-nutrigen sm:text-4xl lg:text-[2.9rem]">
            O DNA é imutável. A forma como você vive, não.
          </h2>
          <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-dna/85 sm:mt-7 sm:text-lg">
            A partir dos 45 anos, o corpo não exige apenas cuidados superficiais,
            ele demanda precisão. Na NutriGen Clinic, decodificamos os seus
            biomarcadores únicos para desenhar um estilo de vida sob medida.
            Através da ciência da epigenética, nós não apenas retardamos os
            sinais do tempo: nós otimizamos a sua regeneração celular, devolvemos
            a clareza mental e estruturamos uma longevidade ativa e sofisticada.
          </p>
          <div className="reveal mt-8 h-px w-24 bg-nutrigen sm:mt-9" />
        </Reveal>
      </div>
    </section>
  );
}
