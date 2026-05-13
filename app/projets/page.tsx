"use client";

import Footer from "@/components/footer";
import ContactModal from "@/components/contactModal";
import Link from "next/link";
import { useState } from "react";

const projets = [
  { id: "flstudio", title: "REFONTE FL STUDIO", type: "Identité visuelle — Packaging", filter: ["identite", "packaging"], slug: "fl-studio", logo: "/projects/fl-studio/logo.webp" },
  { id: "gojin", title: "GOJIN TEA", type: "Identité visuelle — Packaging", filter: ["identite", "packaging"], slug: "gojin-tea", logo: "/projects/gojin-tea/logo.webp" },
  { id: "vnoma", title: "VNOMA", type: "Identité visuelle — Packaging", filter: ["identite", "packaging"], slug: "vnoma", logo: "/projects/vnoma/logo.webp" },
  { id: "clubzine", title: "EXPO CLUB ZINE", type: "Design print", filter: ["print"], slug: "expo-club-zine", logo: "/projects/expo-club-zine/logo.webp" },
  { id: "maisonherbe", title: "MAISON D'HERBE", type: "Identité visuelle — Packaging", filter: ["identite", "packaging"], slug: "maison-herbe", logo: "/projects/maison-herbe/logo.webp" },
  { id: "lesfadas", title: "LES FADAS", type: "Identité visuelle", filter: ["identite"], slug: "les-fadas", logo: "/projects/les-fadas/logo.webp" },
  { id: "seigneurie", title: "SEIGNEURIE\nNICOLAS-RIOUX", type: "Identité visuelle — Design print", filter: ["identite", "print"], slug: "seigneurie", logo: "/projects/seigneurie/logo.webp" },
];

const filtres = [
  { id: "tous", label: "TOUS" },
  { id: "identite", label: "IDENTITÉ VISUELLE" },
  { id: "print", label: "DESIGN PRINT" },
  { id: "packaging", label: "PACKAGING" },
];

export default function ProjetsPage() {
  const [actif, setActif] = useState("tous");

  const projetsFiltres = actif === "tous"
    ? projets
    : projets.filter((p) => p.filter.includes(actif));

  return (
    <>
      <main className="projets__page">
        <section className="projets__section">
          <div className="projets__inner">

            <h1 className="h2">PROJETS</h1>

            <div className="projets__filtres">
              {filtres.map((f) => (
                <button
                  key={f.id}
                  className={`projets__filtreBtn${actif === f.id ? " projets__filtreBtn--actif" : ""}`}
                  onClick={() => setActif(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="projets__divider" />

            <div className="projets__grid">
              {projetsFiltres.map((p) => (
                <Link key={p.id} href={`/projets/${p.slug}`} className="projets__card">
                  <img
                    src={p.logo}
                    alt={p.title}
                    className="projets__cardImg"
                  />
                  <div className="projets__cardOverlay">
                    <div className="projets__cardTitle">
                      {p.title.split('\n').map((line, i) => (
                        <span key={i}>{line}{i === 0 && p.title.includes('\n') && <br />}</span>
                      ))}
                    </div>
                    <div className="projets__cardType">{p.type}</div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
        <ContactModal />
      </main>
      <Footer />
    </>
  );
}