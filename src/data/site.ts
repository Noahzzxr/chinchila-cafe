/**
 * Informações institucionais do Chinchila Café.
 * Centralizadas aqui para que telefone, endereço e horários
 * sejam editados em um único lugar.
 */

export const site = {
  name: "Chinchila Café",
  /** Defina NEXT_PUBLIC_SITE_URL na Vercel com o domínio definitivo. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://chinchilacafe.com.br",
  tagline: "Saboreie e se encante no fascinante mundo das chinchilas!",
  phoneDisplay: "(48) 99912-4407",
  phoneE164: "+5548999124407",
  whatsappUrl: "https://wa.me/5548999124407",
  instagramHandle: "@chinchilacafeoficial",
  instagramUrl: "https://www.instagram.com/chinchilacafeoficial",
  facebookUrl: "https://www.facebook.com/chinchilacafeoficial",
  jobsFormUrl:
    "https://docs.google.com/forms/d/1tVX5zFMXbo9GB65-LltlkdaDvXeTraNc4elgpzlp-ZU/viewform",
  address: {
    street: "Av. Ver. Nagib Jabor, 452 - Loja 01",
    district: "Capoeiras",
    city: "Florianópolis",
    state: "SC",
    zip: "88090-100",
    full: "Av. Ver. Nagib Jabor, 452 - Loja 01 - Capoeiras, Florianópolis - SC, 88090-100",
  },
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Chinchila Café, Av. Ver. Nagib Jabor, 452 - Capoeiras, Florianópolis - SC, 88090-100",
    ),
  mapsEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Av. Ver. Nagib Jabor, 452 - Capoeiras, Florianópolis - SC, 88090-100") +
    "&output=embed",
  vet: {
    name: "Dra. Marina Vieira",
    role: "Veterinária Responsável Técnica",
    crmv: "CRMV/SC 9191",
  },
} as const;

/** Links da navegação principal (âncoras da home + rota do cardápio). */
export const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Visitação", href: "/#visitacao" },
  { label: "Cardápio", href: "/cardapio" },
  { label: "Especiais", href: "/cardapio#especiais" },
  { label: "Loja", href: "/#loja" },
  { label: "Trabalhe Conosco", href: "/#trabalhe-conosco" },
  { label: "Contato", href: "/#contato" },
] as const;

/**
 * Horário de funcionamento.
 * `days` usa a numeração do JS (0 = domingo … 6 = sábado),
 * para que a tabela destaque o dia atual.
 * `opens`/`closes` no formato HH:MM alimentam o schema.org.
 */
export type HoursRow = {
  label: string;
  days: number[];
  opens: string;
  closes: string;
  display: string;
};

export const openingHours: HoursRow[] = [
  { label: "Segunda a quinta", days: [1, 2, 3, 4], opens: "13:00", closes: "20:00", display: "13h às 20h" },
  { label: "Sexta", days: [5], opens: "13:00", closes: "18:00", display: "13h às 18h" },
  { label: "Sábado", days: [6], opens: "18:00", closes: "23:00", display: "18h às 23h" },
  { label: "Domingo", days: [0], opens: "13:00", closes: "22:00", display: "13h às 22h" },
];

/** Dias sem visitação ao mezanino (a cafeteria abre normalmente). */
export const noVisitationDays = [1, 2];

/** Turma de chinchilas da casa. */
export const chinchilas = ["Pompom", "Narizinho", "Pitoca", "Dentinho", "Tufinho"] as const;
