"use client";

/**
 * Header fixo carmim com logo, navegação e botão "Como chegar".
 * No mobile/tablet vira menu hambúrguer (fecha com Esc, clique em link ou redimensionamento).
 */
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { Logo } from "./Logo";
import { CloseIcon, MapPinIcon, MenuIcon } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sombra mais forte depois que a página rola
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Esc fecha o menu; voltar ao desktop também
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 80rem)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <header
      className={`textura-patinhas fixed inset-x-0 top-0 z-50 bg-carmim text-white transition-shadow ${
        scrolled ? "shadow-elevada" : ""
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-carmim"
      >
        Pular para o conteúdo
      </a>

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Link href="/#inicio" aria-label="Chinchila Café — página inicial" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Navegação principal" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-full px-3 py-2 text-sm font-semibold tracking-wide text-white/95 transition hover:bg-carmim-escuro hover:text-ouro-claro"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ouro-gradiente px-5 py-2.5 text-sm font-bold text-tinta shadow-suave transition hover:brightness-105 sm:inline-flex"
          >
            <MapPinIcon className="h-4 w-4" />
            Como chegar
            <span className="sr-only">(abre o Google Maps em nova aba)</span>
          </a>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-white ring-1 ring-white/30 transition hover:bg-carmim-escuro xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <nav
        id="menu-mobile"
        aria-label="Navegação principal (celular)"
        hidden={!open}
        className="border-t border-white/15 bg-carmim-escuro xl:hidden"
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-display text-xl font-semibold tracking-wide hover:bg-carmim hover:text-ouro-claro"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 pb-1">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-ouro-gradiente px-5 py-3 font-bold text-tinta"
            >
              <MapPinIcon className="h-5 w-5" />
              Como chegar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
