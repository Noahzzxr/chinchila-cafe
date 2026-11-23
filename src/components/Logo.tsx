/**
 * Logo: medalhão da chinchila com xícara + assinatura "Chinchila Café" em script dourada
 * e a linha curva embaixo, como na arte oficial.
 */
import Image from "next/image";
import logo from "../../public/images/logo.png";

type LogoProps = {
  size?: "sm" | "lg";
  className?: string;
};

export function Logo({ size = "sm", className = "" }: LogoProps) {
  const img = size === "lg" ? "h-20 w-20" : "h-12 w-12 sm:h-14 sm:w-14";
  const text = size === "lg" ? "text-4xl" : "text-[1.7rem] sm:text-3xl";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src={logo}
        alt=""
        className={`${img} rounded-full ring-1 ring-ouro/70`}
        sizes={size === "lg" ? "80px" : "56px"}
        priority={size === "sm"}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-script ${text} text-ouro-gradiente pr-1 pb-1`}>Chinchila Café</span>
        {/* linha curva dourada sob a assinatura */}
        <svg viewBox="0 0 120 8" className="-mt-1 h-2 w-full" aria-hidden focusable={false} preserveAspectRatio="none">
          <path d="M2 6 Q60 -2 118 5" fill="none" stroke="#D4A94F" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
    </span>
  );
}
