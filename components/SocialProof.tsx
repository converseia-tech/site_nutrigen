import SideImage from "./SideImage";
import Reveal from "./Reveal";
import WhatsAppCTA from "./WhatsAppCTA";
import { ASSETS } from "@/lib/site";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

const INDICATED_FOR = [
  "Emagrecer com estratégia",
  "Melhorar a alimentação",
  "Descobrir quais suplementos realmente precisam",
  "Melhorar desempenho esportivo",
  "Cuidar da saúde de forma preventiva",
  "Investir em longevidade",
  "Entender melhor seu metabolismo",
];

export default function SocialProof() {
  return (
    <section
      id="prova"
      className="bg-gradient-to-b from-white via-white to-mist py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col justify-center" stagger>
            <span className="reveal mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
              Para quem é indicado
            </span>
            <h2 className="reveal font-serif text-3xl font-light leading-tight text-dna sm:text-4xl lg:text-[2.9rem]">
              Para quem o teste genético é indicado?
            </h2>
            <p className="reveal mt-6 text-base font-medium leading-relaxed text-nutrigen">
              O teste pode beneficiar pessoas que desejam:
            </p>
            <ul className="reveal mt-6 space-y-3">
              {INDICATED_FOR.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium leading-relaxed text-dna/90"
                >
                  <CheckCircle
                    size={18}
                    weight="fill"
                    color="#009CD9"
                    className="mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <WhatsAppCTA
              className="reveal mt-8"
              label="Conversar sobre meu caso"
              message="Olá! Quero saber se o teste genético da NutriGen é indicado para o meu caso."
            />
          </Reveal>

          <Reveal className="h-full min-h-[360px]" y={48}>
            <SideImage
              src={ASSETS.practices[0]}
              alt="Mulher em treino de fortalecimento e performance"
              quality={96}
              objectPosition="center 28%"
              sizes="(max-width: 1024px) 90vw, 600px"
              matchTextHeight
              className="lg:min-h-[480px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
