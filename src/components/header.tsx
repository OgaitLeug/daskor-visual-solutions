"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
export function Header() {
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  function close() {
    dialog.current?.close();
    document.body.style.overflow = "";
  }
  return (
    <header className="header">
      <Link href="/" aria-label="DASKOR — início" className="logo">
        <Image
          src="/brand/logo-negative-color.webp"
          width={144}
          height={76}
          alt="DASKOR — Soluções Visuais"
          priority
        />
      </Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {site.navigation.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            aria-current={pathname === n.href ? "page" : undefined}
          >
            {n.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/contacto/">
          Fala-nos do teu projeto <span aria-hidden="true">↗</span>
        </Link>
      </nav>
      <button
        className="menu-toggle"
        onClick={() => {
          dialog.current?.showModal();
          document.body.style.overflow = "hidden";
        }}
        aria-haspopup="dialog"
      >
        Menu <span aria-hidden="true">≡</span>
      </button>
      <dialog
        ref={dialog}
        className="menu"
        onClose={() => {
          document.body.style.overflow = "";
        }}
        aria-label="Navegação"
      >
        <div className="menu-top">
          <span>DASKOR · NAVEGAÇÃO</span>
          <button onClick={close} autoFocus>
            Fechar ×
          </button>
        </div>
        <nav aria-label="Navegação mobile">
          {[{ label: "Início", href: "/" }, ...site.navigation].map((n) => (
            <Link key={n.href} href={n.href} onClick={close}>
              {n.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
        <p>{site.location}</p>
      </dialog>
    </header>
  );
}
