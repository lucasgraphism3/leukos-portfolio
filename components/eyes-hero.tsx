"use client";

import Image from "next/image";
import { useEffect } from "react";

type Eye = { left: string; top: string; size: number };

const EYES: Eye[] = [
  { left: "8.5%", top: "64%", size: 12 },
  { left: "27%", top: "80%", size: 10 },
  { left: "50%", top: "82%", size: 10 },
  { left: "73%", top: "80%", size: 10 },
  { left: "91.5%", top: "64%", size: 12 },
];

export default function Hero() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".lk-hero");
    const pupils = Array.from(document.querySelectorAll<HTMLElement>(".lk-pupil"));
    if (!hero || pupils.length === 0) return;

    const maxMove = 10;

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      pupils.forEach((pupil) => {
        const eye = pupil.parentElement as HTMLElement | null;
        if (!eye) return;

        const er = eye.getBoundingClientRect();
        const cx = (er.left - rect.left) + er.width / 2;
        const cy = (er.top - rect.top) + er.height / 2;

        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.hypot(dx, dy) || 1;

        pupil.style.transform = `translate(calc(-50% + ${(dx / dist) * maxMove}px), calc(-50% + ${(dy / dist) * (maxMove * 0.6)}px))`;
      });
    };

    hero.addEventListener("mousemove", onMove, { passive: true });
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="lk-hero" aria-label="Header visuel">
      <Image
        src="/illustration_header2.png"
        alt=""
        fill
        priority
        className="lk-heroImg"
      />
      <div className="lk-eyesLayer" aria-hidden="true">
        {EYES.map((eye, i) => (
          <div
            key={i}
            className="lk-eye"
            style={{
              left: eye.left,
              top: eye.top,
              width: eye.size * 2,
              height: eye.size * 2,
            }}
          >
            <span
              className="lk-pupil"
              style={{ width: eye.size, height: eye.size }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}