"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { assetPath } from "@/lib/asset-path";
import type { CSSProperties } from "react";
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
          <span>FORMA<b className="forma-dot">.</b></span>
        </h1>
        <div className="cinema-field" aria-hidden="true" style={{ "--brand-logo-url": `url("${assetPath("/brand/logo-negative-color.webp")}")` } as CSSProperties}>
          <div className="hero-reel hero-reel-a"><img src={assetPath("/web-projects/johnny-cutz-home.png")} alt="" /></div>
          <div className="hero-reel hero-reel-b"><img src={assetPath("/web-projects/johnny-cutz-booking.png")} alt="" /></div>
          <div className="hero-reel hero-reel-c"><img src={assetPath("/web-projects/paleta-notavel.png")} alt="" /></div>
          <span className="cinema-wash" />
          <span className="cinema-rule" />
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-action">
        <p>
          Comunicação visual
          <br />
          da criação à execução.
        </p>
        <div className="hero-contact-actions">
        <Link className="button hero-contact-button" href="/contacto/">
          Fala-nos do teu projeto <span aria-hidden="true">↗</span>
        </Link>
        <a className="button hero-contact-button hero-whatsapp-link" href="https://wa.me/351930493771" target="_blank" rel="noopener noreferrer">
          Contactar
        </a>
        </div>
        </div>
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
