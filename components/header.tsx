"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`lk-header${isHome ? "" : " lk-header--solid"}`}>
      <nav className="lk-nav">

        {/* LIENS GAUCHE */}
        <div className="lk-navGroup">
          <Link className="lk-navLink" href="/a-propos">À PROPOS</Link>
          <Link className="lk-navLink" href="/projets">PROJETS</Link>
        </div>

        {/* LOGO */}
        <Link className="lk-navLogo" href="/" aria-label="Accueil">
          <Image
            src="/logo_navigation_noir.svg"
            alt="Leukos"
            width={100}
            height={100}
            priority
            style={{ marginTop: "8px" }}
          />
        </Link>

        {/* LIENS DROITE */}
        <div className="lk-navGroup">
          <Link className="lk-navLink" href="/services">SERVICES</Link>
          <Link className="lk-navLink" href="/contact">CONTACT</Link>
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          className="lk-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>

      </nav>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="lk-mobileMenu" onClick={() => setMenuOpen(false)}>
          <Link className="lk-mobileLink" href="/a-propos">À PROPOS</Link>
          <Link className="lk-mobileLink" href="/projets">PROJETS</Link>
          <Link className="lk-mobileLink" href="/services">SERVICES</Link>
          <Link className="lk-mobileLink" href="/contact">CONTACT</Link>
        </div>
      )}
    </header>
  );
}