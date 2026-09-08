import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section page-heading">
      <p className="eyebrow">404</p>
      <h1>
        Por aqui,
        <br />
        ainda sem forma.
      </h1>
      <Link className="button button-light" href="/">
        Voltar ao início ↗
      </Link>
    </section>
  );
}
