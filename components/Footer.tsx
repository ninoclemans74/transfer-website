import type { Dictionary } from "@/lib/translations";

type FooterProps = {
  dictionary: Dictionary["footer"];
  contact: Dictionary["contact"];
};

export function Footer({ dictionary, contact }: FooterProps) {
  return (
    <footer className="bg-black px-6 py-12 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl border-t border-gold pt-8 sm:pt-10">
        <div className="grid gap-8 sm:grid-cols-[1fr_1.4fr] sm:items-start">
          <div>
            <p className="text-base font-semibold">{dictionary.brand}</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
              {dictionary.copyright} {new Date().getFullYear()} {dictionary.brand}.{" "}
              {dictionary.rights}
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {contact.eyebrow}
            </p>
            <div className="grid gap-5 text-sm sm:grid-cols-3 sm:gap-4">
              {contact.items.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                    {item.label}
                  </p>
                  <p className="mt-2 break-words leading-6 text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
