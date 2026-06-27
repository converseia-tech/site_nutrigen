"use client";

import { useState, useEffect } from "react";
import { Cookie } from "@phosphor-icons/react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check both standard document.cookie and localStorage as fallback
    const hasConsentCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookie-consent="));
    const hasConsentStorage = localStorage.getItem("cookie-consent");

    if (!hasConsentCookie && !hasConsentStorage) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Set cookie for 1 year (365 days)
    const date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = `cookie-consent=accepted; expires=${date.toUTCString()}; path=/; SameSite=Lax;`;

    // Set localStorage as fallback
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    // Set decline in localStorage
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-lg rounded-2xl border border-softgray/50 bg-clinical p-5 shadow-float sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-md">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-cyan">
            <Cookie size={22} weight="duotone" />
          </div>
          <div>
            <h4 className="font-serif text-base font-semibold tracking-wide text-nutrigen">
              Privacidade &amp; Cookies
            </h4>
            <p className="mt-1.5 font-sans text-xs leading-relaxed text-dna/80">
              Valorizamos sua privacidade. Utilizamos cookies e tecnologias semelhantes para garantir o funcionamento do nosso site, otimizar sua navegação e personalizar conteúdos de acordo com nossa Política de Privacidade.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-end sm:gap-3">
          <button
            onClick={handleDecline}
            className="w-full rounded-full border border-softgray/80 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider text-dna/70 hover:bg-mist/50 transition-colors sm:w-auto"
          >
            Apenas Essenciais
          </button>
          <button
            onClick={handleAccept}
            className="w-full rounded-full bg-cyan px-5 py-2 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-float hover:bg-[#008bc5] transition-colors sm:w-auto"
          >
            Aceitar Todos
          </button>
        </div>
      </div>
    </div>
  );
}
