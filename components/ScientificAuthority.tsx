import Reveal from "./Reveal";
import InstagramEmbed from "./InstagramEmbed";
import WhatsAppCTA from "./WhatsAppCTA";

type Block = {
  title: string;
  subtitle: string;
  items: { label: string; url: string; caption: string }[];
};

const BLOCKS: Block[] = [
  {
    title: "Vozes da Autoridade: NutriGen Convida",
    subtitle: "Especialistas sobre genética e epigenética aplicada",
    items: [
      {
        label: "Glúten e o Corpo",
        url: "https://www.instagram.com/p/DQ4_Wjrj-b9/",
        caption:
          "Dr. Fábio Menezes, gastroenterologista, explica os efeitos do glúten sobre o nosso organismo.",
      },
      {
        label: "Saúde da Tireoide",
        url: "https://www.instagram.com/p/DNjjvMSMmTj/",
        caption:
          "Dr. Leonardo Bandeira fala sobre a tireoide, uma glândula essencial para a saúde do corpo todo.",
      },
      {
        label: "Saúde Intestinal",
        url: "https://www.instagram.com/p/DM8zm4JMgVh/",
        caption:
          "Dr. Marco Saturnino, cirurgião colorretal, mostra como alimentação e hábitos impactam diretamente a saúde intestinal.",
      },
    ],
  },
];

export default function ScientificAuthority() {
  return (
    <section
      id="autoridade"
      className="bg-white py-14 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center" stagger>
          <span className="reveal mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            Conteúdo científico
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-tight text-dna sm:text-4xl lg:text-[2.9rem]">
            Autoridade científica em genética e epigenética
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-nutrigen">
            Especialistas convidados explicam, no nosso Instagram, como o
            mapeamento genético e os hábitos moldam a sua longevidade.
          </p>
        </Reveal>

        {BLOCKS.map((block) => (
          <div key={block.title} className="mt-12 sm:mt-16">
            <Reveal className="mb-8 text-center" stagger>
              <h3 className="reveal font-serif text-2xl font-medium text-dna">
                {block.title}
              </h3>
              <p className="reveal mt-1 text-sm uppercase tracking-[0.12em] text-sky">
                {block.subtitle}
              </p>
            </Reveal>

            <Reveal
              className="no-scrollbar -mx-6 flex max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 sm:gap-7 md:mx-auto md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
              stagger
            >
              {block.items.map((item) => (
                <div key={item.url} className="w-[86%] shrink-0 snap-start md:w-auto md:shrink">
                  <InstagramEmbed
                    url={item.url}
                    label={item.label}
                    caption={item.caption}
                  />
                </div>
              ))}
            </Reveal>
          </div>
        ))}

        <Reveal className="mt-12 text-center sm:mt-16" y={28}>
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
