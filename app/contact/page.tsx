"use client";

import Footer from "@/components/footer";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

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
      <main>
        <section className="fullSection">
          <div className="fullSection__inner">
            <div className="contact__layout">

              {/* GAUCHE */}
              <div className="contact__left">
                <h1 className="contact__title">TRAVAILLONS<br />ENSEMBLE</h1>
                <p className="contact__intro">
                  N'hésitez pas à me laisser un message via le formulaire,
                  ou contactez-moi directement par email à{" "}
                  <a className="contact__email" href="mailto:lucas_guiquero@orange.fr">
                    lucas_guiquero@orange.fr
                  </a>
                </p>
                <p className="contact__sub">
                  Créons ensemble quelque chose de beau et d'impactant.
                </p>

                <div className="contact__socials">
                  <Link
                    className="contact__socialBtn"
                    href="https://www.instagram.com/leukos_graphisme/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    INSTAGRAM
                  </Link>
                  <Link
                    className="contact__socialBtn"
                    href="https://www.linkedin.com/in/leukos-graph-9844b43a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LINKEDIN
                  </Link>
                  <Link
                    className="contact__socialBtn"
                    href="https://www.behance.net/leukos_graphics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BEHANCE
                  </Link>
                </div>
              </div>

              {/* DROITE — FORMULAIRE */}
              <div className="contact__right">
                <div className="contact__formCard">
                  {sent ? (
                    <div className="contact__success">
                      <p className="contact__successTitle">✓ Message envoyé !</p>
                      <p className="contact__successText">
                        Je vous répondrai dans les plus brefs délais.
                      </p>
                      <button
                        className="btn btn--ghost"
                        onClick={() => setSent(false)}
                      >
                        Envoyer un autre message
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
                        Téléphone
                        <input className="form__input" type="tel" name="phone" />
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
                          rows={6}
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

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}