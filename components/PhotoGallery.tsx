"use client";

import { useEffect, useState } from "react";

type PhotoGalleryProps = {
  photos: string[];
  title: string;
};

export default function PhotoGallery({ photos, title }: PhotoGalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  const next = () => setActive((i) => (i === null ? null : (i + 1) % photos.length));
  const prev = () => setActive((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));

  useEffect(() => {
    if (active === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <div className="photoGallery">
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            className="photoGallery__item"
            onClick={() => setActive(i)}
            aria-label={`Agrandir la photo ${i + 1}`}
          >
            <img src={src} alt={`${title} ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button
            type="button"
            className="lightbox__close"
            aria-label="Fermer"
            onClick={() => setActive(null)}
          >
            ✕
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Photo précédente"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>

          <img
            className="lightbox__img"
            src={photos[active]}
            alt={`${title} ${active + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Photo suivante"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}