/**
 * HERO: título, subtítulo, CTAs e a ilustração realista da turma.
 * A ilustração tem fundo branco, então fica dentro de uma moldura creme
 * (nunca direto sobre o carmim).
 */
import Image from "next/image";
import Link from "next/link";
import realista from "../../../public/images/chinchilas-realista.webp";
import { HeroPaws } from "../Ornaments";
import { ArrowRightIcon, CalendarCheckIcon, CupIcon, StethoscopeIcon } from "../Icons";

const highlights = [
  { icon: CalendarCheckIcon, title: "Visita sem agendamento", text: "Por ordem de chegada, de quarta a domingo." },
  { icon: StethoscopeIcon, title: "Supervisão veterinária", text: "Bem-estar dos animais em primeiro lugar." },
  { icon: CupIcon, title: "Tortas e cafés autorais", text: "Receitas da casa, do espresso às Chilatortas." },
];

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative">
      <div className="textura-patinhas relative overflow-hidden bg-carmim pt-28 pb-20 text-white sm:pt-32 lg:pb-28">
        {/* brilho suave para dar profundidade ao carmim */}
        <div
          className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-framboesa/40 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div className="relative text-center lg:text-left">
            <HeroPaws />
            <div className="relative">
              <p className="font-script text-3xl text-ouro-gradiente sm:text-4xl">Bem-vindos à nossa toca</p>
              <h1
                id="hero-title"
                className="mt-3 font-display text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-6xl"
              >
                Saboreie e se encante no fascinante{" "}
                <span className="text-ouro-gradiente">Mundo das Chinchilas!</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90 lg:mx-0">
                Cafeteria temática em Florianópolis com tortas incríveis, cafés especiais e a experiência opcional de
                visitar nossas chinchilas.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Link
                  href="/cardapio"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ouro-gradiente px-7 py-3.5 font-bold text-tinta shadow-suave transition hover:-translate-y-0.5 hover:brightness-105 motion-reduce:hover:translate-y-0"
                >
                  Ver cardápio
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <a
                  href="#visitacao"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-bold text-white ring-2 ring-ouro/80 transition hover:bg-carmim-escuro"
                >
                  Como funciona a visita
                </a>
              </div>
            </div>
          </div>

          {/* Ilustração em moldura creme */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-2 rounded-[2rem] sm:-inset-3 bg-ouro-gradiente opacity-90" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.6rem] bg-white shadow-elevada">
              <Image
                src={realista}
                alt="Ilustração realista das cinco chinchilas do Chinchila Café, em tons de cinza e bege, cercadas de framboesas."
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 560px, (min-width: 640px) 576px, 92vw"
                className="animate-breathe aspect-[16/11] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Faixa com 3 destaques, sobreposta à borda do hero */}
      <div className="relative z-10 mx-auto -mt-10 max-w-6xl px-4 sm:px-6">
        <ul className="grid gap-3 rounded-card bg-white p-4 shadow-elevada ring-1 ring-ouro/50 sm:grid-cols-3 sm:gap-0 sm:p-2">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`flex items-center gap-4 px-3 py-2 sm:px-5 sm:py-4 ${i > 0 ? "sm:border-l sm:border-chinchila/50" : ""}`}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-carmim text-ouro-claro">
                <Icon className="h-6 w-6" />
              </span>
              <span>
                <strong className="block font-display text-lg leading-tight text-carmim">{title}</strong>
                <span className="text-sm text-chinchila-texto">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
