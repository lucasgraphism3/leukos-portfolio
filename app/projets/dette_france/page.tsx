import Footer from "@/components/footer";
import ContactModal from "@/components/contactModal";
import VideoEmbed from "@/components/VideoEmbed";
import Link from "next/link";

const VIDEO_ID = "LeYguq2MQo8";
const TITLE = "LA DETTE FRANÇAISE";

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
                Vidéo en motion design expliquant la dette française.
              </p>
            </div>

            <VideoEmbed id={VIDEO_ID} title="Explication de la dette française" />
          </div>
        </section>

        <ContactModal />
      </main>
      <Footer />
    </>
  );
}