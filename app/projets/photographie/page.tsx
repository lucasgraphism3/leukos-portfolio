import Footer from "@/components/footer";
import ContactModal from "@/components/contactModal";
import PhotoGallery from "@/components/PhotoGallery";
import Link from "next/link";

const NB_PHOTOS = 15; // change ce nombre si tu as plus ou moins de photos

const photos = Array.from(
  { length: NB_PHOTOS },
  (_, i) => `/projects/photographie/photo-${String(i + 1).padStart(2, "0")}.webp`
);

export default function PhotographiePage() {
  return (
    <>
      <main className="projet__page">
        <section className="projet__hero" style={{ backgroundImage: `url(${photos[0]})` }}>
          <div className="projet__heroOverlay" />
          <div className="projet__heroContent">
            <Link className="projet__back" href="/projets">← RETOUR AUX PROJETS</Link>
            <h1 className="projet__title">PHOTOGRAPHIE</h1>
            <div className="projet__tags">
              <span className="projet__tag">Paysage</span>
              <span className="projet__tag">Portrait</span>
            </div>
          </div>
        </section>

        <section className="projet__body">
          <div className="projet__container">
            <div className="projet__desc">
              <p className="projet__descText">
                Une sélection de mes photographies.
              </p>
            </div>

            <PhotoGallery photos={photos} title="Photographie" />
          </div>
        </section>

        <ContactModal />
      </main>
      <Footer />
    </>
  );
}