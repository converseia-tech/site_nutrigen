"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ParallaxImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  className?: string;
  objectPosition?: string;
  /** Continuous parallax drift on scroll. */
  parallax?: boolean;
  /** Elegant clip-path + scale unveil when entering the viewport. */
  reveal?: boolean;
};

/**
 * Premium image: an elegant clip-path "unveil" on entrance plus a subtle
 * scroll parallax. The inner image is slightly oversized so neither the
 * drift nor the reveal scale ever exposes the edges.
 */
export default function ParallaxImage({
  src,
  alt,
  priority = false,
  quality = 86,
  sizes = "(max-width: 1024px) 90vw, 600px",
  className = "",
  objectPosition = "center",
  parallax = true,
  reveal = true,
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (reveal) {
        gsap.fromTo(
          wrap,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            ease: "power4.out",
            scrollTrigger: { trigger: wrap, start: "top 85%" },
          }
        );
        gsap.fromTo(
          inner,
          { scale: 1.16 },
          {
            scale: 1.08,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: { trigger: wrap, start: "top 85%" },
          }
        );
      }

      if (parallax) {
        gsap.fromTo(
          inner,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, wrap);

    return () => ctx.revert();
  }, [parallax, reveal]);

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      <div ref={innerRef} className="absolute inset-0 scale-[1.08]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          sizes={sizes}
          decoding="async"
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
    </div>
  );
}
