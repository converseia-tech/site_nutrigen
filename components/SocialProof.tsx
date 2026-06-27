import Reveal from "./Reveal";
import InstagramEmbed from "./InstagramEmbed";

type Block = {
  title: string;
  subtitle: string;
  items: { label: string; url: string; caption: string }[];
};

const BLOCKS: Block[] = [
  {
    title: "Vozes da Autoridade — NutriGen Convida",
    subtitle: "Especialistas sobre genética e epigenética aplicada",
    items: [
      {
        label: "Como a Genética Muda Vidas",
        url: "https://www.instagram.com/reel/DRvDLl2kWim/",
        caption:
          "Dra. Renata Martins detalha a aplicação prática do mapeamento genético na individualização dos tratamentos.",
      },
      {
        label: "Bem-estar e Epigenética",
        url: "https://www.instagram.com/reel/DN03Oe54vNZ/",
        caption:
          "Maria Pimentel discute como o controle ambiental e os hábitos moldam a expressão dos nossos genes.",
      },
    ],
  },
];

export default function SocialProof() {
  return (
    <section id="prova" className="bg-clinical py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center" stagger>
          <span className="reveal mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan">
            Prova Científica &amp; Autoridade
          </span>
          <h2 className="reveal font-serif text-3xl font-light leading-tight text-nutrigen sm:text-4xl lg:text-[2.9rem]">
            Autoridade científica em genética e epigenética
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-base leading-relaxed text-dna/80">
            Especialistas convidados explicam, no nosso Instagram, como o
            mapeamento genético e os hábitos moldam a sua longevidade.
          </p>
        </Reveal>

        {BLOCKS.map((block) => (
          <div key={block.title} className="mt-16">
            <Reveal className="mb-8" stagger>
              <h3 className="reveal font-serif text-2xl font-medium text-dna">
                {block.title}
              </h3>
              <p className="reveal mt-1 text-sm uppercase tracking-[0.12em] text-sky">
                {block.subtitle}
              </p>
            </Reveal>

            <Reveal
              className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
              stagger
            >
              {block.items.map((item) => (
                <InstagramEmbed
                  key={item.url}
                  url={item.url}
                  label={item.label}
                  caption={item.caption}
                />
              ))}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
