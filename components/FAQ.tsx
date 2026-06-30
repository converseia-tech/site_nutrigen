import Reveal from "./Reveal";
import WhatsAppCTA from "./WhatsAppCTA";
import { FAQS } from "@/lib/site";

export default function FAQ() {
  return (
    <section
      id="duvidas"
      className="bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center" stagger>
          <span className="reveal mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            Perguntas Frequentes
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-tight text-nutrigen sm:text-4xl lg:text-[2.9rem]">
            Ainda tem dúvidas antes de agendar?
          </h2>
        </Reveal>

        <Reveal className="mt-12 divide-y divide-softgray rounded-2xl border border-softgray bg-mist/40" stagger>
          {FAQS.map((item) => (
            <details key={item.question} className="reveal group p-6">
              <summary className="cursor-pointer list-none font-serif text-xl font-medium text-dna">
                <span className="inline-flex w-full items-center justify-between gap-4">
                  {item.question}
                  <span className="text-2xl font-light text-cyan transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-dna/75">
                {item.answer}
              </p>
            </details>
          ))}
        </Reveal>

        <Reveal className="mt-10 text-center" y={28}>
          <WhatsAppCTA
            align="center"
            label="Ainda tenho dúvida sobre o atendimento"
            message="Olá! Ainda tenho dúvidas sobre o atendimento da NutriGen Clinic."
          />
        </Reveal>
      </div>
    </section>
  );
}
