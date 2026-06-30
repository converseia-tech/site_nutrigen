"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";
import ParallaxImage from "./ParallaxImage";
import { ASSETS, whatsappUrl } from "@/lib/site";

const TRUST_SEALS = [
  "Nutrição de precisão",
  "Referência em Recife",
  "Testes genéticos e complementares",
  "Acompanhamento próximo",
];

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(textRef.current?.children ?? [], {
        opacity: 0,
        y: 36,
        duration: 1,
        stagger: 0.12,
      });
      if (imageRef.current) {
        tl.from(
          imageRef.current,
          { opacity: 0, scale: 0.96, duration: 1.4 },
          "-=1"
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-mist pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 sm:gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-10 lg:pb-28">
        <div ref={textRef} className="max-w-xl">
          <span className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan sm:text-[12px]">
            <span className="h-px w-8 bg-cyan/60" />
            Saúde personalizada
          </span>
          <h1 className="font-serif text-[2.35rem] font-light leading-[1.07] text-nutrigen sm:text-5xl lg:text-[3.8rem]">
            Mapeamento Genético em Recife para cuidar da saúde com mais precisão
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-dna/85 sm:mt-7 sm:text-lg">
            Seu DNA ajuda a orientar escolhas de nutrição, suplementação,
            longevidade e bem-estar com menos tentativa e erro.
          </p>

          <ul className="mt-7 grid gap-3 text-sm text-dna/80 sm:grid-cols-2">
            {TRUST_SEALS.map((seal) => (
              <li key={seal} className="flex items-start gap-2">
                <CheckCircle size={18} weight="fill" color="#009CD9" className="mt-0.5 shrink-0" />
                <span>{seal}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col items-start gap-4 sm:mt-10">
            <motion.a
              href={whatsappUrl("Olá! Quero entender como o mapeamento genético pode orientar minha saúde.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-cyan px-7 py-4 text-[13px] font-bold uppercase tracking-[0.06em] text-white shadow-float sm:w-auto sm:text-sm"
            >
              Quero entender meu DNA com clareza
              <ArrowRight size={20} weight="bold" />
            </motion.a>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
              <a
                href="#metodo"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-softgray bg-white px-5 py-3 text-sm font-semibold text-dna shadow-sm transition-all hover:border-sky hover:text-nutrigen hover:shadow-card"
              >
                Ver como funciona a avaliação
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky/15 text-cyan transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} weight="bold" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div ref={imageRef} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <ParallaxImage
            src={ASSETS.hero}
            alt="Mulher se alongando em rotina de vida saudável"
            priority
            quality={95}
            reveal={false}
            parallax={false}
            objectPosition="center 42%"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 78vw, 660px"
            className="aspect-[4/3] rounded-[2rem] shadow-card ring-1 ring-softgray/60 sm:aspect-[3/2] lg:aspect-[4/3]"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-dna/15 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
