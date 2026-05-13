import Image from "next/image";

export default function Hero() {
  return (
    <section className="lk-hero" aria-label="Header visuel">
      <Image
        src="/illustration_header2.png"
        alt=""
        fill
        priority
        className="lk-heroImg"
      />
    </section>
  );
}