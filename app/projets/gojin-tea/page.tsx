import Footer from "@/components/footer";
import Link from "next/link";
import ContactModal from "@/components/contactModal";

export default function GojinTeaPage() {
  return (
    <>
      <main className="projet__page">

        {/* HERO */}
        <div className="projet__hero" style={{ backgroundImage: "url('/projects/gojin-tea/hero.jpg')" }}>
          <div className="projet__heroOverlay" />
          <div className="projet__heroContent">
            <Link className="projet__back" href="/projets">← PROJETS</Link>
            <h1 className="projet__title">GOJIN TEA</h1>
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
                <img src="/projects/gojin-tea/logo.webp" alt="Gojin Tea logo" />
              </div>
              <div className="projet__desc">
                <p className="projet__descText">Création d'un packaging pour une marque de thé qui s'inspire des affiches de kaijū eiga japonais et de l'esthétique rétro-pop des années 80.</p>
                <p className="projet__descText">Le projet transforme une simple boîte de thé en objet visuel spectaculaire. Les illustrations urbaines et les effets de flammes renforcent l'énergie excessive et assumée de la marque, tout en créant une forte présence en rayon.</p>
              </div>
            </div>

            {/* SECTION GALERIE */}
            <div className="projet__gallery">
              <img src="/projects/gojin-tea/1.jpg" alt="Gojin Tea" className="projet__galleryImgSquare" />
              <img src="/projects/gojin-tea/2.jpg" alt="Gojin Tea" className="projet__galleryImgWide" />
              <img src="/projects/gojin-tea/3.jpg" alt="Gojin Tea" className="projet__galleryImgSquare" />
              <img src="/projects/gojin-tea/4.jpg" alt="Gojin Tea" className="projet__galleryImgWide" />
              <img src="/projects/gojin-tea/5.jpg" alt="Gojin Tea" className="projet__galleryImgSquare" />
              <img src="/projects/gojin-tea/6.jpg" alt="Gojin Tea" className="projet__galleryImgWide" />
            </div>

          </div>
        </div>

        <ContactModal />
      </main>
      <Footer />
    </>
  );
}