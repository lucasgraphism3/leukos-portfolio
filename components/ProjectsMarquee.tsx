"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const projets = [
  { title: "REFONTE FL STUDIO", type: "Identité visuelle — Packaging", slug: "fl-studio", img: "/projects/fl-studio/logo.webp" },
  { title: "GOJIN TEA", type: "Identité visuelle — Packaging", slug: "gojin-tea", img: "/projects/gojin-tea/logo.webp" },
  { title: "VNOMA", type: "Identité visuelle — Packaging", slug: "vnoma", img: "/projects/vnoma/logo.webp" },
  { title: "EXPO CLUB ZINE", type: "Design print", slug: "expo-club-zine", img: "/projects/expo-club-zine/logo.webp" },
  { title: "MAISON D'HERBE", type: "Identité visuelle — Packaging", slug: "maison-herbe", img: "/projects/maison-herbe/logo.webp" },
  { title: "LES FADAS", type: "Identité visuelle", slug: "les-fadas", img: "/projects/les-fadas/logo.webp" },
  { title: "SEIGNEURIE NICOLAS-RIOUX", type: "Identité visuelle — Design print", slug: "seigneurie", img: "/projects/seigneurie/logo.webp" },
];

export default function ProjectsMarquee() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.innerHTML = track.innerHTML + track.innerHTML;

    let x = 0;
    const speed = 0.35;
    let raf = 0;

    const tick = () => {
      x -= speed;
      const half = track.scrollWidth / 2;
      if (Math.abs(x) >= half) x = 0;
      track.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="marquee" role="region" aria-label="Défilement projets">
      <div className="marquee__track" ref={trackRef}>
        {projets.map((p) => (
          <Link key={p.slug} href={`/projets/${p.slug}`} className="projectCard">
            <img src={p.img} alt={p.title} />
            <div className="projectCard__title">{p.title}</div>
            <div className="projectCard__type">{p.type}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}