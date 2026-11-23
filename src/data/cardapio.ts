/**
 * Cardápio completo do Chinchila Café.
 *
 * Para editar: altere nomes, descrições ou preços abaixo.
 * - `prices`: lista de preços; `label` é opcional (ex.: "P", "M", "G").
 * - `variants`: sabores que compartilham o mesmo preço do item.
 * - `badges`: etiquetas visuais (ver `BadgeType`).
 * - `popular`: aparece na prévia "Mais pedidos" da home.
 * - `photo`: exibe área de foto (placeholder até haver fotos reais).
 */

export type BadgeType = "vegana" | "sem-gluten" | "sem-lactose" | "best-seller" | "carro-chefe";

export type Price = { label?: string; value: number };

export type Variant = {
  name: string;
  description: string;
  badges?: BadgeType[];
};

export type MenuItem = {
  id: string;
  name: string;
  tagline?: string;
  description?: string;
  prices: Price[];
  variants?: Variant[];
  badges?: BadgeType[];
  popular?: boolean;
  photo?: boolean;
  note?: string;
};

export type MenuGroup = {
  title?: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  title: string;
  intro?: string;
  groups: MenuGroup[];
};

export const cardapio: MenuCategory[] = [
  {
    id: "salgados",
    title: "Salgados",
    intro: "Receitas da casa, com nomes à altura da turma.",
    groups: [
      {
        items: [
          {
            id: "chilaqueijo",
            name: "Chilaqueijo",
            tagline: "O pão de queijo do Chinchila Café",
            prices: [
              { label: "Tradicional com queijo minas (individual, 65g)", value: 9 },
              { label: "Provolone e parmesão (3 un. de 20g)", value: 11 },
            ],
            popular: true,
          },
          {
            id: "panini",
            name: "Panini",
            description: "Chilaqueijo recheado com peito de peru e mussarela.",
            prices: [{ value: 14 }],
          },
          {
            id: "misto-quente",
            name: "Misto quente",
            description: "Duas fatias de pão de forma na chapa com peito de peru e mussarela.",
            prices: [{ value: 20 }],
          },
          {
            id: "empanachila",
            name: "Empanachila",
            tagline: "As empanadas do Chinchila Café",
            prices: [{ label: "cada", value: 18 }],
            variants: [
              { name: "Chilacarne", description: "Carne, pimentão, cebolinha, ovo e azeitonas verdes." },
              { name: "Chilafrango", description: "Sobrecoxas, cebola, pimentão e cebolinha." },
              { name: "Ricotachila", description: "Ricota, tomate seco, manjericão e mussarela." },
              { name: "Caponata", description: "Tomate, berinjela, cebola, pimentão vermelho e alho.", badges: ["vegana"] },
              { name: "Tofu com cebola caramelizada", description: "Tofu, cebola caramelizada, orégano e pimenta-do-reino.", badges: ["vegana"] },
            ],
            popular: true,
          },
          {
            id: "coxinchila",
            name: "Coxinchila",
            tagline: "As coxinhas do Chinchila Café",
            prices: [{ label: "cada", value: 18 }],
            badges: ["sem-gluten", "sem-lactose"],
            variants: [
              { name: "Chilafrango", description: "Batata-doce e frango com amaranto." },
              { name: "Chilacarne", description: "Batata-doce e carne com cebola caramelizada." },
            ],
          },
          {
            id: "croachila",
            name: "Croachila",
            tagline: "O croissant do Chinchila Café",
            prices: [
              { label: "Tradicional (manteiga ou geleia de frutas vermelhas)", value: 25 },
              { label: "Recheado (consulte o sabor)", value: 35 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cafes-chas",
    title: "Cafés & Chás",
    intro: "Do espresso puro ao bule de chá autoral para dividir.",
    groups: [
      {
        items: [
          {
            id: "espresso",
            name: "Espresso",
            description: "Puro, com leite ou carioca.",
            prices: [{ label: "P", value: 12 }, { label: "M", value: 14 }],
          },
          {
            id: "latte",
            name: "Latte",
            description: "Dobro de leite vaporizado e dose de espresso.",
            prices: [{ label: "M", value: 16 }],
          },
          {
            id: "macchiato",
            name: "Macchiato",
            description: "Espresso com espuma de leite, cacau e canela.",
            prices: [{ label: "P", value: 14 }, { label: "M", value: 16 }],
          },
          {
            id: "flat-white",
            name: "Flat white",
            description: "Dose dupla de espresso e leite vaporizado.",
            prices: [{ label: "M", value: 18 }],
          },
          {
            id: "mocha",
            name: "Mocha",
            description: "Espresso, leite vaporizado e gotas de chocolate.",
            prices: [{ label: "G", value: 24 }],
          },
          {
            id: "cappuccino-brasileiro",
            name: "Cappuccino brasileiro",
            description: "Blend tradicional.",
            prices: [{ label: "M", value: 20 }, { label: "G", value: 22 }],
          },
          {
            id: "cappuccino-italiano",
            name: "Cappuccino italiano",
            description: "Espresso, leite vaporizado, cacau e canela.",
            prices: [{ label: "M", value: 18 }],
          },
          {
            id: "filtrado",
            name: "Café filtrado",
            description: "Hario V60, 300ml. Serve duas xícaras.",
            prices: [{ value: 24 }],
          },
          {
            id: "chas",
            name: "Chás",
            description: "Consulte as opções do dia.",
            prices: [{ value: 12 }],
          },
          {
            id: "cha-chinchila",
            name: "Chá Chinchila 450ml",
            description:
              "Blend de laranja, hibisco, pimenta-rosa, anis-estrelado, canela e zimbro, servido no bule de infusão. Serve duas xícaras grandes.",
            prices: [{ value: 20 }],
            popular: true,
          },
        ],
      },
      {
        title: "Adicionais",
        items: [
          {
            id: "adicionais-cafe",
            name: "Adicionais",
            prices: [
              { label: "Chantininho", value: 4 },
              { label: "Leite vegetal", value: 5 },
              { label: "Leite sem lactose", value: 3.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bebidas-frias",
    title: "Bebidas Frias",
    groups: [
      {
        items: [
          { id: "soda-italiana", name: "Soda italiana", description: "Consulte os sabores.", prices: [{ value: 20 }] },
          { id: "suco-laranja", name: "Suco de laranja integral", description: "Macrovita, 300ml.", prices: [{ value: 16 }] },
          { id: "refrigerante", name: "Refrigerante lata", prices: [{ value: 10 }] },
          { id: "agua", name: "Água", description: "Com ou sem gás.", prices: [{ value: 7 }] },
        ],
      },
    ],
  },
  {
    id: "especiais",
    title: "Especiais",
    intro: "As criações que só existem no Mundo das Chinchilas.",
    groups: [
      {
        title: "Quentes",
        items: [
          {
            id: "chilamissu",
            name: "Chilamissú",
            description:
              "Espresso, leite vaporizado, chantininho, cacau em pó, raspas de chocolate e biscoito champagne.",
            prices: [{ value: 26 }],
            popular: true,
          },
          {
            id: "cafe-nutella",
            name: "Café Nutella",
            description: "Camada de creme de avelã Nutella sobre leite vaporizado e espresso.",
            prices: [{ value: 26 }],
          },
          {
            id: "chocolate-quente",
            name: "Chocolate quente cremoso",
            tagline: "Tipo europeu",
            prices: [
              { label: "G", value: 24 },
              { label: "Caneca mascotes (G + chantininho com patinha)", value: 28 },
            ],
            note: "Adicional chantininho com patinha: + R$ 4",
          },
        ],
      },
      {
        title: "Gelados",
        items: [
          {
            id: "coffee-ice",
            name: "Coffee Ice Chinchila",
            description:
              "Cappuccino e leite gelado batidos com sorvete de creme, dose de espresso, calda de chocolate, chantininho e massa red velvet, com a patinha de chinchila.",
            prices: [{ value: 34 }],
            badges: ["best-seller"],
            popular: true,
          },
          {
            id: "affogato",
            name: "Affogato Chinchila",
            description:
              "Sorvete de baunilha, caramelo salgado, espresso, chantininho, crocante de amendoim, raspas de chocolate e patinha.",
            prices: [{ value: 34 }],
          },
          {
            id: "paradise",
            name: "Chinchila Paradise",
            description: "Coquetel com suco de laranja, grenadine e curaçau blue.",
            prices: [{ value: 32 }],
          },
        ],
      },
    ],
  },
  {
    id: "chilatortas",
    title: "Chilatortas",
    intro: "Fatias generosas, feitas para dividir (ou não).",
    groups: [
      {
        items: [
          {
            id: "chocochila",
            name: "Chocochila",
            description: "Base de chocolate amanteigada, leite condensado cremoso, mousse de chocolate e ganache meio amargo.",
            prices: [{ value: 29 }],
            photo: true,
          },
          {
            id: "chilamousse-pistache",
            name: "Chilamousse de Pistache",
            description: "Massa amanteigada, duo de mousses branca e pistache, caramelo cremoso de pistache.",
            prices: [{ value: 34 }],
            photo: true,
          },
          {
            id: "chilamousse-mirtilo",
            name: "Chilamousse de Mirtilo",
            description: "Massa amanteigada, mousse de mirtilo com toque de limão e calda de mirtilo.",
            prices: [{ value: 34 }],
            badges: ["carro-chefe"],
            photo: true,
            popular: true,
          },
          {
            id: "chilalima",
            name: "Chilalima",
            description: "Massa amanteigada, mousse de limão e marshmallow.",
            prices: [{ value: 26 }],
            photo: true,
          },
          {
            id: "red-velvet",
            name: "Red Velvet",
            description: "Massa aveludada com iogurte natural, ganache de chocolate branco e cream cheese.",
            prices: [{ value: 34 }],
            photo: true,
          },
          {
            id: "cheesecake",
            name: "Cheesecake",
            description: "Calda de frutas vermelhas ou caramelo com flor de sal.",
            prices: [{ value: 29 }],
            photo: true,
          },
          {
            id: "chilaoreo",
            name: "Chilaoreo",
            description: "Base de Oreo, mousse de ganache e cream cheese com Oreo, ganache meio amargo e gotas crocantes.",
            prices: [{ value: 34 }],
            photo: true,
          },
          {
            id: "chilanoffee",
            name: "Chilanoffee",
            description: "Massa amanteigada, doce de leite, banana, chantininho e canela.",
            prices: [{ value: 26 }],
            photo: true,
          },
          {
            id: "chilamousse-nutella",
            name: "Chilamousse de Nutella",
            description: "Base de chocolate amanteigada, mousse de chocolate branco, mousse de Nutella e ganache meio amargo.",
            prices: [{ value: 29 }],
            photo: true,
          },
        ],
      },
    ],
  },
];

/** Formata número como moeda brasileira (ex.: 3.5 → "R$ 3,50"). */
export function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/** Itens marcados como `popular`, usados na prévia da home. */
export function getPopularItems(): MenuItem[] {
  return cardapio.flatMap((c) => c.groups.flatMap((g) => g.items)).filter((i) => i.popular);
}
