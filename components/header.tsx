"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`lk-header${isHome ? "" : " lk-header--solid"}`}>
      <nav className="lk-nav">
        <div className="lk-navGroup">
          <Link className="lk-navLink" href="/a-propos">À PROPOS</Link>
          <Link className="lk-navLink" href="/projets">PROJETS</Link>
        </div>

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

        <div className="lk-navGroup">
          <Link className="lk-navLink" href="/services">SERVICES</Link>
          <Link className="lk-navLink" href="/contact">CONTACT</Link>
        </div>
      </nav>
    </header>
  );
}