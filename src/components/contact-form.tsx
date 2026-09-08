"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { areas, site } from "@/content/site";
export function ContactForm() {
  const params = useSearchParams();
  const [area, setArea] = useState(params.get("area") || "");
  const [status, setStatus] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Nome: ${data.get("name")}`,
      `Empresa: ${data.get("company") || "—"}`,
      `Email: ${data.get("email")}`,
      `Telefone: ${data.get("phone") || "—"}`,
      `Área: ${area === "montagens" ? "Montagens" : areas.find((a) => a.id === area)?.title || "Projeto multidisciplinar"}`,
      `\n${data.get("message")}`,
      data.get("stage") ? `\nPonto de partida: ${data.get("stage")}` : "",
      data.get("timing") ? `Prazo: ${data.get("timing")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent("Novo projeto — " + data.get("name"))}&body=${encodeURIComponent(body)}`;
    setStatus(
      "O pedido foi preparado para o teu programa de email. Confirma o envio nessa aplicação. Se não abrir, podes contactar-nos diretamente por email ou WhatsApp.",
    );
  }
  return (
    <form onSubmit={submit} className="contact-form">
      <div className="form-grid">
        <label>
          Nome <span>*</span>
          <input name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label>
          Empresa <small>(opcional)</small>
          <input name="company" autoComplete="organization" maxLength={150} />
        </label>
        <label>
          Email <span>*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
          />
        </label>
        <label>
          Telefone <small>(opcional)</small>
          <input name="phone" type="tel" autoComplete="tel" maxLength={30} />
        </label>
      </div>
      <label>
        O que tens em mente?
        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          name="area"
        >
          <option value="">Não sei / Projeto multidisciplinar</option>
          {areas.map((a) => (
            <option key={a.id} value={a.id}>
              {a.title}
            </option>
          ))}
          <option value="montagens">Montagens</option>
        </select>
      </label>
      <label>
        Mensagem <span>*</span>
        <textarea
          name="message"
          rows={4}
          required
          maxLength={3000}
          placeholder="Conta-nos o que precisas."
        />
      </label>
      <details className="briefing">
        <summary>
          Quero explicar melhor o meu projeto <span aria-hidden="true">+</span>
        </summary>
        <label>
          Em que ponto estás?
          <select name="stage">
            <option value="">Seleciona, se quiseres</option>
            <option>Tenho uma ideia</option>
            <option>Já tenho identidade ou arte final</option>
            <option>Preciso de produção</option>
            <option>Já tenho material para aplicar</option>
          </select>
        </label>
        <label>
          Tens um prazo em mente? <small>(opcional)</small>
          <input name="timing" maxLength={150} />
        </label>
      </details>
      <p className="form-note">
        Este formulário prepara um email no teu dispositivo. Os dados só são
        enviados quando confirmares o envio no teu programa de email.
      </p>
      <button className="button button-dark" type="submit">
        Preparar email <span aria-hidden="true">↗</span>
      </button>
      <p role="status" className="form-status">
        {status}
      </p>
    </form>
  );
}
