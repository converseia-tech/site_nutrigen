import Image from "next/image";
import { ASSETS, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-dna text-mist">
      {/* Blended seam from the previous (mist) section into the dark footer */}
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-mist to-dna" />
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <Image
            src={ASSETS.logoWhite}
            alt="NutriGen Clinic"
            width={220}
            height={120}
            className="h-24 w-auto"
          />

          <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-medium uppercase tracking-[0.14em] text-mist/80 transition-colors hover:text-cyan"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-10 h-px w-full max-w-md bg-mist/15" />

          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-mist/55">
            NutriGen Clinic © 2026. Todos os direitos reservados. Medicina de
            precisão, longevidade e bem-estar de luxo. Os protocolos são baseados
            em exames clínicos e mapeamento genético individualizado.
          </p>
        </div>
      </div>
    </footer>
  );
}
