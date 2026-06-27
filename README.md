# NutriGen Clinic — Landing Page

Landing page premium (Luxury/Wellness) para a **NutriGen Clinic**: medicina de precisão, mapeamento genético e longevidade.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** com design tokens da marca
- **Framer Motion** (micro-interações de CTAs e menu mobile)
- **GSAP + ScrollTrigger** (fade-ins editoriais de luxo na rolagem)
- **Phosphor Icons** (peso `thin`/`light`)
- Fontes: **Cormorant Garamond** (títulos) + **Inter** (corpo) via `next/font`

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # servir o build
```

## Estrutura

```
app/
  layout.tsx        # fontes, metadata, favicon
  page.tsx          # composição das seções
  globals.css       # tokens, base e helpers de animação
components/
  Header.tsx        # sticky + backdrop-blur, nav + menu mobile
  Hero.tsx          # abertura editorial 2 colunas (GSAP + Framer)
  Manifesto.tsx     # epigenética / medicina preditiva
  Method.tsx        # 3 pilares do protocolo
  Procedures.tsx    # cards complementares + carrossel
  Carousel.tsx      # carrossel auto-avançável das práticas
  SocialProof.tsx   # blocos A/B/C de prova social
  InstagramEmbed.tsx# embed oficial do Instagram com moldura custom
  Location.tsx      # institucional + mapa estilizado + CTA final
  Footer.tsx        # rodapé escuro de luxo
lib/
  site.ts           # assets, contatos, links e navegação
```

## Pontos a configurar antes de publicar

- **WhatsApp VIP:** `WHATSAPP_URL` em [`lib/site.ts`](lib/site.ts) usa um número **placeholder** (`5581999999999`). Substitua pelo número real.
- **Área da Paciente:** `PATIENT_AREA_URL` aponta para `#agendamento`; troque pela URL do portal quando existir.
- **Mapa:** usa o embed gratuito do Google Maps. Para o estilo monocromático total (Maps JS API com chave), seria preciso uma API key — atualmente o tom clínico é aproximado via CSS `filter`.

## Design Tokens (Tailwind)

| Token | Hex | Uso |
|-------|-----|-----|
| `mist` | `#EDEEF0` | background base |
| `clinical` | `#FFFFFF` | seções alternadas / cards |
| `nutrigen` | `#087BB8` | títulos principais |
| `dna` | `#043780` | subtítulos, hover, rodapé |
| `cyan` | `#009CD9` | CTAs |
| `sky` | `#66AACD` | cards secundários |
| `softgray` | `#DADADA` | divisórias e sombras |
