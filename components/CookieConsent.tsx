"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "@phosphor-icons/react";

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
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-4 sm:p-6">
          <motion.div
            role="region"
            aria-label="Aviso de cookies"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-softgray bg-white shadow-[0_16px_48px_-16px_rgba(4,55,128,0.4)]"
          >
            <div className="h-1 w-full bg-gradient-to-r from-dna via-nutrigen to-cyan" />

            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-dna/10 to-cyan/15 text-nutrigen ring-1 ring-sky/30">
                  <Cookie size={20} weight="duotone" />
                </div>
                <p className="font-sans text-sm leading-relaxed text-dna/85">
                  Utilizamos cookies para garantir o funcionamento do site e
                  melhorar sua navegação, conforme nossa{" "}
                  <a
                    href="#privacidade"
                    className="font-semibold text-cyan underline-offset-2 hover:underline"
                  >
                    Política de Privacidade
                  </a>
                  .
                </p>
              </div>

              <div className="flex shrink-0 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={handleDecline}
                  className="flex-1 rounded-full border border-softgray/90 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider text-dna/75 transition-colors hover:bg-mist sm:flex-none"
                >
                  Apenas essenciais
                </button>
                <button
                  type="button"
                  onClick={handleAccept}
                  className="flex-1 rounded-full bg-gradient-to-r from-dna to-nutrigen px-5 py-2 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-float transition-all hover:from-nutrigen hover:to-cyan sm:flex-none"
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
