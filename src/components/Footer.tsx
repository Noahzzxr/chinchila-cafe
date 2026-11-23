/**
 * Rodapé carmim com logo, endereço, contato, horários e redes sociais.
 */
import { openingHours, site } from "@/data/site";
import { Logo } from "./Logo";
import { ClockIcon, FacebookIcon, InstagramIcon, MapPinIcon, PhoneIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="textura-patinhas bg-carmim text-white">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-24 sm:px-6 sm:pb-14">
        <p className="text-center font-script text-3xl leading-snug text-ouro-gradiente sm:text-5xl">
          {site.tagline}
        </p>
        <div className="mx-auto my-10 h-px max-w-3xl bg-ouro-gradiente opacity-70" aria-hidden />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-sm leading-relaxed text-white/85">
              Cafeteria temática em Florianópolis, com visitação opcional às chinchilas.
            </p>
          </div>

          <div>
            <h2 className="titulo-espacado mb-4 text-sm text-ouro-claro">Endereço</h2>
            <address className="flex gap-2 text-sm leading-relaxed not-italic text-white/90">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-ouro" />
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city} - {site.address.state}
                <br />
                CEP {site.address.zip}
              </a>
            </address>
          </div>

          <div>
            <h2 className="titulo-espacado mb-4 text-sm text-ouro-claro">Horários</h2>
            <ul className="space-y-1.5 text-sm text-white/90">
              {openingHours.map((h) => (
                <li key={h.label} className="flex gap-2">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-ouro" />
                  <span>
                    <strong className="font-semibold">{h.label}:</strong> {h.display}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="titulo-espacado mb-4 text-sm text-ouro-claro">Contato</h2>
            <ul className="space-y-3 text-sm text-white/90">
              <li>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                  <PhoneIcon className="h-5 w-5 text-ouro" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                  <InstagramIcon className="h-5 w-5 text-ouro" />
                  Instagram {site.instagramHandle}
                </a>
              </li>
              <li>
                <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                  <FacebookIcon className="h-5 w-5 text-ouro" />
                  Facebook {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-white/75">
          © {new Date().getFullYear()} Chinchila Café · Florianópolis/SC · Responsável técnica: {site.vet.name},{" "}
          {site.vet.crmv}
        </p>
      </div>
    </footer>
  );
}
