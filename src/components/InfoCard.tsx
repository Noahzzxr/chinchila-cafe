/**
 * InfoCard: card informativo com ícone, título e conteúdo livre.
 * `variant="alert"` deixa o card em destaque vermelho (avisos importantes).
 */
import type { ReactNode } from "react";

type InfoCardProps = {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  variant?: "default" | "alert" | "gold";
  className?: string;
};

const variants = {
  default: {
    card: "bg-white ring-1 ring-chinchila/50",
    icon: "bg-carmim/10 text-carmim",
    title: "text-carmim",
    body: "text-tinta/85",
  },
  gold: {
    card: "bg-white ring-2 ring-ouro/70",
    icon: "bg-ouro-gradiente text-tinta",
    title: "text-carmim",
    body: "text-tinta/85",
  },
  alert: {
    card: "bg-framboesa text-white ring-2 ring-carmim-escuro",
    icon: "bg-white text-framboesa",
    title: "text-white",
    body: "text-white",
  },
};

export function InfoCard({ icon, title, children, variant = "default", className = "" }: InfoCardProps) {
  const v = variants[variant];
  return (
    <article className={`flex h-full flex-col gap-4 rounded-card p-6 shadow-suave sm:p-7 ${v.card} ${className}`}>
      <div className="flex items-center gap-3">
        {icon && (
          <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${v.icon}`}>{icon}</span>
        )}
        <h3 className={`font-display text-2xl leading-tight font-bold ${v.title}`}>{title}</h3>
      </div>
      <div className={`space-y-3 leading-relaxed ${v.body}`}>{children}</div>
    </article>
  );
}
