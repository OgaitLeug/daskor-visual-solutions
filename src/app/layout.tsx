import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections";
import { site } from "@/content/site";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "DASKOR — Soluções Visuais", template: "%s — DASKOR" },
  description:
    "Comunicação visual da criação à execução. Marca, Digital, Produção, Espaço e Estrada. Lisboa · Projetos em todo o país.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DASKOR — Ideias que ganham forma.",
    description: "Comunicação visual da criação à execução.",
    locale: "pt_PT",
    type: "website",
    siteName: "DASKOR",
  },
  robots: { index: true, follow: true },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#conteudo">
          Saltar para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
