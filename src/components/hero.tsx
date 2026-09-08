"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    const paint = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const p = media.matches
        ? 1
        : Math.max(
            0,
            Math.min(
              1,
              -el.getBoundingClientRect().top / (el.offsetHeight * 0.72),
            ),
          );
      el.style.setProperty("--progress", String(p));
    };
    const scroll = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    paint();
    addEventListener("scroll", scroll, { passive: true });
    addEventListener("resize", scroll);
    media.addEventListener("change", scroll);
    return () => {
      removeEventListener("scroll", scroll);
      removeEventListener("resize", scroll);
      media.removeEventListener("change", scroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="hero-meta">
        <span>COMUNICAÇÃO VISUAL</span>
        <span>LISBOA, PORTUGAL</span>
      </div>
      <div className="hero-composition">
        <h1 id="hero-title">
          IDEIAS QUE
          <br />
          GANHAM
          <br />
          <span>FORMA.</span>
        </h1>
        <div className="geometry" aria-hidden="true">
          <i className="plane plane-one" />
          <i className="plane plane-two" />
          <i className="plane plane-three" />
          <i className="plane plane-four" />
          <span className="cross cross-one">+</span>
          <span className="cross cross-two">+</span>
          <span className="geometry-caption">DA IDEIA À MATÉRIA</span>
        </div>
      </div>
      <div className="hero-bottom">
        <p>
          Comunicação visual
          <br />
          da criação à execução.
        </p>
        <Link className="button button-light" href="/contacto/">
          Fala-nos do teu projeto <span aria-hidden="true">↗</span>
        </Link>
        <a className="scroll-cue" href="#areas">
          Explora as possibilidades <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="area-ticker" aria-label="Áreas de atuação">
        MARCA <b>·</b> DIGITAL <b>·</b> PRODUÇÃO <b>·</b> ESPAÇO <b>·</b>{" "}
        ESTRADA
      </div>
    </section>
  );
}
