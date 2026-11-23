/**
 * Página única (home) com rolagem por âncoras.
 * A ordem das seções segue o briefing.
 */
import { Hero } from "@/components/sections/Hero";
import { Turma } from "@/components/sections/Turma";
import { Visitacao } from "@/components/sections/Visitacao";
import { Pais } from "@/components/sections/Pais";
import { Horario } from "@/components/sections/Horario";
import { CardapioPreview } from "@/components/sections/CardapioPreview";
import { Loja } from "@/components/sections/Loja";
import { TrabalheConosco } from "@/components/sections/TrabalheConosco";
import { Contato } from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Turma />
      <Visitacao />
      <Pais />
      <Horario />
      <CardapioPreview />
      <Loja />
      <TrabalheConosco />
      <Contato />
    </>
  );
}
