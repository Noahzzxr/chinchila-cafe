/**
 * SectionTitle: título padrão das seções.
 * - `script`: frase curta em letra cursiva dourada acima do título (opcional).
 * - `title`: título em caixa alta com letras espaçadas.
 * - `tone`: "light" para fundos creme, "dark" para fundos carmim.
 */
import type { ReactNode } from "react";
import { RaspberryDivider } from "./Ornaments";

type SectionTitleProps = {
  script?: string;
  title: string;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
  as?: "h1" | "h2";
  id?: string;
};

export function SectionTitle({
  script,
  title,
  description,
  tone = "light",
  align = "center",
  as: Heading = "h2",
  id,
}: SectionTitleProps) {
  const dark = tone === "dark";
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {script && (
        <p
          className={`font-script text-3xl leading-none sm:text-4xl ${dark ? "text-ouro-gradiente" : "text-ouro-texto"}`}
        >
          {script}
        </p>
      )}
      <Heading
        id={id}
        className={`titulo-espacado text-xl sm:text-2xl md:text-3xl ${dark ? "text-white" : "text-carmim"}`}
      >
        {title}
      </Heading>
      <RaspberryDivider tone={tone} className={align === "center" ? "" : "-ml-1"} />
      {description && (
        <div
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? "text-white/90" : "text-chinchila-texto"}`}
        >
          {description}
        </div>
      )}
    </div>
  );
}
