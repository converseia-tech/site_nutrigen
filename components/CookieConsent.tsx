"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ShieldCheck } from "@phosphor-icons/react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasConsentCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookie-consent="));
    const hasConsentStorage = localStorage.getItem("cookie-consent");

    if (!hasConsentCookie && !hasConsentStorage) {
      // slight delay for a polished entrance
      const t = window.setTimeout(() => setShowBanner(true), 600);
      return () => window.clearTimeout(t);
    }
  }, []);

  const handleAccept = () => {
    const date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = `cookie-consent=accepted; expires=${date.toUTCString()}; path=/; SameSite=Lax;`;
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <div className="fixed inset-0 z-[9999] flex items-end justify-center p-4 sm:items-center sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 bg-dna/45 backdrop-blur-[3px]"
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-title"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-white shadow-[0_24px_64px_-16px_rgba(4,55,128,0.45)]"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-dna via-nutrigen to-cyan" />

            <div className="p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-dna/10 to-cyan/15 text-nutrigen ring-1 ring-sky/30">
                  <Cookie size={26} weight="duotone" />
                </div>
                <div>
                  <h4
                    id="cookie-title"
                    className="font-serif text-xl font-semibold tracking-wide text-nutrigen"
                  >
                    Política de Cookies
                  </h4>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-dna/85">
                    Valorizamos sua privacidade. Utilizamos cookies e tecnologias
                    semelhantes para garantir o funcionamento do site, otimizar
                    sua navegação e personalizar conteúdos conforme nossa{" "}
                    <a
                      href="#privacidade"
                      className="font-semibold text-cyan underline-offset-2 hover:underline"
                    >
                      Política de Privacidade
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-2 rounded-2xl bg-mist/80 px-4 py-3 text-xs leading-relaxed text-dna/75">
                <ShieldCheck
                  size={18}
                  weight="fill"
                  className="mt-0.5 shrink-0 text-cyan"
                />
                <span>
                  Você pode aceitar todos os cookies ou manter apenas os
                  essenciais para o funcionamento básico.
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end sm:gap-3">
                <button
                  type="button"
                  onClick={handleDecline}
                  className="w-full rounded-full border border-softgray/90 px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-dna/75 transition-colors hover:bg-mist sm:w-auto"
                >
                  Apenas essenciais
                </button>
                <button
                  type="button"
                  onClick={handleAccept}
                  className="w-full rounded-full bg-gradient-to-r from-dna to-nutrigen px-6 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-float transition-all hover:from-nutrigen hover:to-cyan sm:w-auto"
                >
                  Aceitar cookies
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
