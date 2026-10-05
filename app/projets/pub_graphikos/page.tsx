import Footer from "@/components/footer";
import ContactModal from "@/components/contactModal";
import VideoEmbed from "@/components/VideoEmbed";
import Link from "next/link";

const VIDEO_ID = "iSkFaBe0hmA";
const TITLE = "PROGRAMME GRAPHISME";

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
                Vidéo en motion design présentant le programme de graphisme.
              </p>
            </div>

            <VideoEmbed id={VIDEO_ID} title="Présentation programme graphisme" />
          </div>
        </section>

        <ContactModal />
      </main>
      <Footer />
    </>
  );
}