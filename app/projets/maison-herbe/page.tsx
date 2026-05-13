import Footer from "@/components/footer";
import Link from "next/link";
import ContactModal from "@/components/contactModal";

export default function MaisonHerbePage() {
  return (
    <>
      <main className="projet__page">
        <div className="projet__hero" style={{ backgroundImage: "url('/projects/maison-herbe/hero.jpg')" }}>
          <div className="projet__heroOverlay" />
          <div className="projet__heroContent">
            <Link className="projet__back" href="/projets">← PROJETS</Link>
            <h1 className="projet__title">MAISON D'HERBE</h1>
            <div className="projet__tags">
              <span className="projet__tag">Identité visuelle</span>
              <span className="projet__tag">Packaging</span>
            </div>
          </div>
        </div>
        <div className="projet__body">
          <div className="projet__inner">
            <div className="projet__desc">
              <p className="projet__descText">Refonte graphique des packaging de la gamme Apothicaire de Maison d'Herbes, pensée pour valoriser le caractère artisanal et naturel des produits.</p>
              <p className="projet__descText">L'univers graphique combine une palette végétale profonde et une hiérarchie typographique claire afin de renforcer la lisibilité tout en conservant une dimension chaleureuse et authentique.</p>
            </div>
            <div className="projet__descImg">
              <img src="/projects/maison-herbe/1.jpg" alt="Maison d'Herbe" />
            </div>
          </div>
        </div>
        <div className="projet__gallery">
          <div className="projet__galleryRow1">
            <img src="/projects/maison-herbe/2.jpg" alt="Maison d'Herbe" className="projet__galleryImgBig" />
            <div className="projet__galleryCol">
              <img src="/projects/maison-herbe/3.jpg" alt="Maison d'Herbe" className="projet__galleryImgSmall" />
              <img src="/projects/maison-herbe/4.jpg" alt="Maison d'Herbe" className="projet__galleryImgSmall" />
            </div>
          </div>
        </div>
        <ContactModal />
      </main>
      <Footer />
    </>
  );
}