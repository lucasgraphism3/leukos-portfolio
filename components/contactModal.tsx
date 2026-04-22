"use client";

import { useEffect, useState } from "react";

export default function ContactModal({ label = "ME CONTACTER !" }: { label?: string }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xojyjbkb", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSent(true);
      form.reset();
    }
  };

  return (
    <>
      <button className="contactCta__btn" onClick={() => setOpen(true)}>
        {label}
      </button>

      <div className={`modal ${open ? "isOpen" : ""}`} aria-hidden={!open}>
        <div className="modal__backdrop" onClick={() => setOpen(false)} />
        <div
          className="modal__panel"
          role="dialog"
          aria-modal="true"
          aria-label="Formulaire de contact"
        >
          <button
            className="modal__close"
            type="button"
            aria-label="Fermer"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <h3 className="h3">Contact</h3>

          {sent ? (
            <div style={{ padding: "24px 0", textAlign: "center", color: "#fff" }}>
              <p style={{ fontSize: "18px", marginBottom: "16px" }}>✓ Message envoyé !</p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
                Je reviendrai vers toi dès que possible.
              </p>
              <button
                className="btn btn--ghost"
                style={{ marginTop: "24px" }}
                onClick={() => { setSent(false); setOpen(false); }}
              >
                Fermer
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <label className="form__label">
                Nom
                <input className="form__input" type="text" name="name" required />
              </label>

              <label className="form__label">
                Email
                <input className="form__input" type="email" name="email" required />
              </label>

              <label className="form__label">
                Objet
                <input className="form__input" type="text" name="subject" required />
              </label>

              <label className="form__label">
                Message
                <textarea
                  className="form__textarea"
                  name="message"
                  rows={5}
                  required
                />
              </label>

              <button className="btn btn--ghost" type="submit">
                Envoyer
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}