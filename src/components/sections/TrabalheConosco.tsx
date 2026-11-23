/**
 * TRABALHE CONOSCO: convite e link para o formulário de candidatura.
 */
import { site } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionTitle } from "../SectionTitle";
import { ExternalIcon, PawIcon } from "../Icons";

export function TrabalheConosco() {
  return (
    <section id="trabalhe-conosco" aria-labelledby="trabalhe-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-white px-6 py-12 text-center shadow-suave ring-2 ring-ouro/60 sm:px-12">
            <PawIcon className="absolute -top-4 -left-4 h-28 w-28 -rotate-12 text-carmim/5" />
            <PawIcon className="absolute -right-6 -bottom-6 h-36 w-36 rotate-12 text-carmim/5" />
            <div className="relative">
              <SectionTitle
                id="trabalhe-title"
                script="Trabalhe conosco"
                title="Faça parte da nossa família"
                description={
                  <p>
                    Gosta de café, de gente e de animais? Estamos sempre em busca de pessoas cuidadosas e acolhedoras
                    para fazer parte do Mundo das Chinchilas. Preencha o formulário e conte um pouco sobre você.
                  </p>
                }
              />
              <a
                href={site.jobsFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ouro-gradiente px-8 py-4 font-bold text-tinta shadow-suave transition hover:-translate-y-0.5 hover:brightness-105 motion-reduce:hover:translate-y-0"
              >
                Quero me candidatar
                <ExternalIcon className="h-5 w-5" />
                <span className="sr-only">(abre o formulário em nova aba)</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
