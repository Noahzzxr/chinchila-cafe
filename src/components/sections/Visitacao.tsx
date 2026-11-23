/**
 * COMO FUNCIONA A VISITAÇÃO: regras, valores, supervisão veterinária e hábitos noturnos.
 */
import Image from "next/image";
import cartoon from "../../../public/images/chinchilas-cartoon.webp";
import { site } from "@/data/site";
import { InfoCard } from "../InfoCard";
import { Reveal } from "../Reveal";
import { SectionTitle } from "../SectionTitle";
import { CalendarCheckIcon, HandStopIcon, MoonIcon, StethoscopeIcon, TimerIcon, UsersIcon } from "../Icons";
import { RaspberryIcon } from "../Icons";

const prices = [
  { value: "R$ 25,00", text: "por pessoa" },
  { value: "R$ 15,00", text: "por pessoa para quem está consumindo na cafeteria" },
  { value: "Sábados", text: "R$ 25,00 por pessoa, independentemente do consumo" },
];

export function Visitacao() {
  return (
    <section
      id="visitacao"
      aria-labelledby="visitacao-title"
      className="relative overflow-hidden bg-creme-escuro py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            id="visitacao-title"
            script="Direto ao ponto"
            title="Como funciona a visitação"
            description="O que você precisa saber antes de nos visitar."
          />
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-tinta/90">
            <p>
              O <strong className="text-carmim">Chinchila Café</strong> é uma cafeteria que oferece, de forma{" "}
              <strong>opcional</strong>, a experiência de visitação às chinchilas. É uma atividade extra, paga mediante
              taxa, que garante a manutenção do ambiente e o conforto dos animais.
            </p>
            <p>
              A taxa é <strong>por pessoa</strong>, com o mesmo valor para adultos e crianças.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto aspect-square max-w-xs overflow-hidden rounded-full bg-creme shadow-suave ring-4 ring-ouro/60">
              <Image
                src={cartoon}
                alt="Ilustração cartoon das cinco chinchilas abraçadas, a do meio segurando um morango."
                sizes="320px"
                className="h-full w-full scale-[1.12] object-cover object-center"
              />
            </div>
          </Reveal>
        </div>

        {/* Card de valores */}
        <Reveal className="mt-14">
          <div className="textura-patinhas overflow-hidden rounded-card bg-carmim text-white shadow-elevada">
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {prices.map((p) => (
                <div key={p.value} className="bg-carmim px-6 py-8 text-center">
                  <p className="font-display text-4xl font-bold text-ouro-gradiente">{p.value}</p>
                  <p className="mt-2 text-white/90">{p.text}</p>
                </div>
              ))}
            </div>
            <ul className="grid gap-4 border-t border-white/15 px-6 py-7 sm:grid-cols-3 sm:px-8">
              <li className="flex gap-3">
                <TimerIcon className="h-6 w-6 shrink-0 text-ouro-claro" />
                <span>
                  Permanência máxima no mezanino: <strong>20 minutos</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <UsersIcon className="h-6 w-6 shrink-0 text-ouro-claro" />
                <span>
                  Por <strong>ordem de chegada</strong>, sem necessidade de agendamento
                </span>
              </li>
              <li className="flex gap-3">
                <CalendarCheckIcon className="h-6 w-6 shrink-0 text-ouro-claro" />
                <span>
                  Visitação de <strong>quarta a domingo</strong>. Segunda e terça são dias de manutenção do mezanino,
                  mas <strong className="text-ouro-claro uppercase">a cafeteria abre normalmente</strong>.
                </span>
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal>
            <InfoCard variant="gold" icon={<StethoscopeIcon className="h-6 w-6" />} title="Supervisão veterinária">
              <p>
                <strong className="text-tinta">{site.vet.name}</strong>
                <br />
                {site.vet.role} · {site.vet.crmv}
              </p>
              <p>
                As visitas seguem protocolos de higiene, supervisão contínua, controle de visitantes e orientações de
                conduta.
              </p>
            </InfoCard>
          </Reveal>
          <Reveal delay={120}>
            <InfoCard icon={<MoonIcon className="h-6 w-6" />} title="Hábitos noturnos">
              <p>
                As chinchilas são <strong>noturnas</strong>, não são treinadas e decidem sozinhas quando correr,
                explorar, descansar ou ficar no esconderijo. <strong>Não garantimos interação direta.</strong>
              </p>
              <p className="flex gap-2 rounded-xl bg-creme p-3 text-sm">
                <RaspberryIcon className="h-5 w-5 shrink-0" />
                <span>
                  Para vê-las mais ativas, venha <strong>depois das 18h30</strong>, especialmente sábado e domingo à
                  noite.
                </span>
              </p>
            </InfoCard>
          </Reveal>
        </div>

        {/* Aviso principal */}
        <Reveal className="mt-8">
          <div
            role="note"
            className="flex flex-col items-center gap-4 rounded-card bg-framboesa px-6 py-7 text-center text-white shadow-elevada ring-2 ring-carmim-escuro sm:flex-row sm:text-left"
          >
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-framboesa">
              <HandStopIcon className="h-9 w-9" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
                Não é permitido pegar as chinchilas!
              </p>
              <p className="mt-1 text-white/95">
                São animais exóticos e não se interage com elas como com gatos e outros pets.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
