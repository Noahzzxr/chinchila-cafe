/**
 * HORÁRIO DE FUNCIONAMENTO
 */
import { HoursTable } from "../HoursTable";
import { Reveal } from "../Reveal";
import { SectionTitle } from "../SectionTitle";

export function Horario() {
  return (
    <section id="horario" aria-labelledby="horario-title" className="bg-creme-escuro py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle id="horario-title" script="Estamos te esperando" title="Horário de funcionamento" />
        </Reveal>
        <Reveal className="mt-10" delay={100}>
          <HoursTable />
        </Reveal>
      </div>
    </section>
  );
}
