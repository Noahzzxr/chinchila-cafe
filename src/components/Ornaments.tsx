/**
 * Ornamentos gráficos da marca: divisor dourado com framboesa
 * e a camada de patinhas usada sobre fundos carmim.
 */
import type { CSSProperties } from "react";
import { PawIcon, RaspberryIcon } from "./Icons";

/** Linha dourada fina com uma framboesa ao centro. */
export function RaspberryDivider({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const line = tone === "dark" ? "bg-ouro-gradiente opacity-80" : "bg-ouro-gradiente";
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden>
      <span className={`h-px w-10 sm:w-16 ${line}`} />
      <RaspberryIcon className="h-5 w-5" />
      <span className={`h-px w-10 sm:w-16 ${line}`} />
    </div>
  );
}

/**
 * Patinhas que surgem em sequência atrás do título do hero.
 * Posições fixas (sem aleatoriedade) para evitar diferença entre servidor e cliente.
 */
const heroPaws = [
  { top: "8%", left: "4%", rot: -24, size: 34 },
  { top: "22%", left: "14%", rot: -8, size: 28 },
  { top: "40%", left: "6%", rot: -30, size: 30 },
  { top: "58%", left: "18%", rot: -12, size: 26 },
  { top: "74%", left: "9%", rot: -20, size: 32 },
  { top: "12%", left: "46%", rot: 14, size: 24 },
  { top: "86%", left: "40%", rot: 18, size: 28 },
];

export function HeroPaws() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {heroPaws.map((p, i) => (
        <PawIcon
          key={i}
          className="animate-paw absolute text-rosa"
          style={
            {
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              "--paw-rot": `${p.rot}deg`,
              "--paw-opacity": 0.22,
              animationDelay: `${300 + i * 220}ms`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
