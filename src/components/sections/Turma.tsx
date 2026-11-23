/**
 * CONHEÇA A TURMA: as cinco chinchilas da casa.
 */
import Image from "next/image";
import realista from "../../../public/images/chinchilas-realista.webp";
import { chinchilas } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionTitle } from "../SectionTitle";
import { PawIcon } from "../Icons";

export function Turma() {
  return (
    <section id="turma" aria-labelledby="turma-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle id="turma-title" script="Prazer, somos nós!" title="Conheça a turma" />
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <figure className="overflow-hidden rounded-card bg-white p-3 shadow-suave ring-1 ring-chinchila/50">
              <Image
                src={realista}
                alt="Pompom, Narizinho, Pitoca, Dentinho e Tufinho reunidos, em ilustração realista com framboesas ao redor."
                placeholder="blur"
                sizes="(min-width: 1024px) 600px, 92vw"
                className="aspect-[16/11] w-full rounded-[1rem] object-cover"
              />
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <blockquote className="relative rounded-card bg-carmim/5 p-6 sm:p-8">
                <p className="font-display text-2xl leading-snug font-semibold text-tinta sm:text-3xl">
                  “As chinchilas fazem parte da nossa família e o bem-estar delas está acima da vontade de qualquer
                  humano.”
                </p>
              </blockquote>
            </Reveal>

            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {chinchilas.map((name, i) => (
                <Reveal as="li" key={name} delay={i * 90}>
                  <div className="group flex h-full items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-suave ring-1 ring-chinchila/50 transition hover:ring-2 hover:ring-ouro">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-carmim text-rosa transition group-hover:rotate-12 motion-reduce:group-hover:rotate-0">
                      <PawIcon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-xl font-bold text-carmim">{name}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
