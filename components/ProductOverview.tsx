import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import WhatsAppCTA from "./WhatsAppCTA";
import { ASSETS } from "@/lib/site";
import {
  BowlFood,
  ChartLineUp,
  Dna,
  Heartbeat,
  Pill,
  PersonSimpleRun,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

const PANELS = [
  {
    icon: ChartLineUp,
    title: "Metabolismo e peso",
    text: "Ajuda a entender resposta a dietas, apetite e tendência a variações de composição corporal.",
  },
  {
    icon: BowlFood,
    title: "Resposta aos alimentos",
    text: "Orienta escolhas nutricionais de acordo com sinais individuais do organismo.",
  },
  {
    icon: Pill,
    title: "Vitaminas e micronutrientes",
    text: "Apoia decisões sobre necessidades nutricionais e suplementação com mais critério.",
  },
  {
    icon: Heartbeat,
    title: "Inflamação e recuperação",
    text: "Mostra pontos de atenção ligados a energia, treino, sono e rotina de autocuidado.",
  },
  {
    icon: ShieldCheck,
    title: "Prevenção e longevidade",
    text: "Ajuda a transformar cuidado preventivo em prioridades claras para o dia a dia.",
  },
  {
    icon: PersonSimpleRun,
    title: "Estilo de vida",
    text: "Conecta dados do teste com movimento, hábitos e acompanhamento profissional.",
  },
];

export default function ProductOverview() {
  return (
    <section
      id="produto"
      className="bg-gradient-to-b from-mist via-white to-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <Reveal stagger>
            <span className="reveal mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
              <Dna size={18} weight="thin" color="#009CD9" />
              O Teste NutriGen
            </span>
            <h2 className="reveal font-serif text-3xl font-light leading-tight text-nutrigen sm:text-4xl lg:text-[2.9rem]">
              Seu DNA não muda. A forma de cuidar dele, sim.
            </h2>
            <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-dna/80">
              O teste genético revela tendências que podem influenciar
              metabolismo, resposta aos alimentos, micronutrientes, recuperação e
              prevenção. Na NutriGen, esses dados não ficam soltos em um laudo:
              eles são interpretados e conectados à sua rotina.
            </p>

            <div className="reveal mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-softgray bg-white p-5 shadow-sm">
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-sky">
                  Você recebe
                </p>
                <p className="mt-3 text-sm leading-relaxed text-dna/78">
                  Relatório interpretado, prioridades de cuidado e orientação
                  para transformar dados em decisões práticas.
                </p>
              </div>
              <div className="rounded-2xl border border-softgray bg-white p-5 shadow-sm">
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-sky">
                  Para aplicar em
                </p>
                <p className="mt-3 text-sm leading-relaxed text-dna/78">
                  Alimentação, suplementação, estratégia de peso, performance,
                  energia e hábitos de longo prazo.
                </p>
              </div>
            </div>

            <WhatsAppCTA
              className="reveal mt-8"
              label="Quero saber se o teste faz sentido para mim"
              message="Olá! Quero entender se o Teste NutriGen faz sentido para meu caso."
            />
          </Reveal>

          <Reveal className="grid gap-5 sm:grid-cols-2" y={48}>
            <div className="sm:pt-12">
              <ParallaxImage
                src={ASSETS.productFood}
                alt="Mulher preparando frutas para rotina alimentar saudável"
                quality={94}
                objectPosition="center"
                sizes="(max-width: 1024px) 88vw, 360px"
                className="aspect-[4/5] rounded-2xl shadow-card ring-1 ring-softgray/60"
              />
            </div>
            <div className="grid gap-5">
              <ParallaxImage
                src={ASSETS.productExercise}
                alt="Mulher se exercitando em rotina de fortalecimento"
                quality={94}
                objectPosition="center 24%"
                sizes="(max-width: 1024px) 88vw, 360px"
                className="aspect-[4/5] rounded-2xl shadow-card ring-1 ring-softgray/60"
              />
              <ParallaxImage
                src={ASSETS.geneticMapping}
                alt="Imagem de hélice de DNA representando mapeamento genético"
                quality={92}
                objectPosition="center"
                sizes="(max-width: 1024px) 88vw, 360px"
                className="aspect-[16/10] rounded-2xl shadow-card ring-1 ring-softgray/60"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3" stagger>
          {PANELS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="reveal rounded-2xl border border-softgray bg-mist/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-softgray/70">
                <Icon size={26} weight="thin" color="#087BB8" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-medium text-dna">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dna/75">{text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
