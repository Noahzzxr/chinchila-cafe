/**
 * LOCALIZAÇÃO E CONTATO: mapa embutido, endereço e canais.
 */
import { site } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionTitle } from "../SectionTitle";
import { FacebookIcon, InstagramIcon, MapPinIcon, WhatsAppIcon } from "../Icons";

export function Contato() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-creme-escuro py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle id="contato-title" script="Vem nos ver" title="Localização e contato" />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="flex flex-col gap-5">
            <div className="rounded-card bg-white p-6 shadow-suave ring-1 ring-chinchila/50 sm:p-7">
              <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-carmim">
                <MapPinIcon className="h-6 w-6" /> Endereço
              </h3>
              <address className="mt-3 leading-relaxed not-italic text-tinta/90">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city} - {site.address.state}
                <br />
                CEP {site.address.zip}
              </address>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-ouro-gradiente px-6 py-3 font-bold text-tinta shadow-suave transition hover:brightness-105"
              >
                <MapPinIcon className="h-5 w-5" />
                Como chegar
                <span className="sr-only">(abre o Google Maps em nova aba)</span>
              </a>
            </div>

            <ul className="grid gap-3">
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-card bg-white p-5 shadow-suave ring-1 ring-chinchila/50 transition hover:ring-2 hover:ring-ouro"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#1f8f4e] text-white">
                    <WhatsAppIcon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm text-chinchila-texto">Telefone e WhatsApp</span>
                    <strong className="font-display text-xl text-tinta">{site.phoneDisplay}</strong>
                  </span>
                </a>
              </li>
              <li className="grid grid-cols-2 gap-3">
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-card bg-white p-4 shadow-suave ring-1 ring-chinchila/50 transition hover:ring-2 hover:ring-ouro"
                >
                  <InstagramIcon className="h-6 w-6 shrink-0 text-carmim" />
                  <span className="min-w-0">
                    <span className="block text-sm text-chinchila-texto">Instagram</span>
                    <strong className="block truncate text-sm text-tinta">{site.instagramHandle}</strong>
                  </span>
                </a>
                <a
                  href={site.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-card bg-white p-4 shadow-suave ring-1 ring-chinchila/50 transition hover:ring-2 hover:ring-ouro"
                >
                  <FacebookIcon className="h-6 w-6 shrink-0 text-carmim" />
                  <span className="min-w-0">
                    <span className="block text-sm text-chinchila-texto">Facebook</span>
                    <strong className="block truncate text-sm text-tinta">{site.instagramHandle}</strong>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full min-h-[22rem] overflow-hidden rounded-card bg-white p-2 shadow-suave ring-1 ring-ouro/60">
              <iframe
                title="Mapa com a localização do Chinchila Café em Capoeiras, Florianópolis"
                src={site.mapsEmbedUrl}
                className="h-full min-h-[22rem] w-full rounded-[1rem] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
