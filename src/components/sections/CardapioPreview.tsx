/**
 * Prévia do cardápio na home: os itens marcados como `popular` em src/data/cardapio.ts.
 */
import Link from "next/link";
import { cardapio, getPopularItems } from "@/data/cardapio";
import { MenuCard } from "../MenuCard";
import { Reveal } from "../Reveal";
import { SectionTitle } from "../SectionTitle";
import { ArrowRightIcon } from "../Icons";

/** Descobre o nome da categoria de cada item para exibir no card. */
function categoryOf(id: string) {
  return cardapio.find((c) => c.groups.some((g) => g.items.some((i) => i.id === id)))?.title;
}

export function CardapioPreview() {
  // Na prévia, sem placeholders de foto: cards mais compactos
  const items = getPopularItems().map((i) => ({ ...i, photo: false }));

  return (
    <section id="cardapio" aria-labelledby="cardapio-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            id="cardapio-title"
            script="Os queridinhos da casa"
            title="Cardápio"
            description="Uma prévia dos mais pedidos. Salgados, cafés, especiais e as famosas Chilatortas estão no cardápio completo."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 100}>
              <MenuCard item={item} category={categoryOf(item.id)} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/cardapio"
            className="inline-flex items-center gap-2 rounded-full bg-carmim px-8 py-4 font-bold text-white shadow-suave transition hover:bg-carmim-escuro"
          >
            Ver cardápio completo
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
