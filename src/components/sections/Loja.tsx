/**
 * LOJA CHINCHILA: produtos da marca, vendidos na loja física.
 */
import { site } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionTitle } from "../SectionTitle";
import { BagIcon, GemIcon, MugIcon, ShirtIcon, WhatsAppIcon } from "../Icons";

const products = [
  { name: "Camisetas", icon: ShirtIcon },
  { name: "Canecas", icon: MugIcon },
  { name: "Ecobags", icon: BagIcon },
  { name: "Semijoias", icon: GemIcon },
];

export function Loja() {
  return (
    <section id="loja" aria-labelledby="loja-title" className="textura-patinhas bg-carmim py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            id="loja-title"
            tone="dark"
            script="Para levar para casa"
            title="Loja Chinchila"
            description="Leve um pedacinho do Mundo das Chinchilas para casa: produtos exclusivos da nossa marca."
          />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {products.map(({ name, icon: Icon }, i) => (
            <Reveal as="li" key={name} delay={i * 90}>
              <article className="flex h-full flex-col items-center gap-4 rounded-card bg-creme p-6 text-center text-tinta shadow-elevada ring-1 ring-ouro/60 transition hover:-translate-y-1 motion-reduce:hover:translate-y-0 sm:p-8">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-carmim text-ouro-claro ring-4 ring-ouro/40">
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="titulo-espacado text-base text-carmim sm:text-lg">{name}</h3>
                <p className="text-sm text-chinchila-texto">Disponível na loja física</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ouro-gradiente px-7 py-3.5 font-bold text-tinta shadow-suave transition hover:brightness-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Consultar disponibilidade no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
