import Footer from "@/components/footer";
import Link from "next/link";
import ContactModal from "@/components/contactModal";

export default function LesFadasPage() {
  return (
    <>
      <main className="projet__page">
        <div className="projet__hero" style={{ backgroundImage: "url('/projects/les-fadas/hero.jpg')" }}>
          <div className="projet__heroOverlay" />
          <div className="projet__heroContent">
            <Link className="projet__back" href="/projets">← PROJETS</Link>
            <h1 className="projet__title">LES FADAS</h1>
            <div className="projet__tags">
              <span className="projet__tag">Identité visuelle</span>
            </div>
          </div>
        </div>
        <div className="projet__body">
          <div className="projet__inner">
            <div className="projet__desc">
              <p className="projet__descText">Création de l'identité visuelle du restaurant de tapas Les Fadas, fondée sur la volonté de transmettre la bonne humeur, la gourmandise et la convivialité du restaurant.</p>
              <p className="projet__descText">Le projet s'articule autour d'un univers graphique ludique, porté par une mascotte illustrée qui incarne l'esprit festif et accessible du lieu. L'ensemble construit une marque immédiatement identifiable, pensée pour traduire l'énergie, le partage et la spontanéité propres à l'expérience tapas.</p>
            </div>
            <div className="projet__descImg">
              <img src="/projects/les-fadas/1.jpg" alt="Les Fadas" />
            </div>
          </div>
        </div>
        <div className="projet__gallery">
          <div className="projet__galleryRow1">
            <img src="/projects/les-fadas/2.jpg" alt="Les Fadas" className="projet__galleryImgBig" />
            <div className="projet__galleryCol">
              <img src="/projects/les-fadas/3.jpg" alt="Les Fadas" className="projet__galleryImgSmall" />
              <img src="/projects/les-fadas/4.jpg" alt="Les Fadas" className="projet__galleryImgSmall" />
            </div>
          </div>
        </div>
        <ContactModal />
      </main>
      <Footer />
    </>
  );
}