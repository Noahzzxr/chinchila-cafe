/**
 * ATENÇÃO PAPAIS E MAMÃES: regras para visitas com crianças.
 */
import Image from "next/image";
import cartoon from "../../../public/images/chinchilas-cartoon.webp";
import { Reveal } from "../Reveal";
import { AlertIcon, RaspberryIcon } from "../Icons";

const rules = [
  <>O espaço das chinchilas <strong>não é uma área kids</strong>.</>,
  <>É <strong>proibido</strong> que crianças subam ao mezanino <strong>sem o responsável</strong>.</>,
  <>
    Conversem com os filhos antes da visita: nada de gritar ou bater no vidro.{" "}
    <strong>Assustar um animal não é engraçado!</strong>
  </>,
  <>Não é permitido qualquer ato para acordar as chinchilas se elas estiverem dormindo.</>,
];

export function Pais() {
  return (
    <section id="pais" aria-labelledby="pais-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-elevada ring-2 ring-ouro/60 md:grid-cols-[2fr_3fr]">
            <div className="relative flex items-center justify-center bg-gradient-to-br from-creme via-rosa/30 to-creme-escuro p-6">
              <div className="aspect-square w-full max-w-sm overflow-hidden">
                <Image
                  src={cartoon}
                  alt="As cinco chinchilas em versão cartoon, abraçadas e sorridentes."
                  sizes="(min-width: 768px) 380px, 80vw"
                  className="h-full w-full scale-[1.1] object-cover"
                />
              </div>
            </div>

            <div className="p-7 sm:p-10">
              <p className="inline-flex items-center gap-2 rounded-full bg-framboesa px-4 py-1.5 text-sm font-bold tracking-wide text-white uppercase">
                <AlertIcon className="h-4 w-4" />
                Importante
              </p>
              <h2 id="pais-title" className="mt-4 font-display text-3xl font-bold text-carmim sm:text-4xl">
                Atenção, papais e mamães!
              </h2>

              <ul className="mt-6 space-y-4">
                {rules.map((rule, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed text-tinta/90">
                    <RaspberryIcon className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-dashed border-chinchila pt-6 leading-relaxed text-tinta/90">
                Se você não concorda com essas condições, opte por não visitá-las.{" "}
                <span className="font-script text-2xl leading-none text-ouro-texto">
                  Temos certeza que, ainda assim, sua experiência será mágica e inesquecível!
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
