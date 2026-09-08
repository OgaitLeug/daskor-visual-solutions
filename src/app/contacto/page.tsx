import { Suspense } from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/content/site";
export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Fala-nos do teu projeto. Contacta a DASKOR por email, telefone ou WhatsApp.",
  alternates: { canonical: "/contacto/" },
};
export default function Contact() {
  return (
    <>
      <section className="page-heading section">
        <p className="eyebrow">VAMOS COMEÇAR</p>
        <h1>
          Fala-nos do
          <br />
          teu projeto<span>.</span>
        </h1>
        <p>
          Uma ideia, uma necessidade ou uma arte final.
          <br />
          Começamos onde estiveres.
        </p>
      </section>
      <section className="contact-layout section light-section">
        <aside>
          <p className="eyebrow">CONTACTO DIRETO</p>
          <a className="contact-email" href={`mailto:${site.contact.email}`}>
            {site.contact.email}
          </a>
          <a href={`tel:${site.contact.phone}`}>+351 930 493 771</a>
          <small>Chamada para a rede móvel nacional.</small>
          <a
            className="text-link"
            href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
          >
            Conversar no WhatsApp ↗
          </a>
          <p>{site.location}</p>
        </aside>
        <Suspense fallback={<p>A preparar o formulário…</p>}>
          <ContactForm />
        </Suspense>
      </section>
    </>
  );
}
