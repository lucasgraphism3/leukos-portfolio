import Footer from "@/components/footer";
import ContactModal from "@/components/contactModal";
import VideoEmbed from "@/components/VideoEmbed";
import Link from "next/link";

const VIDEO_ID = "9gZ-Z16ErX8";
const TITLE = "GÉNÉRIQUE WESTERN";

export default function ProjetPage() {
  return (
    <>
      <main className="projet__page">
        <section
          className="projet__hero"
          style={{ backgroundImage: `url(https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg)` }}
        >
          <div className="projet__heroOverlay" />
          <div className="projet__heroContent">
            <Link className="projet__back" href="/projets">← RETOUR AUX PROJETS</Link>
            <h1 className="projet__title">{TITLE}</h1>
            <div className="projet__tags">
              <span className="projet__tag">Motion design</span>
              <span className="projet__tag">Vidéo</span>
            </div>
          </div>
        </section>

        <section className="projet__body">
          <div className="projet__container">
            <div className="projet__desc">
              <p className="projet__descText">
                Refonte en motion design du générique du film Le Bon, la Brute et le Truand.
              </p>
            </div>

            <VideoEmbed id={VIDEO_ID} title="Refonte du générique Le Bon, la Brute et le Truand" />
          </div>
        </section>

        <ContactModal />
      </main>
      <Footer />
    </>
  );
}