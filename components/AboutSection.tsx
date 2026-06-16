import type { Dictionary } from "@/lib/translations";

type AboutSectionProps = {
  dictionary: Dictionary["about"];
};

export function AboutSection({ dictionary }: AboutSectionProps) {
  return (
    <section id="about" className="bg-white px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 h-px w-16 bg-gold" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
            {dictionary.eyebrow}
          </p>
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            {dictionary.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8">
            {dictionary.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dictionary.highlights.map((item) => (
            <article
              key={item.title}
              className="border-l-2 border-gold py-1 pl-5"
            >
              <h3 className="text-lg font-semibold tracking-normal">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-black/75">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
