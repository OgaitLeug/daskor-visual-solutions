import Image from "next/image";
import Link from "next/link";
import { areas, site } from "@/content/site";
import { projects } from "@/content/projects";
export function Areas() {
  return (
    <section className="light-section section" id="areas">
      <div className="intro">
        <p className="eyebrow">01 / O QUE FAZEMOS</p>
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
      <div className="areas">
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
          {full ? "01 / PROJETO DASKOR" : "02 / PROJETO EM DESTAQUE"}
        </p>
        {!full && (
          <Link href="/projetos/">
            Ver projetos <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
      <div className="project-layout">
        <div className="project-placeholder">
          <span className="eyebrow">DIGITAL × ESPAÇO</span>
          <div className="project-wordmark">
            JOHNNY
            <br />
            CUTZ<span>STUDIO</span>
          </div>
          <p>
            Registo visual do projeto
            <br />
            <strong>Imagens a adicionar</strong>
          </p>
        </div>
        <div className="project-copy">
          <p className="eyebrow">{p.category.join(" / ")} · PROJETO REAL</p>
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
export function FieldExperience() {
  return (
    <section className="field-section section">
      <p className="eyebrow">03 / APLICAÇÃO E MONTAGEM</p>
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
            src="/images/autocarro.webp"
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
            src="/images/espaco-colgate.webp"
            width={1600}
            height={1200}
            alt="Elementos gráficos Colgate aplicados num espaço de ativação, em colaboração profissional anterior"
            sizes="(min-width: 1000px) 25vw, 88vw"
          />
          <figcaption>
            <span>Espaço de marca</span>
            <span>Montagem</span>
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/images/espaco-heineken.webp"
            width={1600}
            height={900}
            alt="Grafismo Heineken aplicado num ambiente de evento, em colaboração profissional anterior"
            sizes="(min-width: 1000px) 25vw, 88vw"
          />
          <figcaption>
            <span>Comunicação em evento</span>
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
      <p className="eyebrow">04 / COMO TRABALHAMOS</p>
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
      <div>
        <strong>DASKOR — Soluções Visuais</strong>
        <p>{site.location}</p>
      </div>
      <Link href="/contacto/">Contacto ↗</Link>
      <span>daskor.pt</span>
    </footer>
  );
}
