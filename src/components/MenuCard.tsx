/**
 * MenuCard: card de item do cardápio.
 * Mostra nome, descrição, variantes (sabores), preços e badges.
 * No hover: leve elevação e borda dourada.
 */
import { formatPrice, type MenuItem } from "@/data/cardapio";
import { Badge } from "./Badge";
import { PawIcon, RaspberryIcon } from "./Icons";

type MenuCardProps = {
  item: MenuItem;
  /** Mostra a categoria acima do nome (usado na prévia da home). */
  category?: string;
};

export function MenuCard({ item, category }: MenuCardProps) {
  const singlePrice = item.prices.length === 1 && !item.prices[0].label;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-suave ring-1 ring-chinchila/40 transition duration-300 hover:-translate-y-1 hover:shadow-elevada hover:ring-2 hover:ring-ouro motion-reduce:hover:translate-y-0">
      {item.photo && (
        // Placeholder de foto: troque por <Image> quando houver fotos reais das tortas.
        <div
          className="relative grid aspect-[4/3] place-items-center bg-gradient-to-br from-creme-escuro via-rosa/40 to-creme"
          role="img"
          aria-label={`Foto ilustrativa: ${item.name} (em breve)`}
        >
          <PawIcon className="h-14 w-14 text-carmim/20" />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-chinchila-texto">
            Foto em breve
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        {category && (
          <p className="text-xs font-bold tracking-[0.2em] text-ouro-texto uppercase">{category}</p>
        )}

        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl leading-tight font-bold text-tinta">{item.name}</h3>
            {item.tagline && <p className="text-sm text-chinchila-texto italic">{item.tagline}</p>}
          </div>
          {singlePrice && (
            <p className="shrink-0 font-display text-2xl font-bold whitespace-nowrap text-carmim">
              {formatPrice(item.prices[0].value)}
            </p>
          )}
        </div>

        {item.badges && item.badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.badges.map((b) => (
              <Badge key={b} type={b} />
            ))}
          </div>
        )}

        {item.description && <p className="leading-relaxed text-tinta/80">{item.description}</p>}

        {/* Sabores (empanadas, coxinhas) */}
        {item.variants && (
          <ul className="space-y-2.5 border-t border-dashed border-chinchila pt-3">
            {item.variants.map((v) => (
              <li key={v.name} className="flex gap-2">
                <RaspberryIcon className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="flex flex-wrap items-center gap-1.5 font-bold text-tinta">
                    {v.name}
                    {v.badges?.map((b) => (
                      <Badge key={b} type={b} />
                    ))}
                  </p>
                  <p className="text-sm leading-relaxed text-tinta/75">{v.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Lista de preços por tamanho/versão */}
        {!singlePrice && (
          <dl className="space-y-1.5 border-t border-chinchila/60 pt-3">
            {item.prices.map((p) => (
              <div key={p.label ?? p.value} className="flex items-baseline gap-2">
                <dt className="text-sm text-tinta/80">{p.label}</dt>
                <span className="flex-1 border-b border-dotted border-chinchila" aria-hidden />
                <dd className="font-display text-xl font-bold whitespace-nowrap text-carmim">{formatPrice(p.value)}</dd>
              </div>
            ))}
          </dl>
        )}

        {item.note && <p className="text-sm font-semibold text-ouro-texto">{item.note}</p>}
      </div>
    </article>
  );
}
