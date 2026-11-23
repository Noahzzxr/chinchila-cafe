"use client";

/**
 * HoursTable: tabela de horários que destaca o dia atual.
 * O dia é calculado no fuso de Florianópolis (America/Sao_Paulo),
 * no cliente, depois da hidratação (evita divergência servidor/cliente).
 */
import { useEffect, useState } from "react";
import { noVisitationDays, openingHours } from "@/data/site";

function todayInFloripa(): number {
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "America/Sao_Paulo" }).format(
    new Date(),
  );
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);
}

export function HoursTable() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(todayInFloripa());
  }, []);

  const noVisitToday = today !== null && noVisitationDays.includes(today);

  return (
    <div className="overflow-hidden rounded-card bg-white shadow-suave ring-1 ring-ouro/60">
      <table className="w-full text-left">
        <caption className="sr-only">Horário de funcionamento do Chinchila Café</caption>
        <thead className="bg-carmim text-white">
          <tr>
            <th scope="col" className="px-5 py-3 text-xs font-bold tracking-[0.2em] uppercase sm:px-7">
              Dia
            </th>
            <th scope="col" className="px-5 py-3 text-right text-xs font-bold tracking-[0.2em] uppercase sm:px-7">
              Cafeteria
            </th>
          </tr>
        </thead>
        <tbody>
          {openingHours.map((row) => {
            const isToday = today !== null && row.days.includes(today);
            return (
              <tr
                key={row.label}
                className={`border-t border-chinchila/50 transition-colors ${isToday ? "bg-ouro-claro/40" : ""}`}
                aria-current={isToday ? "date" : undefined}
              >
                <th scope="row" className="px-5 py-4 font-display text-xl font-bold sm:px-7">
                  <span className="flex flex-wrap items-center gap-2">
                    {row.label}
                    {isToday && (
                      <span className="rounded-full bg-carmim px-2.5 py-0.5 font-sans text-[0.7rem] font-bold tracking-wide text-white uppercase">
                        Hoje
                      </span>
                    )}
                  </span>
                </th>
                <td className="px-5 py-4 text-right font-display text-xl font-semibold whitespace-nowrap text-carmim sm:px-7">
                  {row.display}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="border-t border-chinchila/50 bg-creme px-5 py-4 text-sm leading-relaxed text-tinta/85 sm:px-7">
        <strong className="text-carmim">Segunda e terça</strong> não há visitação às chinchilas (manutenção do
        mezanino), mas a <strong>cafeteria funciona normalmente</strong>.
        {noVisitToday && (
          <span className="mt-1 block font-semibold text-carmim">
            Hoje o mezanino está em manutenção — venha pelo café e pelas tortas!
          </span>
        )}
      </p>
    </div>
  );
}
