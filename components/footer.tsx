"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Haut : back to top uniquement */}
        <div className="footer__top">
          <button
            className="footer__backTop"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="footer__backTopLabel">BACK TO TOP</span>
            <span className="footer__backTopArrow">↑</span>
          </button>
        </div>

        {/* Milieu : phrase + grand texte */}
        <div className="footer__hero">
          <p className="footer__tagline">UN PROJET EN TÊTE ?</p>
          <h2 className="footer__bigText">CONTACTEZ-MOI !</h2>
        </div>

        {/* Bas : réseaux + sitemap sur la même ligne */}
        <div className="footer__bottom">
          <div className="footer__social">
            <Link
              className="footer__socialBtn"
              href="https://www.instagram.com/leukos_graphisme/"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </Link>
            <Link
              className="footer__socialBtn"
              href="https://www.linkedin.com/in/leukos-graph-9844b43a0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </Link>
            <Link
              className="footer__socialBtn"
              href="https://www.behance.net/leukos_graphics"
              target="_blank"
              rel="noopener noreferrer"
            >
              BEHANCE
            </Link>
          </div>

          <div className="footer__sitemap">
            <Link className="footer__sitemapLink" href="/">Accueil</Link>
            <Link className="footer__sitemapLink" href="/a-propos">À propos</Link>
            <Link className="footer__sitemapLink" href="/projets">Projets</Link>
            <Link className="footer__sitemapLink" href="/services">Services</Link>
          </div>
        </div>

      </div>

      {/* Bande noire copyright */}
      <div className="footer__bar">
        <span className="footer__barCopy">©2026 leukos_graphisme - All rights reserved</span>
      </div>

    </footer>
  );
}