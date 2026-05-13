import Hero from "@/components/eyes-hero";
import Footer from "@/components/footer";
import ProjectsMarquee from "@/components/ProjectsMarquee";
import ContactModal from "@/components/contactModal";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <main>
        {/* Présentation */}
        <section className="fullSection">
          <div className="fullSection__inner intro__grid">
            <Link
              className="intro__card"
              href="/assets/portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/photo_profil2.png"
                alt="Photo de profil"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 400px"
                style={{ objectFit: "cover" }}
              />
              <div className="intro__overlay" aria-hidden="true" />
              <div className="intro__pdfTag">PORTFOLIO PDF</div>
            </Link>

            <div>
              <h1 className="h1">HELLO !</h1>
              <p className="p erasLight">
                Je suis Leukos, designer graphique freelance pluridisciplinaire.
                Je possède plus de six années d'expérience en graphisme et j'ai
                principalement orienté mon travail vers l'identité visuelle, le
                design print, le packaging ainsi que le design web.
              </p>

              <Link className="btn btn--ghost" href="/a-propos">
                En savoir plus
              </Link>
            </div>
          </div>
        </section>

        {/* Projets */}
        <section className="fullSection">
          <div className="fullSection__inner">
            <h2 className="h2">PROJETS</h2>
            <ProjectsMarquee />
            <div className="section__cta">
              <Link className="btn btn--ghost" href="/projets">
                En savoir plus
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="fullSection">
          <div className="fullSection__inner">
            <h2 className="h2">SERVICES</h2>

            <div className="services__grid">
              <article className="serviceCard">
                <img src="/icons/services/identite-visuelle.png" alt="Identité visuelle" className="serviceCard__icon" />
                <div className="serviceCard__info">
                  <div className="serviceCard__title">Identité visuelle</div>
                  <div className="serviceCard__desc">Logos, chartes graphiques, territoires de marque.</div>
                </div>
              </article>

              <article className="serviceCard">
                <img src="/icons/services/print.png" alt="Design print" className="serviceCard__icon" />
                <div className="serviceCard__info">
                  <div className="serviceCard__title">Design print</div>
                  <div className="serviceCard__desc">Édition, affiches, mise en page.</div>
                </div>
              </article>

              <article className="serviceCard">
                <img src="/icons/services/web.png" alt="Design numérique" className="serviceCard__icon" />
                <div className="serviceCard__info">
                  <div className="serviceCard__title">Design numérique</div>
                  <div className="serviceCard__desc">UI, web, assets digitaux.</div>
                </div>
              </article>

              <article className="serviceCard">
                <img src="/icons/services/photo.png" alt="Photo" className="serviceCard__icon" />
                <div className="serviceCard__info">
                  <div className="serviceCard__title">Photo</div>
                  <div className="serviceCard__desc">Séries, retouches, direction.</div>
                </div>
              </article>

              <article className="serviceCard">
                <img src="/icons/services/motion.png" alt="Motion design" className="serviceCard__icon" />
                <div className="serviceCard__info">
                  <div className="serviceCard__title">Motion design</div>
                  <div className="serviceCard__desc">Animation, vidéo, after effects.</div>
                </div>
              </article>

              <article className="serviceCard">
                <img src="/icons/services/emballage.png" alt="Packaging" className="serviceCard__icon" />
                <div className="serviceCard__info">
                  <div className="serviceCard__title">Packaging</div>
                  <div className="serviceCard__desc">Emballages, étiquettes, boîtes.</div>
                </div>
              </article>
            </div>

            <div className="section__cta">
              <Link className="btn btn--ghost" href="/services">
                En savoir plus
              </Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <ContactModal />
      </main>

      <Footer />
    </>
  );
}