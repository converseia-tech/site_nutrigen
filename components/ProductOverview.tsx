import SideImage from "./SideImage";
import Reveal from "./Reveal";
import WhatsAppCTA from "./WhatsAppCTA";
import { ASSETS } from "@/lib/site";
import {
  BowlFood,
  ChartLineUp,
  Dna,
  Fire,
  Heartbeat,
  Pill,
  PersonSimpleRun,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

const PANELS = [
  {
    icon: ChartLineUp,
    title: "Metabolismo",
    text: "Como seu organismo utiliza energia.",
  },
  {
    icon: Fire,
    title: "Emagrecimento",
    text: "Resposta individual à alimentação e composição corporal.",
  },
  {
    icon: Pill,
    title: "Vitaminas",
    text: "Predisposição a necessidades específicas de micronutrientes.",
  },
  {
    icon: BowlFood,
    title: "Resposta aos alimentos",
    text: "Como seu corpo reage a diferentes nutrientes.",
  },
  {
    icon: PersonSimpleRun,
    title: "Performance",
    text: "Recuperação muscular e adaptação ao exercício.",
  },
  {
    icon: ShieldCheck,
    title: "Longevidade",
    text: "Marcadores relacionados ao envelhecimento saudável.",
  },
  {
    icon: Heartbeat,
    title: "Inflamação",
    text: "Predisposição a processos inflamatórios.",
  },
  {
    icon: Dna,
    title: "Estilo de vida",
    text: "Hábitos que podem gerar maior impacto para você.",
  },
];

export default function ProductOverview() {
  return (
    <section
      id="produto"
      className="bg-gradient-to-b from-mist via-white to-white py-14 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <Reveal className="flex flex-col justify-center" stagger>
            <span className="reveal mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
              <Dna size={18} weight="thin" color="#009CD9" />
              O que é o teste genético
            </span>
            <h2 className="reveal font-serif text-3xl font-light leading-tight text-dna sm:text-4xl lg:text-[2.9rem]">
              O que é o teste genético e para que ele serve?
            </h2>
            <p className="reveal mt-6 max-w-2xl text-base font-medium leading-relaxed text-nutrigen">
              O teste genético analisa pequenas variações no seu DNA que ajudam
              a entender como seu organismo funciona.
            </p>
            <p className="reveal mt-4 max-w-2xl text-base leading-relaxed text-dna/90">
              Essas informações permitem criar estratégias mais individualizadas
              para alimentação, suplementação, prevenção e qualidade de vida. Na
              NutriGen, o teste é utilizado como uma ferramenta dentro da
              Medicina de Precisão, sempre associado à avaliação clínica e
              interpretação profissional.
            </p>

            <div className="reveal mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-sky/30 bg-gradient-to-br from-white to-mist/60 p-5 shadow-sm">
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-cyan">
                  O que o teste avalia
                </p>
                <p className="mt-3 text-sm leading-relaxed text-dna/85">
                  Metabolismo, emagrecimento, vitaminas, resposta aos alimentos,
                  performance, longevidade, inflamação e estilo de vida.
                </p>
              </div>
              <div className="rounded-2xl border border-sky/30 bg-gradient-to-br from-white to-mist/60 p-5 shadow-sm">
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-cyan">
                  Para aplicar em
                </p>
                <p className="mt-3 text-sm leading-relaxed text-dna/85">
                  Alimentação, suplementação, estratégia de peso, performance,
                  energia e hábitos de longo prazo.
                </p>
              </div>
            </div>

            <WhatsAppCTA
              className="reveal mt-8"
              label="Quero saber se o teste faz sentido para mim"
              message="Olá! Quero entender se o teste genético da NutriGen faz sentido para meu caso."
            />
          </Reveal>

          <Reveal className="h-full min-h-[360px]" y={48}>
            <SideImage
              src={ASSETS.geneticMapping}
              alt="Hélice de DNA no mapeamento genético"
              quality={96}
              objectPosition="center"
              sizes="(max-width: 1024px) 88vw, 560px"
              matchTextHeight
              className="lg:min-h-[480px]"
            />
          </Reveal>
        </div>

        <Reveal className="mt-10 text-center sm:mt-12" y={20}>
          <h3 className="font-serif text-2xl font-light text-dna sm:text-3xl">
            O que o teste genético avalia?
          </h3>
        </Reveal>

        <Reveal
          className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-4"
          stagger
        >
          {PANELS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="reveal rounded-2xl border border-sky/25 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-dna/10 to-cyan/15 shadow-sm ring-1 ring-sky/30">
                <Icon size={26} weight="thin" color="#043780" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-medium text-dna">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dna/80">{text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
