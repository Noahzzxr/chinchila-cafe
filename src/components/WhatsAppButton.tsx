/**
 * Botão flutuante de WhatsApp (canto inferior direito).
 */
import { site } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp (abre em nova aba)"
      className="fixed right-4 bottom-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1f8f4e] text-white shadow-elevada ring-4 ring-white/70 transition hover:scale-105 hover:bg-[#187a41] sm:right-6 sm:bottom-6 motion-reduce:hover:scale-100"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
