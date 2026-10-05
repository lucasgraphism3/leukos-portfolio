"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  // Ferme le menu quand on change de page
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Bloque le défilement de la page quand le menu est ouvert, et ferme avec Échap
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className={`lk-header${isHome ? "" : " lk-header--solid"}`}>
      <nav className={`lk-nav${menuOpen ? " lk-nav--open" : ""}`}>

        {/* LIENS GAUCHE */}
        <div className="lk-navGroup">
          <Link className="lk-navLink" href="/a-propos">À PROPOS</Link>
          <Link className="lk-navLink" href="/projets">PROJETS</Link>
        </div>

        {/* LOGO */}
        <Link
          className="lk-navLogo"
          href="/"
          aria-label="Accueil"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo_navigation_noir.svg"
            alt="Leukos"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* LIENS DROITE */}
        <div className="lk-navGroup">
          <Link className="lk-navLink" href="/services">SERVICES</Link>
          <Link className="lk-navLink" href="/contact">CONTACT</Link>
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          className={`lk-hamburger${menuOpen ? " isOpen" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
        >
          <span />
          <span />
          <span />
        </button>

      </nav>

      {/* MENU MOBILE (toujours présent dans le code, affiché avec la classe isOpen) */}
      <div
        id="menu-mobile"
        className={`lk-mobileMenu${menuOpen ? " isOpen" : ""}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <Link className="lk-mobileLink" href="/">ACCUEIL</Link>
        <Link className="lk-mobileLink" href="/a-propos">À PROPOS</Link>
        <Link className="lk-mobileLink" href="/projets">PROJETS</Link>
        <Link className="lk-mobileLink" href="/services">SERVICES</Link>
        <Link className="lk-mobileLink" href="/contact">CONTACT</Link>
      </div>
    </header>
  );
}