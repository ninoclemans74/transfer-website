import type { Dictionary } from "@/lib/translations";

type FooterProps = {
  dictionary: Dictionary["footer"];
  contact: Dictionary["contact"];
};

export function Footer({ dictionary, contact }: FooterProps) {
  return (
    <footer className="bg-black px-6 py-10 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl border-t border-gold pt-8">
        <div className="grid gap-8 sm:grid-cols-[1fr_1.4fr] sm:items-start">
          <div>
            <p className="text-base font-semibold">{dictionary.brand}</p>
            <p className="mt-3 text-sm text-white/75">
              {dictionary.copyright} {new Date().getFullYear()} {dictionary.brand}.{" "}
              {dictionary.rights}
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {contact.eyebrow}
            </p>
            <div className="grid gap-3 text-sm sm:grid-cols-3">
              {contact.items.map((item) => (
                <div key={item.label}>
                  <p className="text-white/55">{item.label}</p>
                  <p className="mt-1 break-words text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
