"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger child reveals when true (children must carry .reveal). */
  stagger?: boolean;
  delay?: number;
  y?: number;
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Editorial fade-in on scroll using GSAP ScrollTrigger.
 * When `stagger` is set, animates direct children carrying the `.reveal` class;
 * otherwise animates the wrapper itself.
 */
export default function Reveal({
  children,
  className = "",
  stagger = false,
  delay = 0,
  y = 36,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const targets = stagger
        ? Array.from(el.querySelectorAll<HTMLElement>(".reveal"))
        : [el];

      if (prefersReduced) {
        gsap.set(targets, { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        delay,
        stagger: stagger ? 0.16 : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, delay, y]);

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
