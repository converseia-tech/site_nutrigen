"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight } from "@phosphor-icons/react";
import SideImage from "./SideImage";
import { ASSETS, whatsappUrl } from "@/lib/site";

const TRUST_SEALS = [
  "Teste genético com interpretação profissional",
  "Nutrição baseada em genética",
  "Medicina de Precisão",
  "Atendimento em Recife",
];

const sealContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.55,
      staggerChildren: 0.14,
    },
  },
};

const sealItem = {
  hidden: { opacity: 0, y: 18, scale: 0.94, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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
      // Animate direct children except the seals list (handled by Framer)
      const kids = textRef.current
        ? Array.from(textRef.current.children).filter(
            (el) => !(el as HTMLElement).dataset?.seals
          )
        : [];
      tl.from(kids, {
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
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-dna/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-stretch gap-10 px-6 pb-16 sm:gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-10 lg:pb-28">
        <div ref={textRef} className="flex max-w-xl flex-col justify-center">
          <span className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan sm:text-[12px]">
            <span className="h-px w-8 bg-cyan/70" />
            Medicina de Precisão · Recife
          </span>
          <h1 className="font-serif text-[2.35rem] font-light leading-[1.07] text-dna sm:text-5xl lg:text-[3.8rem]">
            Teste Genético em Recife
          </h1>
          <p className="mt-6 max-w-lg text-base font-medium leading-relaxed text-nutrigen/95 sm:mt-7 sm:text-lg">
            Entenda o que seu DNA revela sobre alimentação, metabolismo,
            suplementação, emagrecimento e longevidade, com interpretação
            especializada e estratégias personalizadas para sua saúde.
          </p>

          <motion.ul
            data-seals="true"
            className="mt-7 grid gap-3 sm:grid-cols-2"
            variants={sealContainer}
            initial="hidden"
            animate="show"
          >
            {TRUST_SEALS.map((seal) => (
              <motion.li
                key={seal}
                variants={sealItem}
                className="group flex items-center rounded-2xl border border-sky/30 bg-gradient-to-br from-white to-mist/70 px-4 py-3 shadow-sm ring-1 ring-transparent transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/50 hover:shadow-card hover:ring-cyan/20"
              >
                <span className="text-sm font-medium leading-snug text-dna">
                  {seal}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-9 flex flex-col items-start gap-4 sm:mt-10">
            <motion.a
              href={whatsappUrl(
                "Olá! Quero agendar minha avaliação de teste genético na NutriGen."
              )}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-dna to-nutrigen px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.02em] text-white shadow-float hover:from-nutrigen hover:to-cyan sm:w-auto sm:gap-3 sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.06em]"
            >
              Quero agendar minha avaliação
              <ArrowRight size={20} weight="bold" />
            </motion.a>
            <a
              href="#metodo"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-sky/40 bg-white px-5 py-3 text-sm font-semibold text-dna shadow-sm transition-all hover:border-cyan hover:text-nutrigen hover:shadow-card"
            >
              Ver como funciona o teste
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky/20 text-cyan transition-transform group-hover:translate-x-1">
                <ArrowRight size={16} weight="bold" />
              </span>
            </a>
          </div>
        </div>

        <div ref={imageRef} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <SideImage
            src={ASSETS.hero}
            alt="Mulher em rotina de vida saudável, bem-estar e longevidade"
            priority
            quality={95}
            objectPosition="center 42%"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 78vw, 660px"
            matchTextHeight
            className="lg:min-h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
