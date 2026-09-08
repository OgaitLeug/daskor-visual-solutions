import type { Metadata } from "next";
import { Featured, Closing } from "@/components/sections";
export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos DASKOR. Conhece a intervenção digital e no espaço do Johnny Cutz Studio.",
  alternates: { canonical: "/projetos/" },
};
export default function Projects() {
  return (
    <>
      <section className="page-heading section">
        <p className="eyebrow">TRABALHO REAL / DASKOR</p>
        <h1>
          Ideias que
          <br />
          já têm forma<span>.</span>
        </h1>
        <p>Criação e execução, vistas de perto.</p>
      </section>
      <Featured full />
      <Closing />
    </>
  );
}
