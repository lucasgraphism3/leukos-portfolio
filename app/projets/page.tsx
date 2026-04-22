"use client";

import Footer from "@/components/footer";
import ContactModal from "@/components/contactModal";
import { useState } from "react";

const projets = [
  { id: "vnoma", title: "VNOMA KOMBUCHA", type: "Identité visuelle — Design d'emballage", filter: ["identite", "packaging"] },
  { id: "flstudio", title: "REFONTE FL STUDIO", type: "Identité visuelle — Design d'emballage", filter: ["identite", "packaging"] },
  { id: "gojin", title: "GOJIN TEA", type: "Identité visuelle — Design d'emballage", filter: ["identite", "packaging"] },
  { id: "survie", title: "SURVIE DANS LA SUPERNATURE", type: "Expérimentation IA — Narration", filter: ["numerique"] },
  { id: "clubzine", title: "EXPO CLUB ZINE", type: "Design évènement", filter: ["print"] },
  { id: "lesfadas", title: "LES FADAS", type: "Identité visuelle", filter: ["identite"] },
  { id: "maison", title: "MAISON D'HERBE", type: "Identité visuelle — Design d'emballage", filter: ["identite", "packaging"] },
  { id: "oosouji", title: "OOSOUJI", type: "Design print", filter: ["print"] },
];

const filtres = [
  { id: "tous", label: "TOUS" },
  { id: "identite", label: "IDENTITÉ VISUELLE" },
  { id: "print", label: "DESIGN PRINT" },
  { id: "numerique", label: "DESIGN NUMÉRIQUE" },
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
                <div key={p.id} className="projets__card">
                  <img
                    src="/projects/work_progress.jpg"
                    alt={p.title}
                    className="projets__cardImg"
                  />
                  <div className="projets__cardOverlay">
                    <div className="projets__cardTitle">{p.title}</div>
                    <div className="projets__cardType">{p.type}</div>
                  </div>
                </div>
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