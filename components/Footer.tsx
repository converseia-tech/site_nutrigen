import Image from "next/image";
import { ASSETS, CONTACT, NAV_LINKS, whatsappUrl } from "@/lib/site";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="relative bg-dna text-mist">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-mist to-dna" />
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <Image
            src={ASSETS.logoWhite}
            alt="NutriGen Clinic"
            width={220}
            height={120}
            quality={95}
            sizes="220px"
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
            <a
              href="#privacidade"
              className="text-[12px] font-medium uppercase tracking-[0.14em] text-mist/80 transition-colors hover:text-cyan"
            >
              Política de Privacidade
            </a>
          </nav>

          <div
            id="privacidade"
            className="mt-8 max-w-2xl scroll-mt-28 text-xs leading-relaxed text-mist/55"
          >
            Utilizamos cookies e dados de navegação apenas para funcionamento do
            site, análise de uso e melhoria da experiência. Ao continuar, você
            concorda com o tratamento conforme a legislação aplicável (LGPD).
            Em caso de dúvidas, fale conosco pelo WhatsApp.
          </div>

          <div className="mt-10 h-px w-full max-w-md bg-mist/15" />

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mist/70">
            A NutriGen Clinic oferece teste genético em Recife, medicina de
            precisão, nutrição personalizada e longevidade com interpretação
            profissional.
          </p>
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-mist/55">
            {CONTACT.address}
          </p>
          <a
            href={whatsappUrl("Olá! Quero chamar a NutriGen no WhatsApp.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full border border-mist/30 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-mist transition-colors hover:border-cyan hover:text-cyan"
          >
            <WhatsappLogo size={19} weight="fill" />
            Chamar a NutriGen no WhatsApp
          </a>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-mist/45">
            NutriGen Clinic © 2026. Todos os direitos reservados. Os protocolos
            são individualizados e dependem de avaliação profissional.
          </p>
        </div>
      </div>
    </footer>
  );
}
