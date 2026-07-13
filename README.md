# NutriGen Clinic — Landing Page

Landing page da **NutriGen Clinic**: teste genético em Recife, medicina de precisão, nutrição personalizada e longevidade.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** + **GSAP**
- **Phosphor Icons**
- Fontes: **Cormorant Garamond** + **Inter** (`next/font`)

## Desenvolvimento local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # servir o build localmente
```

## Deploy na Vercel

O projeto está configurado para deploy nativo Next.js na Vercel (sem Docker).

1. Importe o repositório em [vercel.com](https://vercel.com)
2. Framework: **Next.js** (detectado automaticamente)
3. Build command: `npm run build`
4. Output: gerenciado pela Vercel (não use `standalone`)
5. Região sugerida: `gru1` (São Paulo) — ver `vercel.json`

Ou via CLI:

```bash
npm i -g vercel
vercel
```

## Estrutura

```
app/            # rotas, layout, estilos globais
components/     # seções da landing
lib/site.ts     # assets, contato, FAQs, navegação
public/         # imagens e logos
```

## Configuração

- WhatsApp e telefone: `lib/site.ts`
- Endereço e horários: `CONTACT` em `lib/site.ts`
- Metadata/SEO: `app/layout.tsx`
