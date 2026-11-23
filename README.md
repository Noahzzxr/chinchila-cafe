# Chinchila Café — site institucional

Next.js (App Router) + Tailwind CSS v4. Página única com âncoras (`/`) e cardápio completo em abas (`/cardapio`).

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Cardápio (itens, preços, badges, "mais pedidos") | `src/data/cardapio.ts` |
| Endereço, telefone, redes, horários, nomes das chinchilas | `src/data/site.ts` |
| Cores, fontes, textura de patinhas, animações | `src/app/globals.css` |
| SEO, Open Graph, schema.org | `src/app/layout.tsx` |
| Seções da home | `src/components/sections/*` |

Componentes reutilizáveis: `SectionTitle`, `MenuCard`, `InfoCard`, `Badge`, `HoursTable`, `Reveal`.

## Deploy na Vercel

Importe o repositório e defina a variável `NEXT_PUBLIC_SITE_URL` com o domínio final
(ex.: `https://chinchilacafe.com.br`) — ela alimenta canonical, Open Graph, sitemap e schema.org.

## Pendências de conteúdo

- Fotos das Chilatortas: hoje são placeholders (`photo: true` em `cardapio.ts`). Ao ter as fotos,
  troque o bloco de placeholder em `src/components/MenuCard.tsx` por `<Image>`.
- Confirmar as URLs de Instagram/Facebook em `src/data/site.ts`.
