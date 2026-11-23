/**
 * Badge: etiqueta visual do cardápio ("Vegana", "Sem glúten", "Best-seller"…).
 */
import type { BadgeType } from "@/data/cardapio";

const styles: Record<BadgeType, { label: string; className: string }> = {
  vegana: { label: "Vegana", className: "bg-emerald-50 text-emerald-800 ring-emerald-200" },
  "sem-gluten": { label: "Sem glúten", className: "bg-amber-50 text-amber-900 ring-amber-200" },
  "sem-lactose": { label: "Sem lactose", className: "bg-sky-50 text-sky-900 ring-sky-200" },
  "best-seller": { label: "Best-seller!", className: "bg-carmim text-white ring-carmim-escuro" },
  "carro-chefe": { label: "Carro-chefe da casa!", className: "bg-ouro-gradiente text-tinta ring-ouro" },
};

export function Badge({ type, className = "" }: { type: BadgeType; className?: string }) {
  const s = styles[type];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.7rem] font-bold tracking-wide uppercase ring-1 ${s.className} ${className}`}
    >
      {s.label}
    </span>
  );
}
