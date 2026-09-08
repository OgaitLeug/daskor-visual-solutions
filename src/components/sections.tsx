import Image from "next/image";
import Link from "next/link";
import { areas, site } from "@/content/site";
import { projects } from "@/content/projects";
import { assetPath } from "@/lib/asset-path";
export function Areas() {
  return (
    <section className="light-section services-section" id="areas">
      <div className="intro section">
        <p className="eyebrow">O QUE FAZEMOS</p>
          <div>
            <h2>
            Uma ideia.
            <br />
              Várias formas
              <br />
              de a concretizar.
            </h2>
            <p className="intro-copy">
              Criamos identidades, desenvolvemos presenças digitais e levamos a
              comunicação visual para o mundo físico.{" "}
              <strong>Do projeto completo à etapa de que precisas.</strong>
            </p>
          </div>
        </div>
        <div className="areas section" id="areas-list">
        {areas.map((a, i) => (
          <details className="area" key={a.id} id={a.id}>
            <summary>
              <span className="area-number">0{i + 1}</span>
              <h3>{a.title}</h3>
              <span className="area-lead">{a.lead}</span>
              <span className="area-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="area-content">
              <p>{a.text}</p>
              <p className="area-detail">{a.detail}</p>
              <Link href={`/contacto/?area=${a.id}`}>
                Vamos falar de {a.title.toLowerCase()}{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
export function Featured({ full = false }: { full?: boolean }) {
  const p = projects[0];
  return (
    <section className="project-section section" id={p.slug}>
      <div className="section-heading">
        <p className="eyebrow">
          {full ? "PROJETO DASKOR" : "PROJETO EM DESTAQUE"}
        </p>
        {!full && (
          <Link href="/projetos/">
            Ver projetos <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
      <div className="project-layout">
        <div className="project-placeholder project-gallery">
          <div className="project-mockup" aria-label="Mockup do website Johnny Cutz Studio">
            <figure className="mockup-screen mockup-screen-desktop">
              <span className="mockup-bar"><i /><i /><i /></span>
              <img src={assetPath("/web-projects/johnny-cutz-home.png")} alt="Página inicial do website Johnny Cutz Studio" />
            </figure>
          </div>
          <span className="eyebrow">DIGITAL × ESPAÇO · PROJETO REAL</span>
        </div>
        <div className="project-copy">
          <p className="eyebrow">{p.category.join(" · ")} · PROJETO REAL</p>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
          <ul>
            {p.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="project-note">
            Logótipo fornecido pelo cliente. A DASKOR não criou a identidade
            original.
          </p>
          {full && p.url && (
            <a className="text-link project-live-link" href={p.url} target="_blank" rel="noopener noreferrer">
              Ver website <span aria-hidden="true">↗</span>
            </a>
          )}
          {!full && (
            <Link className="text-link" href="/projetos/#johnny-cutz-studio">
              Conhecer o projeto <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
      </div>
      {full && (
        <div className="case-details">
          <div>
            <p className="eyebrow">CONTEXTO</p>
            <h3>Dar continuidade à identidade.</h3>
            <p>{p.challenge}</p>
          </div>
          <div>
            <p className="eyebrow">INTERVENÇÃO</p>
            <h3>Do ecrã ao espaço.</h3>
            <p>{p.approach}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export function PaletaProject({ full = false }: { full?: boolean }) {
  const p = projects[1];
  return (
    <section className="project-section section paleta-project" id={p.slug}>
      <div className="section-heading">
        <p className="eyebrow">
          {full ? "PROJETO DASKOR" : "PROJETO EM DESTAQUE"}
        </p>
      </div>
      <div className="project-layout">
        <div className="project-placeholder project-gallery paleta-project-gallery">
          <div className="project-mockup" aria-label="Mockup do website Paleta Notável">
            <figure className="mockup-screen mockup-screen-desktop">
              <span className="mockup-bar"><i /><i /><i /></span>
              <img src={assetPath(p.heroImage ?? "")} alt="Homepage do website Paleta Notável" />
            </figure>
          </div>
          <span className="eyebrow">DIGITAL · PROJETO REAL</span>
        </div>
        <div className="project-copy">
          <p className="eyebrow">{p.category.join(" · ")} · PROJETO REAL</p>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
          <ul>
            {p.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          {full && p.url && (
            <a className="text-link project-live-link" href={p.url} target="_blank" rel="noopener noreferrer">
              Ver website <span aria-hidden="true">↗</span>
            </a>
          )}
          {!full && (
            <Link className="text-link" href={`/projetos/#${p.slug}`}>
              Conhecer o projeto <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
      </div>
      {full && (
        <div className="case-details">
          <div>
            <p className="eyebrow">CONTEXTO</p>
            <h3>Uma marca com espaço para cor.</h3>
            <p>{p.challenge}</p>
          </div>
          <div>
            <p className="eyebrow">INTERVENÇÃO</p>
            <h3>Uma presença digital clara.</h3>
            <p>{p.approach}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export function FieldExperience() {
  return (
    <section className="field-section section">
      <p className="eyebrow">APLICAÇÃO E MONTAGEM</p>
      <div className="field-layout">
        <h2>
          Experiência
          <br />
          no terreno<span>.</span>
        </h2>
        <div>
          <p>
            Aplicação e montagem de comunicação visual em diferentes contextos e
            suportes.
          </p>
          <p className="muted">
            Experiência adquirida no âmbito de colaborações profissionais
            anteriores. Design e produção não realizados pela DASKOR. As marcas
            apresentadas não são identificadas como clientes DASKOR.
          </p>
        </div>
      </div>
      <div className="field-gallery">
        <figure>
          <Image
            src={assetPath("/images/autocarro.webp")}
            width={1600}
            height={1200}
            alt="Decoração gráfica aplicada na lateral de um autocarro, em colaboração profissional anterior"
            sizes="(min-width: 1000px) 42vw, 88vw"
          />
          <figcaption>
            <span>Decoração de autocarro</span>
            <span>Aplicação</span>
          </figcaption>
        </figure>
        <figure>
          <Image
            src={assetPath("/images/experiencia-bacardi.jpg")}
            width={1600}
            height={1200}
            alt="Aplicação de vinil Bacardi num espaço de ativação, em colaboração profissional anterior"
            sizes="(min-width: 1000px) 25vw, 88vw"
          />
          <figcaption>
            <span>Aplicação em espaço</span>
            <span>Vinil</span>
          </figcaption>
        </figure>
        <figure>
          <Image
            src={assetPath("/images/experiencia-real-techniques.jpeg")}
            width={1600}
            height={900}
            alt="Expositor Real Techniques aplicado em ponto de venda, em colaboração profissional anterior"
            sizes="(min-width: 1000px) 25vw, 88vw"
          />
          <figcaption>
            <span>Expositor de marca</span>
            <span>Montagem</span>
          </figcaption>
        </figure>
        <figure>
          <Image
            src={assetPath("/images/experiencia-peugeot.jpg")}
            width={1600}
            height={1200}
            alt="Aplicação de película microperfurada num espaço Peugeot, em colaboração profissional anterior"
            sizes="(min-width: 1000px) 25vw, 88vw"
          />
          <figcaption>
            <span>Película microperfurada</span>
            <span>Aplicação</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
export function Process() {
  return (
    <section className="section light-section">
      <p className="eyebrow">COMO TRABALHAMOS</p>
      <h2 className="process-title">
        Cada projeto tem
        <br />o seu ponto de partida.
      </h2>
      <div className="process">
        {[
          ["Perceber", "O que precisas, onde vai existir e o que já tens."],
          ["Criar", "Dar direção à ideia e desenhar a solução."],
          ["Produzir", "Escolher materiais e preparar a execução."],
          [
            "Implementar",
            "Colocar a solução no ecrã, no espaço ou na estrada.",
          ],
        ].map(([title, text], i) => (
          <div key={title}>
            <span className="eyebrow">0{i + 1} /</span>
            <svg className="process-check" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <p className="process-note">
        Podemos acompanhar todo o percurso ou entrar na etapa certa.
      </p>
    </section>
  );
}
export function Closing() {
  return (
    <section className="closing section">
      <p className="eyebrow">O PRÓXIMO PASSO</p>
      <h2>
        Tens uma ideia?
        <br />
        Vamos dar-lhe <em>forma.</em>
      </h2>
      <Link className="button button-light" href="/contacto/">
        Fala-nos do teu projeto <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-column">
        <img
          className="footer-mark"
          src={assetPath("/brand/logo-negative-transparent.png")}
          alt="DASKOR — Soluções Visuais"
          width={170}
          height={90}
        />
      </div>
      <div className="footer-brand">
        <strong>DASKOR — Soluções Visuais</strong>
        <div className="footer-contact">
          <a href={`tel:${site.contact.phone}`}>+351 930 493 771</a>
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          <p>{site.location}</p>
        </div>
      </div>
      <nav className="footer-nav" aria-label="Navegação do rodapé">
        <Link href="/">Início</Link>
        <Link href="/projetos/">Projetos</Link>
        <Link href="/contacto/">Contacto</Link>
      </nav>
      <div className="footer-socials" aria-label="Redes sociais">
        <span className="footer-social" aria-label="Instagram" title="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.4" cy="6.7" r="1" className="footer-social-dot" />
          </svg>
        </span>
        <span className="footer-social" aria-label="Facebook" title="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.6v8" />
          </svg>
        </span>
        <a
          className="footer-social footer-social-link"
          href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 11.4a8 8 0 0 1-11.7 7.1L4 20l1.5-4.2A8 8 0 1 1 20 11.4Z" />
            <path d="M8.4 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c-.1.2-.1.3 0 .5.4.7 1.1 1.4 1.8 1.8.2.1.3.1.5 0l.6-.5c.2-.2.4-.2.7-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.5.3-1.2.4-1.8.2-1.1-.3-2.4-1-3.5-2.1-1.1-1.1-1.8-2.4-2.1-3.5-.2-.6-.1-1.3.2-1.8Z" />
          </svg>
        </a>
        <div className="footer-bottom">
          <span>daskor.pt</span>
        </div>
      </div>
    </footer>
  );
}
