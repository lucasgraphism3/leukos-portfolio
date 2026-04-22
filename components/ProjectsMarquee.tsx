"use client";

import { useEffect, useRef } from "react";

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
        <article className="projectCard">
          <div className="projectCard__title">NOM DE PROJET</div>
          <div className="projectCard__type">type de service</div>
        </article>
        <article className="projectCard">
          <div className="projectCard__title">NOM DE PROJET</div>
          <div className="projectCard__type">type de service</div>
        </article>
        <article className="projectCard">
          <div className="projectCard__title">NOM DE PROJET</div>
          <div className="projectCard__type">type de service</div>
        </article>
        <article className="projectCard">
          <div className="projectCard__title">NOM DE PROJET</div>
          <div className="projectCard__type">type de service</div>
        </article>
      </div>
    </div>
  );
}