import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Lato } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { openingHours, site } from "@/data/site";
import "./globals.css";

/* Fontes via next/font: auto-hospedadas, sem layout shift */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const title = "Chinchila Café | Cafeteria temática com chinchilas em Florianópolis";
const description =
  "Cafeteria temática em Florianópolis (Capoeiras) com tortas incríveis, cafés especiais e visitação opcional às chinchilas, com supervisão veterinária e sem agendamento.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Chinchila Café" },
  description,
  keywords: [
    "Chinchila Café",
    "cafeteria temática",
    "chinchilas",
    "café em Florianópolis",
    "Capoeiras",
    "tortas",
    "cafés especiais",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/images/og-chinchilas.jpg",
        width: 1200,
        height: 630,
        alt: "Ilustração realista das cinco chinchilas do Chinchila Café com framboesas.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-chinchilas.jpg"],
  },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#C0103C",
};

/** Dados estruturados schema.org (CafeOrCoffeeShop) */
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/og-chinchilas.jpg`,
  logo: `${site.url}/images/logo.png`,
  telephone: site.phoneE164,
  servesCuisine: ["Café", "Confeitaria", "Salgados"],
  priceRange: "R$",
  menu: `${site.url}/cardapio`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  openingHoursSpecification: openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days.map((d) => `https://schema.org/${dayNames[d]}`),
    opens: h.opens,
    closes: h.closes,
  })),
  sameAs: [site.instagramUrl, site.facebookUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${cormorant.variable} ${greatVibes.variable} ${lato.variable}`}>
      <body className="min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
