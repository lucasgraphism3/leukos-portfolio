import Footer from "@/components/footer";
import Link from "next/link";
import ContactModal from "@/components/contactModal";

export default function SeigneuriePage() {
  return (
    <>
      <main className="projet__page">

        {/* HERO */}
        <div className="projet__hero" style={{ backgroundImage: "url('/projects/seigneurie/hero.jpg')" }}>
          <div className="projet__heroOverlay" />
          <div className="projet__heroContent">
            <Link className="projet__back" href="/projets">← PROJETS</Link>
            <h1 className="projet__title">SEIGNEURIE NICOLAS-RIOUX</h1>
            <div className="projet__tags">
              <span className="projet__tag">Identité visuelle</span>
              <span className="projet__tag">Design print</span>
            </div>
          </div>
        </div>

        {/* INFOS + GALERIE */}
        <div className="projet__body">
          <div className="projet__container">

            {/* SECTION INFOS */}
            <div className="projet__infos">
              <div className="projet__logo">
                <img src="/projects/seigneurie/logo.webp" alt="Seigneurie Nicolas-Rioux logo" />
              </div>
              <div className="projet__desc">
                <p className="projet__descText">Conception de l'identité visuelle pour les célébrations du 275e anniversaire de la Seigneurie Nicolas-Rioux et de la monographie narrant l'histoire de cette seigneurie aujourd'hui oubliée.</p>
                <p className="projet__descText">L'identité visuelle repose sur un équilibre entre références historiques et approche contemporaine. Le logotype simplifie les éléments architecturaux emblématiques de la seigneurie, tandis que le système graphique inspiré des courbes topographiques et du paysage fluvial traduit le rapport au territoire et au mouvement.</p>
              </div>
            </div>

            {/* SECTION GALERIE */}
            <div className="projet__gallery">
              <img src="/projects/seigneurie/1.jpg" alt="Seigneurie" className="projet__galleryImgSquare" />
              <img src="/projects/seigneurie/2.jpg" alt="Seigneurie" className="projet__galleryImgWide" />
              <img src="/projects/seigneurie/3.jpg" alt="Seigneurie" className="projet__galleryImgSquare" />
              <img src="/projects/seigneurie/4.jpg" alt="Seigneurie" className="projet__galleryImgSquare" />
              <img src="/projects/seigneurie/5.jpg" alt="Seigneurie" className="projet__galleryImgWide" />
              <img src="/projects/seigneurie/6.jpg" alt="Seigneurie" className="projet__galleryImgSquare" />
              <img src="/projects/seigneurie/7.jpg" alt="Seigneurie" className="projet__galleryImgSquare" />
            </div>

          </div>
        </div>

        <ContactModal />
      </main>
      <Footer />
    </>
  );
}