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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-white/80 shadow-[0_1px_0_0_#DADADA]"
          : "bg-white/70"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        {/* Logo */}
        <a href="#topo" className="flex items-center" aria-label="NutriGen Clinic">
          <Image
            src={ASSETS.logoColor}
            alt="NutriGen Clinic"
            width={150}
            height={48}
            priority
            quality={95}
            sizes="150px"
            className="h-10 w-auto md:h-11"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.12em] text-dna/80 transition-colors hover:text-nutrigen"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-nutrigen px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-nutrigen transition-all duration-300 hover:bg-nutrigen hover:text-white sm:inline-block"
          >
            Agendar avaliação
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-dna lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={28} weight="thin" /> : <List size={28} weight="thin" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-softgray bg-white/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium uppercase tracking-[0.1em] text-dna/80 transition-colors hover:text-nutrigen"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full border border-nutrigen px-5 py-2 text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-nutrigen transition-all hover:bg-nutrigen hover:text-white"
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
