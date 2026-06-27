"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, WhatsappLogo } from "@phosphor-icons/react";
import Reveal from "./Reveal";
import { CONTACT, WHATSAPP_URL } from "@/lib/site";

export default function Location() {
  return (
    <section id="agendamento" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Left — institutional */}
        <Reveal stagger>
          <span className="reveal mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            Institucional &amp; Agendamento
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-tight text-nutrigen sm:text-4xl lg:text-[2.9rem]">
            Sua Jornada Começa Aqui
          </h2>

          <ul className="reveal mt-9 space-y-6">
            <li className="flex items-start gap-4">
              <MapPin size={28} weight="thin" color="#087BB8" className="mt-1 shrink-0" />
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sky">
                  Endereço Premium
                </p>
                <p className="mt-1 text-base text-dna/90">{CONTACT.address}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock size={28} weight="thin" color="#087BB8" className="mt-1 shrink-0" />
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sky">
                  Horário de Atendimento
                </p>
                <p className="mt-1 text-base text-dna/90">{CONTACT.hours}</p>
              </div>
            </li>
          </ul>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="reveal mt-10 inline-flex animate-pulseSoft items-center gap-3 rounded-full bg-cyan px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-float"
          >
            <WhatsappLogo size={22} weight="fill" />
            Fale com um Assessor de Jornada de Saúde
          </motion.a>
        </Reveal>

        {/* Right — styled map */}
        <Reveal y={48}>
          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-softgray/60">
            <iframe
              title="Localização NutriGen Clinic"
              src={`https://www.google.com/maps?q=${CONTACT.mapsQuery}&output=embed`}
              width="100%"
              height="460"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[460px] w-full grayscale-[0.35] [filter:grayscale(0.4)_contrast(1.05)_hue-rotate(175deg)_saturate(0.85)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-nutrigen/5 mix-blend-multiply" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
