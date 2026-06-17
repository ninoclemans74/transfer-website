"use client";

import Image from "next/image";
import { useState } from "react";
import type { Dictionary } from "@/lib/translations";

type CarsSectionProps = {
  dictionary: Dictionary["cars"];
};

export function CarsSection({ dictionary }: CarsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous" | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(() => new Set());
  const cars = dictionary.items;
  const previousIndex = activeIndex === 0 ? cars.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === cars.length - 1 ? 0 : activeIndex + 1;

  function markImageLoaded(src: string) {
    setLoadedImages((current) => {
      if (current.has(src)) {
        return current;
      }

      const nextLoadedImages = new Set(current);
      nextLoadedImages.add(src);
      return nextLoadedImages;
    });
  }

  function renderCarImage({
    src,
    alt,
    sizes,
    priority = false,
  }: {
    src: string;
    alt: string;
    sizes: string;
    priority?: boolean;
  }) {
    const isLoaded = loadedImages.has(src);

    return (
      <>
        {!isLoaded ? (
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-100"
          >
            <div className="h-9 w-9 animate-spin rounded-full border-2 border-neutral-300 border-t-gold" />
          </div>
        ) : null}
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          priority={priority}
          onLoad={() => markImageLoaded(src)}
        />
      </>
    );
  }

  function showPreviousCar() {
    if (direction) {
      return;
    }

    setDirection("previous");
    window.setTimeout(() => {
      setActiveIndex((current) => (current === 0 ? cars.length - 1 : current - 1));
      setDirection(null);
    }, 500);
  }

  function showNextCar() {
    if (direction) {
      return;
    }

    setDirection("next");
    window.setTimeout(() => {
      setActiveIndex((current) => (current === cars.length - 1 ? 0 : current + 1));
      setDirection(null);
    }, 500);
  }

  return (
    <section id="cars" className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mx-auto mb-6 h-px w-16 bg-gold" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
            {dictionary.eyebrow}
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            {dictionary.title}
          </h2>
        </div>

        <div className="p-0 sm:p-0">
          <div className="sm:hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0">
                {[previousIndex, activeIndex, nextIndex].map((carIndex, position) => {
                  const car = cars[carIndex];
                  const basePosition =
                    position === 0
                      ? "-left-[58%]"
                      : position === 1
                        ? "left-[12%]"
                        : "left-[82%]";
                  const animatedPosition =
                    direction === "next"
                      ? position === 0
                        ? "-left-[128%]"
                        : position === 1
                          ? "-left-[58%]"
                          : "left-[12%]"
                      : direction === "previous"
                        ? position === 0
                          ? "left-[12%]"
                          : position === 1
                            ? "left-[82%]"
                            : "left-[152%]"
                        : basePosition;

                  return (
                    <div
                      key={`${car.name}-${carIndex}-${position}`}
                      className={`absolute top-0 aspect-[4/3] overflow-hidden rounded-xl bg-black transition-all duration-500 ease-out ${
                        position === 1
                          ? direction
                            ? "z-10 w-[76%] opacity-55"
                            : "z-10 w-[76%] opacity-100"
                          : direction === "next" && position === 2
                            ? "z-10 w-[76%] opacity-100"
                            : direction === "previous" && position === 0
                              ? "z-10 w-[76%] opacity-100"
                              : "w-[76%] opacity-55"
                      } ${animatedPosition}`}
                    >
                      {renderCarImage({
                        src: car.image,
                        alt: car.name,
                        sizes: "76vw",
                        priority: carIndex === 0,
                      })}
                    </div>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute inset-0">
                {direction === null ? null : (
                  <div
                    className={`absolute top-0 aspect-[4/3] w-[76%] overflow-hidden rounded-xl bg-black transition-all duration-500 ease-out ${
                      direction === "next"
                        ? "left-[82%] opacity-55"
                        : "-left-[58%] opacity-55"
                      }`}
                    >
                      {renderCarImage({
                        src:
                          direction === "next"
                            ? cars[
                                nextIndex === cars.length - 1 ? 0 : nextIndex + 1
                              ].image
                            : cars[
                                previousIndex === 0
                                  ? cars.length - 1
                                  : previousIndex - 1
                              ].image,
                        alt: dictionary.adjacent,
                        sizes: "76vw",
                      })}
                    </div>
                )}
              </div>

              <button
                type="button"
                aria-label={dictionary.previous}
                className="absolute bottom-0 left-0 top-0 z-20 flex w-12 -translate-y-4 items-center justify-center bg-transparent text-gold"
                onClick={showPreviousCar}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-9 w-9"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path d="M15 5 8 12l7 7" />
                </svg>
              </button>
              <button
                type="button"
                aria-label={dictionary.next}
                className="absolute bottom-0 right-0 top-0 z-20 flex w-12 -translate-y-4 items-center justify-center bg-transparent text-gold"
                onClick={showNextCar}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-9 w-9"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path d="m9 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car, index) => (
              <div key={`${car.name}-${index}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black transition-transform duration-300 group-hover:-translate-y-1">
                  {renderCarImage({
                    src: car.image,
                    alt: car.name,
                    sizes: "(min-width: 1024px) 30vw, 45vw",
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
