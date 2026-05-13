import Footer from "@/components/footer";
import Link from "next/link";
import ContactModal from "@/components/contactModal";

export default function VnomaPage() {
  return (
    <>
      <main className="projet__page">

        {/* HERO */}
        <div className="projet__hero" style={{ backgroundImage: "url('/projects/vnoma/hero.jpg')" }}>
          <div className="projet__heroOverlay" />
          <div className="projet__heroContent">
            <Link className="projet__back" href="/projets">← PROJETS</Link>
            <h1 className="projet__title">VNOMA</h1>
            <div className="projet__tags">
              <span className="projet__tag">Identité visuelle</span>
              <span className="projet__tag">Packaging</span>
            </div>
          </div>
        </div>

        {/* INFOS + GALERIE */}
        <div className="projet__body">
          <div className="projet__container">

            {/* SECTION INFOS */}
            <div className="projet__infos">
              <div className="projet__logo">
                <img src="/projects/vnoma/logo.webp" alt="Vnoma logo" />
              </div>
              <div className="projet__desc">
                <p className="projet__descText">Création d'une identité visuelle et de packaging pour une marque kombucha loin des clichés, à contre-courant des codes classiques du bien-être.</p>
                <p className="projet__descText">Le projet développe un univers visuel plus brut et affirmé, en rupture avec les esthétiques douces et aseptisées du secteur. L'identité repose sur une direction artistique radicale, faire de la fermentation l'axe de communication principal en l'évoquant par les motifs et autres éléments graphiques.</p>
              </div>
            </div>

            {/* SECTION GALERIE */}
            <div className="projet__gallery">
              <img src="/projects/vnoma/1.jpg" alt="Vnoma" className="projet__galleryImgSquare" />
              <img src="/projects/vnoma/2.jpg" alt="Vnoma" className="projet__galleryImgWide" />
              <img src="/projects/vnoma/3.jpg" alt="Vnoma" className="projet__galleryImgSquare" />
              <img src="/projects/vnoma/4.jpg" alt="Vnoma" className="projet__galleryImgWide" />
              <img src="/projects/vnoma/5.jpg" alt="Vnoma" className="projet__galleryImgSquare" />
              <img src="/projects/vnoma/6.jpg" alt="Vnoma" className="projet__galleryImgSquare" />
            </div>

          </div>
        </div>

        <ContactModal />
      </main>
      <Footer />
    </>
  );
}