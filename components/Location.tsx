"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import { CONTACT, PHONE_DISPLAY, PHONE_E164, whatsappUrl } from "@/lib/site";

export default function Location() {
  return (
    <section id="agendamento" className="bg-mist py-14 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal className="flex flex-col justify-center" stagger>
          <span className="reveal mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            Agende sua avaliação
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-tight text-dna sm:text-4xl lg:text-[2.9rem]">
            Seu DNA guarda informações importantes. A diferença está em saber
            como utilizá-las.
          </h2>
          <p className="reveal mt-6 max-w-xl text-base font-medium leading-relaxed text-nutrigen">
            Na NutriGen, o teste genético é o primeiro passo para uma
            estratégia personalizada de saúde, com ciência, tecnologia e
            acompanhamento profissional.
          </p>
          <p className="reveal mt-4 max-w-xl text-base leading-relaxed text-dna/90">
            Atendimento presencial em Recife: da avaliação inicial à
            interpretação dos resultados e ao plano personalizado, com
            especialistas em Medicina de Precisão.
          </p>

          <ul className="reveal mt-9 space-y-6">
            <li className="flex items-start gap-4">
              <Phone
                size={28}
                weight="thin"
                color="#043780"
                className="mt-1 shrink-0"
              />
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan">
                  Telefone e WhatsApp
                </p>
                <p className="mt-1 text-base font-medium text-dna">
                  {PHONE_DISPLAY}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin
                size={28}
                weight="thin"
                color="#043780"
                className="mt-1 shrink-0"
              />
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan">
                  Endereço
                </p>
                <p className="mt-1 text-base font-medium text-dna">
                  {CONTACT.address}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock
                size={28}
                weight="thin"
                color="#043780"
                className="mt-1 shrink-0"
              />
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan">
                  Horário de Atendimento
                </p>
                <p className="mt-1 text-base font-medium text-dna">
                  {CONTACT.hours}
                </p>
              </div>
            </li>
          </ul>

          <motion.a
            href={whatsappUrl(
              "Olá! Quero agendar meu teste genético em Recife na NutriGen Clinic."
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="reveal mt-10 inline-flex w-full animate-pulseSoft items-center justify-center gap-2 rounded-full bg-gradient-to-r from-dna to-nutrigen px-5 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.02em] text-white shadow-float hover:from-nutrigen hover:to-cyan sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.08em]"
          >
            <WhatsappLogo size={22} weight="fill" />
            Agendar meu teste genético em Recife
          </motion.a>
          <a
            href={`tel:${PHONE_E164}`}
            className="reveal mt-3 inline-block text-sm font-medium text-dna/70 transition-colors hover:text-cyan"
          >
            ou ligue agora: {PHONE_DISPLAY}
          </a>
        </Reveal>

        <Reveal className="h-full" y={48}>
          <div className="relative h-full min-h-[340px] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-sky/30 sm:min-h-[460px]">
            <iframe
              title="Localização NutriGen Clinic"
              src={`https://www.google.com/maps?q=${CONTACT.mapsQuery}&output=embed`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 block h-full w-full grayscale-[0.35] [filter:grayscale(0.4)_contrast(1.05)_hue-rotate(175deg)_saturate(0.85)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-dna/10 mix-blend-multiply" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
