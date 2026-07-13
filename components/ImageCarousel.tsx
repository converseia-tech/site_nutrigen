"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export type CarouselSlide = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type ImageCarouselProps = {
  slides: CarouselSlide[];
  className?: string;
  intervalMs?: number;
  quality?: number;
  sizes?: string;
  /** When true, fills parent height (pair with items-stretch lateral layouts). */
  fillHeight?: boolean;
};

/**
 * Soft crossfade carousel — clinical blue aesthetic, no harsh cuts.
 */
export default function ImageCarousel({
  slides,
  className = "",
  intervalMs = 4800,
  quality = 94,
  sizes = "(max-width: 1024px) 90vw, 620px",
  fillHeight = false,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  if (!slides.length) return null;

  const active = slides[index];

  return (
    <div
      className={`relative overflow-hidden ${fillHeight ? "h-full min-h-[280px]" : ""} ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active.src + index}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={active.src}
            alt={active.alt}
            fill
            quality={quality}
            sizes={sizes}
            className="object-cover"
            style={{ objectPosition: active.objectPosition ?? "center" }}
            priority={index === 0}
          />
          {/* Soft blue clinical veil */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-dna/20 via-transparent to-cyan/10" />
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Ver imagem ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-7 bg-cyan shadow-[0_0_12px_rgba(0,156,217,0.55)]"
                  : "w-1.5 bg-white/55 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
