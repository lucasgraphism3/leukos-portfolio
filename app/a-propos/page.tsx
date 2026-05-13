"use client";

import Footer from "@/components/footer";
import ContactModal from "@/components/contactModal";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const services = [
    { title: "IDENTITÉ VISUELLE", desc: "Logos, chartes graphiques, territoires de marque" },
    { title: "DESIGN PRINT", desc: "Typographie, mise en page, édition, affiches" },
    { title: "DESIGN NUMÉRIQUE", desc: "UI, web, assets digitaux" },
    { title: "PHOTO", desc: "Portrait, paysage, photographie de rue" },
    { title: "MOTION DESIGN", desc: "Animation, vidéo, after effects" },
    { title: "PACKAGING", desc: "Emballages, étiquettes, boîtes" },
  ];

  const competences = [
    { name: "InDesign", desc: "Mise en page", icon: "/icons/competences/indesign.png" },
    { name: "Illustrator", desc: "Design outil", icon: "/icons/competences/illustrator.png" },
    { name: "Photoshop", desc: "Retouche photo", icon: "/icons/competences/photoshop.png" },
    { name: "After Effects", desc: "Motion design", icon: "/icons/competences/aftereffects.png" },
    { name: "Affinity", desc: "Design outil", icon: "/icons/competences/affinity.png" },
    { name: "Figma", desc: "UI / Prototypage", icon: "/icons/competences/figma.png" },
    { name: "HTML & CSS", desc: "Intégration web", icon: "/icons/competences/html.png" },
    { name: "Anglais", desc: "Niveau B2", icon: "/icons/competences/anglais.png" },
    { name: "Photographie", desc: "Portrait, paysage, rue", icon: "/icons/competences/photo.png" },
  ];

  return (
    <div className="about__page">
      <main>
        <section className="fullSection">
          <div className="fullSection__inner">

            <h1 className="h2">À PROPOS</h1>

            <div className="about__grid">

              {/* COLONNE GAUCHE */}
              <div className="about__left">

                <h2 className="about__colTitle">EXPÉRIENCES</h2>
                <div className="about__diplomaCard">
                  <div className="about__diplomaYear">Sept. 2025 — Juin 2026</div>
                  <div className="about__diplomaTitle">Stage Graphikos</div>
                  <div className="about__diplomaSchool">MRC des Basques — Rivière-du-Loup</div>
                  <div className="about__diplomaDetail">Identité visuelle, design éditorial</div>
                </div>
                <div className="about__diplomaCard">
                  <div className="about__diplomaYear">Mars — Juillet 2024</div>
                  <div className="about__diplomaTitle">Graphiste junior</div>
                  <div className="about__diplomaSchool">Imprimerie Mélange — Ivry-sur-Seine</div>
                  <div className="about__diplomaDetail">Graphisme, façonnage et manutention</div>
                </div>

                <h2 className="about__colTitle" style={{ marginTop: "32px" }}>SERVICES</h2>
                {services.map((s) => (
                  <div key={s.title} className="about__activityCard">
                    <span className="about__activityIcon">✦</span>
                    <div>
                      <div className="about__activityTitle">{s.title}</div>
                      <div className="about__activityDesc">{s.desc}</div>
                    </div>
                  </div>
                ))}

              </div>

              {/* COLONNE CENTRE */}
              <div className="about__center">

                <div className="about__profileCard">
                  <div className="about__profileImgWrap">
                    <Image
                      src="/photo_profil2.png"
                      alt="Lucas Guiquéro"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="about__status">
                    <span className="about__statusDot" />
                    Disponible pour missions
                  </div>
                  <div className="about__profileName">LUCAS GUIQUÉRO</div>
                  <div className="about__profileRole">Designer print & numérique</div>
                </div>

                <div className="about__btns">
                  <Link
                    className="about__btn"
                    href="/assets/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ↓ TÉLÉCHARGER CV
                  </Link>
                  <Link
                    className="about__btn"
                    href="/assets/portfolio.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ↗ PORTFOLIO PDF
                  </Link>
                  <ContactModal label="✉ ME CONTACTER" />
                </div>

                <div className="about__bioCard">
                  <p className="about__bioText">
                    Je suis Lucas Guiquéro allias Leukos, designer print et numérique, diplômé d'un baccalauréat en graphisme et d'un DEC au Cégep de Rivière-du-Loup. Passionné par le design numérique, l'identité visuelle et le design éditorial, je cherche à mettre mon énergie et mon sens des responsabilités au service de projets ambitieux. Disponible à partir du mois d'août, je suis prêt à m'impliquer activement et à contribuer de manière efficace à votre équipe.
                  </p>
                </div>

              </div>

              {/* COLONNE DROITE */}
              <div className="about__right">

                <h2 className="about__colTitle about__colTitle--right">FORMATIONS</h2>
                <div className="about__diplomaCard">
                  <div className="about__diplomaYear">Depuis 2025</div>
                  <div className="about__diplomaTitle">DEC Graphisme</div>
                  <div className="about__diplomaSchool">Cégep Rivière-du-Loup</div>
                  <div className="about__diplomaDetail">3e année — Design imprimé</div>
                </div>
                <div className="about__diplomaCard">
                  <div className="about__diplomaYear">2022</div>
                  <div className="about__diplomaTitle">DNMADe Graphisme</div>
                  <div className="about__diplomaSchool">Eugénie Cotton, Montreuil</div>
                  <div className="about__diplomaDetail">3e année — Objet éditorial</div>
                </div>
                <div className="about__diplomaCard">
                  <div className="about__diplomaYear">2019 – 2022</div>
                  <div className="about__diplomaTitle">Bac STD2A</div>
                  <div className="about__diplomaSchool">La Joliverie, Nantes</div>
                  <div className="about__diplomaDetail">Mention Bien — Histoire des arts</div>
                </div>

                <h2 className="about__colTitle about__colTitle--right" style={{ marginTop: "32px" }}>COMPÉTENCES</h2>
                <div className="about__competencesGrid">
                  {competences.map((c) => (
                    <div key={c.name} className="about__competenceCard">
                      <div className="about__competenceCardInner">
                        <img src={c.icon} alt={c.name} className="about__competenceIcon" />
                        <div className="about__competenceInfo">
                          <div className="about__competenceName">{c.name}</div>
                          <div className="about__competenceDesc">{c.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}