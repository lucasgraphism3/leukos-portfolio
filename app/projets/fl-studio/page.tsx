import Footer from "@/components/footer";
import Link from "next/link";
import ContactModal from "@/components/contactModal";

export default function FlStudioPage() {
  return (
    <>
      <main className="projet__page">

        {/* HERO */}
        <div className="projet__hero" style={{ backgroundImage: "url('/projects/fl-studio/hero.jpg')" }}>
          <div className="projet__heroOverlay" />
          <div className="projet__heroContent">
            <Link className="projet__back" href="/projets">← PROJETS</Link>
            <h1 className="projet__title">REFONTE FL STUDIO</h1>
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
                <img src="/projects/fl-studio/logo.webp" alt="FL Studio logo" />
              </div>
              <div className="projet__desc">
                <p className="projet__descText">L'objectif du projet était de rafraîchir l'image de marque de FL Studio afin de la rendre plus cohérente, innovante et émotionnelle, tout en s'éloignant du ton trop rigide et technique de leur communication actuelle.</p>
                <p className="projet__descText">Grâce à cette nouvelle image de marque plus humaine, FL Studio s'adresse enfin autant aux débutants qu'aux utilisateurs avancés, en repositionnant la marque comme un outil de création dynamique et inspirant plutôt qu'un simple logiciel technique.</p>
              </div>
            </div>

            {/* SECTION GALERIE */}
            <div className="projet__gallery">
              <img src="/projects/fl-studio/1.jpg" alt="FL Studio" className="projet__galleryImgSquare" />
              <img src="/projects/fl-studio/2.jpg" alt="FL Studio" className="projet__galleryImgWide" />
              <img src="/projects/fl-studio/3.jpg" alt="FL Studio" className="projet__galleryImgSquare" />
              <img src="/projects/fl-studio/4.jpg" alt="FL Studio" className="projet__galleryImgWide" />
              <img src="/projects/fl-studio/5.jpg" alt="FL Studio" className="projet__galleryImgSquare" />
              <img src="/projects/fl-studio/6.jpg" alt="FL Studio" className="projet__galleryImgWide" />
            </div>

          </div>
        </div>

        <ContactModal />
      </main>
      <Footer />
    </>
  );
}