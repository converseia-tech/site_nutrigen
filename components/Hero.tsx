"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight } from "@phosphor-icons/react";
import { ASSETS, WHATSAPP_URL } from "@/lib/site";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(textRef.current?.children ?? [], {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
      });
      if (imageRef.current) {
        tl.from(
          imageRef.current,
          { opacity: 0, x: 60, duration: 1.3 },
          "-=0.9"
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-clinical pt-28 lg:pt-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pb-28">
        {/* Left — editorial text */}
        <div ref={textRef} className="max-w-xl">
          <span className="mb-6 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            Medicina Preditiva &amp; Longevidade
          </span>
          <h1 className="font-serif text-[2.6rem] font-light leading-[1.08] text-nutrigen sm:text-5xl lg:text-[3.7rem]">
            A ciência da sua genética a serviço da sua longevidade.
          </h1>
          <p className="mt-7 text-base leading-relaxed text-dna/90 sm:text-lg">
            Vá além da estética tradicional. Descubra como o mapeamento do seu
            DNA permite criar um protocolo de saúde, bem-estar e vitalidade ultra
            personalizado e definitivo para os próximos capítulos da sua vida.
          </p>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-float"
          >
            Agende Sua Consulta de Alta Performance
            <ArrowRight size={20} weight="bold" />
          </motion.a>
        </div>

        {/* Right — vertical lifestyle image */}
        <div ref={imageRef} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-softgray/60">
            <Image
              src={ASSETS.hero}
              alt="Mulher sênior sorrindo após treino — vitalidade e longevidade ativa"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-dna/15 via-transparent to-transparent" />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-sky/30 blur-2xl" />
          <div className="absolute -right-5 -top-5 -z-10 h-28 w-28 rounded-full bg-cyan/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
