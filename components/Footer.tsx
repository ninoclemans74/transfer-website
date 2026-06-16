import type { Dictionary } from "@/lib/translations";

type FooterProps = {
  dictionary: Dictionary["footer"];
};

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="bg-black px-6 py-8 text-white sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-gold pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>{dictionary.brand}</p>
        <p className="text-white/75">
          {dictionary.copyright} {new Date().getFullYear()} {dictionary.brand}.{" "}
          {dictionary.rights}
        </p>
      </div>
    </footer>
  );
}
