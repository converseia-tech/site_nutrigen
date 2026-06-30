import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import WhatsAppCTA from "./WhatsAppCTA";
import { ASSETS } from "@/lib/site";
import { Check } from "@phosphor-icons/react/dist/ssr";

const PAIN_POINTS = [
  "Você faz dieta, mas sente que o corpo não responde como deveria.",
  "Você usa suplementos sem saber exatamente o que o seu corpo realmente precisa.",
  "Você sente cansaço, baixa energia ou dificuldade de manter constância.",
  "Você quer envelhecer com mais saúde, mas não quer seguir fórmulas genéricas.",
  "Você já percebeu que o que funciona para outras pessoas nem sempre funciona para você.",
  "Você quer cuidar da saúde de forma preventiva, antes que os sinais fiquem mais difíceis de controlar.",
];

export default function Manifesto() {
  return (
    <section
      id="problema"
      className="bg-gradient-to-b from-mist via-mist to-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:gap-12 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <Reveal className="lg:col-span-6" y={48}>
          <div className="relative">
            <ParallaxImage
              src={ASSETS.manifesto}
              alt="Mulher correndo sorrindo em rotina de saúde e bem-estar"
              quality={94}
              objectPosition="center 45%"
              sizes="(max-width: 1024px) 90vw, 620px"
              className="aspect-[16/10] rounded-[2rem] shadow-card ring-1 ring-softgray/60 lg:aspect-[4/3]"
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:pl-6" stagger>
          <span className="reveal mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            <span className="h-px w-8 bg-cyan/60" />
            Tentativa e erro
          </span>
          <h2 className="reveal font-serif text-[1.9rem] font-light leading-[1.12] text-nutrigen sm:text-4xl lg:text-[2.9rem]">
            Já tentou de tudo para emagrecer, mas ainda sente que nada realmente funciona para você?
          </h2>
          <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-dna/85 sm:mt-7 sm:text-lg">
            Muita gente chega até a NutriGen depois de tentar várias dietas,
            suplementos, consultas e rotinas sem entender por que o resultado não
            se mantém. O problema nem sempre é falta de esforço. Muitas vezes,
            falta precisão.
          </p>
          <ul className="reveal mt-7 space-y-3">
            {PAIN_POINTS.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-dna/80">
                <Check size={18} weight="bold" color="#009CD9" className="mt-0.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="reveal mt-7 text-base leading-relaxed text-dna/85">
            A avaliação ajuda a identificar prioridades antes de definir dieta,
            suplementação ou novas condutas.
          </p>
          <WhatsAppCTA
            className="reveal mt-8"
            label="Quero sair da tentativa e erro"
            message="Olá! Quero sair da tentativa e erro e entender como a NutriGen pode me ajudar."
          />
        </Reveal>
      </div>
    </section>
  );
}
