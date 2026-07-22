import SideImage from "./SideImage";
import Reveal from "./Reveal";
import WhatsAppCTA from "./WhatsAppCTA";
import { ASSETS } from "@/lib/site";
import { Check } from "@phosphor-icons/react/dist/ssr";

const PAIN_POINTS = [
  "Dietas e suplementos sem saber se fazem sentido para o seu organismo.",
  "Recomendações genéricas da internet que ignoram o seu DNA.",
  "Características genéticas únicas que influenciam metabolismo, absorção de nutrientes e resposta ao exercício.",
  "Decisões de saúde ainda tomadas por tentativa e erro.",
];

export default function Manifesto() {
  return (
    <section
      id="problema"
      className="bg-gradient-to-b from-mist via-mist to-white py-14 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 sm:gap-12 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <Reveal className="lg:col-span-6" y={48}>
          <SideImage
            src={ASSETS.manifesto}
            alt="Mulher correndo sorrindo em rotina de saúde e bem-estar"
            quality={94}
            objectPosition="center 45%"
            sizes="(max-width: 1024px) 90vw, 620px"
            matchTextHeight
            className="lg:min-h-full"
          />
        </Reveal>

        <Reveal className="flex flex-col justify-center lg:col-span-6 lg:pl-6" stagger>
          <span className="reveal mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            <span className="h-px w-8 bg-cyan/70" />
            Antes de tentar de novo
          </span>
          <h2 className="reveal font-serif text-[1.9rem] font-light leading-[1.12] text-dna sm:text-4xl lg:text-[2.75rem]">
            Você já tentou melhorar sua saúde, mas ainda sente que falta uma
            resposta?
          </h2>
          <p className="reveal mt-6 max-w-2xl text-base font-medium leading-relaxed text-nutrigen sm:mt-7 sm:text-lg">
            Muitas pessoas fazem dieta, utilizam suplementos ou seguem
            recomendações encontradas na internet sem saber se realmente fazem
            sentido para seu organismo.
          </p>
          <p className="reveal mt-4 max-w-2xl text-base leading-relaxed text-dna/90">
            Cada pessoa possui características genéticas únicas que influenciam
            metabolismo, absorção de nutrientes, resposta ao exercício,
            predisposição a deficiências nutricionais e muito mais. Sem conhecer
            essas informações, muitas decisões continuam sendo feitas por
            tentativa e erro.
          </p>
          <ul className="reveal mt-7 space-y-3">
            {PAIN_POINTS.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm font-medium leading-relaxed text-dna/90"
              >
                <Check
                  size={18}
                  weight="bold"
                  color="#009CD9"
                  className="mt-0.5 shrink-0"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <WhatsAppCTA
            className="reveal mt-8"
            label="Quero sair da tentativa e erro"
            message="Olá! Quero sair da tentativa e erro e entender como o teste genético da NutriGen pode me ajudar."
          />
        </Reveal>
      </div>
    </section>
  );
}
