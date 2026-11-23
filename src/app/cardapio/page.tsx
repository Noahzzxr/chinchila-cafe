/**
 * /cardapio — cardápio completo em abas.
 * Os dados vêm de src/data/cardapio.ts.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { cardapio } from "@/data/cardapio";
import { MenuTabs } from "@/components/MenuTabs";
import { SectionTitle } from "@/components/SectionTitle";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Cardápio",
  description:
    "Cardápio completo do Chinchila Café: salgados, cafés e chás, bebidas frias, especiais quentes e gelados e as Chilatortas.",
  alternates: { canonical: "/cardapio" },
};

export default function CardapioPage() {
  return (
    <>
      <div className="textura-patinhas bg-carmim pt-28 pb-14 text-white sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            as="h1"
            tone="dark"
            script="Peça, saboreie, se encante"
            title="Cardápio"
            description="Salgados da casa, cafés especiais, bebidas geladas e as famosas Chilatortas. Preços em reais."
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-6 pb-20 sm:px-6 sm:pb-28">
        {/* Legenda das etiquetas */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-sm text-chinchila-texto">
          <span>Legenda:</span>
          <Badge type="vegana" />
          <Badge type="sem-gluten" />
          <Badge type="sem-lactose" />
          <Badge type="best-seller" />
          <Badge type="carro-chefe" />
        </div>

        <MenuTabs categories={cardapio} />

        <p className="mt-14 text-center text-sm text-chinchila-texto">
          Preços sujeitos a alteração. Quer visitar as chinchilas também?{" "}
          <Link href="/#visitacao" className="font-bold text-carmim underline underline-offset-4">
            Veja como funciona
          </Link>
          .
        </p>
      </div>
    </>
  );
}
