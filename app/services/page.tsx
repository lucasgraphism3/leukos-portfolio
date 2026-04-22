import Footer from "@/components/footer";
import ContactModal from "@/components/contactModal";

const services = [
  {
    id: "identite",
    icon: "/icons/identite.svg",
    title: "IDENTITÉ VISUELLE",
    tags: "Logo & Identity • Style Guide • Packaging • Art Direction • Design Research",
    desc: "La création d'une identité visuelle commence toujours par un logo. En collaborant, nous affinerons un concept à la fois percutant et représentatif des valeurs et de la mission de la marque. Je propose des services allant de la conception de logo à la création d'une identité visuelle complète, incluant typographie, palettes de couleurs, éléments graphiques, photographies, etc. Je définis également les règles d'application de cette identité pour ses supports physiques et numériques.",
  },
  {
    id: "print",
    icon: "/icons/print.svg",
    title: "DESIGN PRINT",
    tags: "Affiches • Livres • Revues • Brochures • Mise en page • Typographie • Fichiers d'impression",
    desc: "Concevoir pour le print demande rigueur, structure et une parfaite maîtrise des contraintes physiques. Chaque projet repose sur une hiérarchie visuelle claire, garantissant une lecture fluide tout en affirmant une identité graphique forte. Je développe des systèmes graphiques capables de structurer efficacement le contenu, incluant direction typographique, création de grilles et contrôle précis des espaces. Je prépare également des fichiers prêts pour l'impression en respectant les formats, marges, fonds perdus et profils colorimétriques (CMJN).",
  },
  {
    id: "numerique",
    icon: "/icons/web.svg",
    title: "DESIGN NUMÉRIQUE",
    tags: "Prototype • UI & UX Design • Maquette • Développement",
    desc: "Si vous recherchez un nouveau site web pour le lancement de votre marque, ou si vous avez besoin d'une refonte de votre site web actuel, j'ai de l'expérience dans la création de site web par HTML et CSS.",
  },
  {
    id: "photo",
    icon: "/icons/photo.svg",
    title: "PHOTOGRAPHIE",
    tags: "Portrait • Produit • Retouche",
    desc: "La photographie permet de construire une image cohérente et maîtrisée, en lien direct avec l'identité d'un projet ou d'une marque. Je réalise des images adaptées à différents usages, du contenu éditorial aux visuels de communication. Le travail se prolonge en post-production avec un traitement précis des images : retouche, étalonnage colorimétrique et optimisation des fichiers pour leur diffusion, qu'elle soit print ou digitale.",
  },
  {
    id: "motion",
    icon: "/icons/motion.svg",
    title: "MOTION DESIGN",
    tags: "Storyboard • Animation 2D • After Effects",
    desc: "Le motion design permet de traduire une idée en mouvement, en structurant l'information dans le temps. Chaque projet repose sur un rythme précis, une hiérarchie visuelle claire et une cohérence avec l'identité graphique existante. J'interviens de la phase de conception (storyboard, intentions visuelles) jusqu'à la production finale, en assurant un rendu maîtrisé et optimisé pour les différents supports de diffusion.",
  },
  {
    id: "packaging",
    icon: "/icons/packaging.svg",
    title: "PACKAGING",
    tags: "Identité produit • Étiquettes • Coffrets • Systèmes de gamme",
    desc: "Je conçois des packagings cohérents et fonctionnels, en travaillant à la fois sur les surfaces graphiques (étiquettes, marquages, hiérarchie d'information) et sur la structure (formats, ouvertures, systèmes de maintien). Je prépare des fichiers prêts à la production, en intégrant les contraintes d'impression et de fabrication (fonds perdus, découpes, plis, matériaux), afin d'assurer un rendu fiable et conforme aux exigences industrielles.",
  },
];

const steps = [
  {
    num: "01",
    title: "RECHERCHE",
    desc: "Comprendre les objectifs du client pour ce projet. Élaborer des planches d'inspiration basées sur sa vision.",
  },
  {
    num: "02",
    title: "CONCEPTION",
    desc: "À partir des recherches, développer 2 à 3 concepts préliminaires. Les examiner avec le client afin de définir une orientation.",
  },
  {
    num: "03",
    title: "PRODUCTION",
    desc: "Phase de conception et de production : tous les éléments sont développés ou prototypés pour être validés par le client.",
  },
  {
    num: "04",
    title: "VÉRIFICATION",
    desc: "Échanges avec le client concernant les modifications avant la finalisation. Jusqu'à 2 ou 3 versions d'épreuves.",
  },
  {
    num: "05",
    title: "FINALISATION",
    desc: "Tous les éléments sont finalisés, les fichiers sont empaquetés et envoyés au client. Un accompagnement continu est possible.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <main>
        <section className="fullSection">
          <div className="fullSection__inner">

            {/* HERO */}
            <div className="services__hero">
              <h1 className="h2">SERVICES</h1>
              <p className="services__heroText">
                Développez votre projet passionnant grâce à une image de marque,
                un packaging, un design web et des illustrations accrocheurs.
              </p>
            </div>

            <div className="services__divider" />

            {/* LISTE SERVICES */}
            <div className="services__list">
              {[0, 1, 2].map((row) => (
                <div key={row}>
                  <div className="services__row">
                    <div className="services__item">
                      <div className="services__itemHeader">
                        <img src={services[row * 2].icon} alt={services[row * 2].title} className="services__itemIcon" />
                        <h2 className="services__itemTitle">{services[row * 2].title}</h2>
                      </div>
                      <p className="services__itemTags">{services[row * 2].tags}</p>
                      <p className="services__itemDesc">{services[row * 2].desc}</p>
                    </div>

                    <div className="services__colDivider" />

                    <div className="services__item">
                      <div className="services__itemHeader">
                        <img src={services[row * 2 + 1].icon} alt={services[row * 2 + 1].title} className="services__itemIcon" />
                        <h2 className="services__itemTitle">{services[row * 2 + 1].title}</h2>
                      </div>
                      <p className="services__itemTags">{services[row * 2 + 1].tags}</p>
                      <p className="services__itemDesc">{services[row * 2 + 1].desc}</p>
                    </div>
                  </div>
                  {row < 2 && <div className="services__divider" />}
                </div>
              ))}
            </div>

            <div className="services__divider" />

            {/* PROCESSUS */}
            <div className="services__processHero">
              <h2 className="h2">PROCESSUS</h2>
              <p className="services__heroText">
                Chaque projet est unique, mais voici la structure que je suis comme bonne pratique.
              </p>
            </div>

            <div className="services__process">
              {steps.map((step, i) => (
                <div key={step.num} className="services__step">
                  <div className="services__stepNum">{step.num}</div>
                  {i < steps.length - 1 && <div className="services__stepLine" />}
                  <div className="services__stepTitle">{step.title}</div>
                  <div className="services__stepDesc">{step.desc}</div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <ContactModal />
      </main>
      <Footer />
    </>
  );
}