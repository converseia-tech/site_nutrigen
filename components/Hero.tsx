"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, MapPin } from "@phosphor-icons/react";
import ParallaxImage from "./ParallaxImage";
import { ASSETS, WHATSAPP_URL } from "@/lib/site";

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
      {/* Soft ambient glows */}
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-sky/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-cyan/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 sm:gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-10 lg:pb-28">
        {/* Left — editorial text */}
        <div ref={textRef} className="max-w-xl">
          <span className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan sm:text-[12px]">
            <span className="h-px w-8 bg-cyan/60" />
            Medicina Preditiva &amp; Longevidade
          </span>
          <h1 className="font-serif text-[2.35rem] font-light leading-[1.07] text-nutrigen sm:text-5xl lg:text-[3.8rem]">
            A ciência da sua genética a serviço da sua longevidade.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-dna/85 sm:mt-7 sm:text-lg">
            Vá além da estética tradicional. O mapeamento do seu DNA permite criar
            um protocolo de saúde, bem-estar e vitalidade ultra personalizado para
            os próximos capítulos da sua vida.
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-cyan px-7 py-4 text-[13px] font-bold uppercase tracking-[0.06em] text-white shadow-float sm:w-auto sm:text-sm"
            >
              Agende Sua Consulta
              <ArrowRight size={20} weight="bold" />
            </motion.a>
            <a
              href="#metodo"
              className="group inline-flex items-center gap-2 text-sm font-medium text-dna transition-colors hover:text-nutrigen"
            >
              Conheça o método
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Trust line */}
          <div className="mt-10 flex items-center gap-2 border-t border-softgray/70 pt-6 text-[13px] text-dna/60">
          </div>
        </div>

        {/* Right — vertical lifestyle image */}
        <div ref={imageRef} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <ParallaxImage
            src={ASSETS.hero}
            alt="Mulher sênior sorrindo após treino — vitalidade e longevidade ativa"
            priority
            quality={88}
            reveal={false}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 640px"
            className="aspect-[4/5] rounded-[2rem] shadow-card ring-1 ring-softgray/60 sm:aspect-[5/6]"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-dna/15 via-transparent to-transparent" />
          {/* Floating accent card */}
        </div>
      </div>
    </section>
  );
}
