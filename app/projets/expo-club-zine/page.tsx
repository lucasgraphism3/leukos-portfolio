import Footer from "@/components/footer";
import Link from "next/link";
import ContactModal from "@/components/contactModal";

export default function ExpoClubZinePage() {
  return (
    <>
      <main className="projet__page">
        <div className="projet__hero" style={{ backgroundImage: "url('/projects/expo-club-zine/hero.jpg')" }}>
          <div className="projet__heroOverlay" />
          <div className="projet__heroContent">
            <Link className="projet__back" href="/projets">← PROJETS</Link>
            <h1 className="projet__title">EXPO CLUB ZINE</h1>
            <div className="projet__tags">
              <span className="projet__tag">Design print</span>
            </div>
          </div>
        </div>
        <div className="projet__body">
          <div className="projet__inner">
            <div className="projet__desc">
              <p className="projet__descText">Conception d'un catalogue d'exposition et d'une affiche promotionnelle pour l'Expo club zine. Le projet cherche à retranscrire l'énergie expérimentale et indépendante propre à la culture du zine.</p>
              <p className="projet__descText">L'ensemble construit une communication cohérente entre support imprimé et affichage urbain, capable de prolonger l'expérience de l'exposition au-delà de l'espace physique.</p>
            </div>
            <div className="projet__descImg">
              <img src="/projects/expo-club-zine/1.jpg" alt="Expo Club Zine" />
            </div>
          </div>
        </div>
        <div className="projet__gallery">
          <div className="projet__galleryRow1">
            <img src="/projects/expo-club-zine/2.jpg" alt="Expo Club Zine" className="projet__galleryImgBig" />
            <div className="projet__galleryCol">
              <img src="/projects/expo-club-zine/3.jpg" alt="Expo Club Zine" className="projet__galleryImgSmall" />
              <img src="/projects/expo-club-zine/4.jpg" alt="Expo Club Zine" className="projet__galleryImgSmall" />
            </div>
          </div>
        </div>
        <ContactModal />
      </main>
      <Footer />
    </>
  );
}