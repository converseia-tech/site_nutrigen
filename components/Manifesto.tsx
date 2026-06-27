import Image from "next/image";
import Reveal from "./Reveal";
import { ASSETS } from "@/lib/site";

export default function Manifesto() {
  return (
    <section id="metodo" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Asymmetric image block */}
        <Reveal className="lg:col-span-5" y={48}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-softgray/60">
            <Image
              src={ASSETS.manifesto}
              alt="Mulher forte em alongamento — performance e longevidade ativa"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Text block, offset for editorial asymmetry */}
        <Reveal className="lg:col-span-7 lg:pl-8" stagger>
          <span className="reveal mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            O Manifesto
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-[1.12] text-nutrigen sm:text-4xl lg:text-[2.9rem]">
            O DNA é imutável. A forma como você vive, não.
          </h2>
          <p className="reveal mt-7 max-w-2xl text-base leading-relaxed text-dna/90 sm:text-lg">
            A partir dos 45 anos, o corpo não exige apenas cuidados superficiais,
            ele demanda precisão. Na NutriGen Clinic, decodificamos os seus
            biomarcadores únicos para desenhar um estilo de vida sob medida.
            Através da ciência da epigenética, nós não apenas retardamos os
            sinais do tempo: nós otimizamos a sua regeneração celular, devolvemos
            a clareza mental e estruturamos uma longevidade ativa e sofisticada.
          </p>
          <div className="reveal mt-9 h-px w-24 bg-nutrigen" />
        </Reveal>
      </div>
    </section>
  );
}
