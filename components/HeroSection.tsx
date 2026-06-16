import Image from "next/image";
import type { Dictionary } from "@/lib/translations";

type HeroSectionProps = {
  dictionary: Dictionary["hero"];
};

export function HeroSection({ dictionary }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] scroll-mt-28 items-end overflow-hidden bg-black px-6 pb-16 pt-32 text-white sm:px-10 lg:px-16"
    >
      <Image
        src="/images/hero.webp"
        alt={dictionary.imageAlt}
        fill
        priority
        sizes="100vw"
        className="hidden object-cover sm:block"
      />
      <Image
        src="/images/mob-hero.webp"
        alt={dictionary.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover sm:hidden"
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto mb-20 w-full max-w-6xl sm:mb-24 lg:mb-28 lg:-translate-x-16">
        <div className="mb-8 h-px w-20 bg-gold" />
        <p className="mb-5 max-w-xl text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
          {dictionary.eyebrow}
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-none tracking-normal sm:text-6xl lg:text-7xl">
          {dictionary.title}
        </h1>
        {/* <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
          Professional chauffeurs, comfortable vehicles, and punctual transfers
          for airport arrivals, city rides, and private appointments.
        </p> */}
      </div>

      <a
        href="#contact"
        className="absolute bottom-8 left-1/2 z-20 flex min-h-14 min-w-44 -translate-x-1/2 items-center justify-center rounded-full border border-gold bg-black/35 px-9 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl"
      >
        {dictionary.cta}
      </a>
    </section>
  );
}
