"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { ASSETS, NAV_LINKS, WHATSAPP_URL } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dna/95 shadow-[0_8px_32px_-12px_rgba(4,55,128,0.45)] backdrop-blur-md"
          : "bg-dna/90 backdrop-blur-md"
      }`}
    >
      {/* Soft cyan edge like footer transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <a href="#topo" className="flex items-center" aria-label="NutriGen Clinic">
          <Image
            src={ASSETS.logoWhite}
            alt="NutriGen Clinic"
            width={150}
            height={48}
            priority
            quality={95}
            sizes="150px"
            className="h-10 w-auto md:h-11"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.12em] text-mist/85 transition-colors hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-mist/35 bg-white/5 px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-mist transition-all duration-300 hover:border-cyan hover:bg-cyan hover:text-white sm:inline-block"
          >
            Agendar avaliação
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-m-2 flex h-11 w-11 items-center justify-center text-mist lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={26} weight="thin" /> : <List size={26} weight="thin" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-dna/98 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium uppercase tracking-[0.1em] text-mist/85 transition-colors hover:text-cyan"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full border border-cyan/60 px-5 py-2 text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-cyan transition-all hover:bg-cyan hover:text-white"
              >
                Agendar avaliação
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
