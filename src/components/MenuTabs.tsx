"use client";

/**
 * MenuTabs: abas acessíveis do cardápio completo (padrão WAI-ARIA Tabs).
 * - Setas ←/→, Home e End navegam entre as abas.
 * - A aba ativa fica sincronizada com o hash da URL (ex.: /cardapio#especiais).
 * - Todos os painéis são renderizados no HTML (bom para SEO); só o ativo fica visível.
 */
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { MenuCategory } from "@/data/cardapio";
import { MenuCard } from "./MenuCard";

export function MenuTabs({ categories }: { categories: MenuCategory[] }) {
  const [active, setActive] = useState(categories[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Lê o hash ao carregar e quando ele muda (links "Especiais" no header)
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      if (categories.some((c) => c.id === hash)) setActive(hash);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [categories]);

  const select = (id: string, focus = false) => {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
    if (focus) tabRefs.current[categories.findIndex((c) => c.id === id)]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = categories.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      select(categories[next].id, true);
    }
  };

  return (
    <div>
      {/* Lista de abas: rolagem horizontal no celular */}
      <div className="sticky top-18 z-30 -mx-4 bg-creme/95 px-4 py-3 backdrop-blur sm:top-20 sm:mx-0 sm:px-0">
        <div
          role="tablist"
          aria-label="Categorias do cardápio"
          className="flex snap-x gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible"
        >
          {categories.map((c, i) => {
            const selected = c.id === active;
            return (
              <button
                key={c.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`tab-${c.id}`}
                aria-selected={selected}
                aria-controls={`painel-${c.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(c.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`shrink-0 snap-start rounded-full px-5 py-2.5 text-sm font-bold tracking-wide whitespace-nowrap transition ${
                  selected
                    ? "bg-carmim text-white shadow-suave"
                    : "bg-white text-tinta ring-1 ring-chinchila hover:ring-2 hover:ring-ouro"
                }`}
              >
                {c.title}
              </button>
            );
          })}
        </div>
      </div>

      {categories.map((c) => (
        <section
          key={c.id}
          id={`painel-${c.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${c.id}`}
          hidden={c.id !== active}
          tabIndex={0}
          className="mt-8 focus-visible:outline-offset-8"
        >
          <header className="text-center">
            <h2 className="titulo-espacado text-xl text-carmim sm:text-2xl">{c.title}</h2>
            {c.intro && <p className="mt-2 font-script text-2xl text-ouro-texto sm:text-3xl">{c.intro}</p>}
          </header>

          {c.groups.map((g, gi) => (
            <div key={g.title ?? gi} className="mt-10">
              {g.title && (
                <h3 className="mb-5 flex items-center gap-3 font-display text-2xl font-bold text-tinta">
                  <span className="h-px flex-1 bg-ouro-gradiente" aria-hidden />
                  {g.title}
                  <span className="h-px flex-1 bg-ouro-gradiente" aria-hidden />
                </h3>
              )}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
