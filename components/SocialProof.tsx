import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import WhatsAppCTA from "./WhatsAppCTA";
import { ASSETS } from "@/lib/site";

export default function SocialProof() {
  return (
    <section
      id="prova"
      className="bg-gradient-to-b from-white via-white to-mist py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal stagger>
            <span className="reveal mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
              Interpretação Profissional
            </span>
            <h2 className="reveal font-serif text-3xl font-light leading-tight text-nutrigen sm:text-4xl lg:text-[2.9rem]">
              Dados só fazem diferença quando viram decisões claras
            </h2>
            <div className="reveal mt-6 space-y-4 text-base leading-relaxed text-dna/80">
              <p>
                O teste genético é uma ferramenta. A consulta transforma essas
                informações em escolhas possíveis para alimentação, suplementação,
                intestino, energia e longevidade.
              </p>
              <p>
                O atendimento organiza prioridades, explica os dados de forma
                simples e acompanha os próximos passos com responsabilidade.
              </p>
            </div>
            <WhatsAppCTA
              className="reveal mt-8"
              label="Conversar com quem interpreta o teste"
              message="Olá! Quero conversar com a equipe que interpreta o teste genético na NutriGen Clinic."
            />
          </Reveal>

          <Reveal y={48}>
            <ParallaxImage
              src={ASSETS.interpretation}
              alt="Mulher em rotina de bem-estar e vida saudável"
              quality={94}
              objectPosition="center 42%"
              sizes="(max-width: 1024px) 90vw, 600px"
              className="aspect-[16/10] rounded-[2rem] shadow-card ring-1 ring-softgray/60 lg:aspect-[4/3]"
            />
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-16 max-w-3xl text-center" stagger>
          <span className="reveal mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            Depoimentos
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-tight text-nutrigen sm:text-4xl">
            Pessoas diferentes precisam de planos diferentes
          </h2>
          <p className="reveal mx-auto mt-5 max-w-xl text-sm leading-relaxed text-dna/70">
            Avaliações e relatos reais podem ser exibidos aqui quando houver
            autorização de uso e origem verificável.
          </p>
        </Reveal>

        <Reveal className="mt-10 text-center" y={28}>
          <WhatsAppCTA
            align="center"
            label="Quero avaliar meu caso com segurança"
            message="Olá! Quero avaliar meu caso com segurança antes de fazer o mapeamento genético."
          />
        </Reveal>
      </div>
    </section>
  );
}
