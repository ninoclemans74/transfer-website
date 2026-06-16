"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/translations";

type NavbarProps = {
  locale: Locale;
  dictionary: Dictionary["nav"];
};

const languageLabels: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  ru: "RU",
};

const localeOptions: Locale[] = ["de", "en", "ru"];

function getNavItems(dictionary: Dictionary["nav"]) {
  return [
    { label: dictionary.home, href: "#home" },
    { label: dictionary.about, href: "#about" },
    { label: dictionary.cars, href: "#cars" },
    { label: dictionary.contact, href: "#contact" },
  ];
}

export function Navbar({ locale, dictionary }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = getNavItems(dictionary);

  return (
    <>
      <header className="fixed left-0 right-0 top-5 z-[60] flex justify-end px-4 md:justify-center">
        <nav
          aria-label="Primary navigation"
          className="w-auto text-white md:w-full md:max-w-3xl md:rounded-full md:border md:border-gold/70 md:bg-black/35 md:px-5 md:py-3 md:shadow-[0_18px_60px_rgba(0,0,0,0.18)] md:backdrop-blur-xl"
        >
          <div className="flex items-center justify-end md:justify-center">
            <div className="hidden items-center justify-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 border-l border-white/30 pl-5">
                {localeOptions.map((option) => (
                  <Link
                    key={option}
                    href={`/${option}`}
                    className={`text-xs font-semibold transition-colors hover:text-gold ${
                      option === locale ? "text-gold" : "text-white"
                    }`}
                  >
                    {languageLabels[option]}
                  </Link>
                ))}
              </div>
            </div>

            <button
              type="button"
              aria-label={dictionary.menuToggle}
              aria-expanded={isOpen}
              className="rounded-full border border-gold/35 bg-black/45 px-5 py-3 text-xs font-semibold tracking-[0.16em] text-white shadow-[0_14px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors hover:border-gold md:hidden"
              onClick={() => setIsOpen((current) => !current)}
            >
              {dictionary.menuLabel}
            </button>
          </div>
        </nav>
      </header>

      <button
        type="button"
        aria-label={dictionary.menuClose}
        className={`fixed inset-0 z-40 bg-transparent transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        aria-label="Mobile navigation"
        className={`fixed right-6 top-20 z-50 w-[min(78vw,260px)] rounded-[18px] border border-gold/35 bg-black/80 px-6 py-6 text-white shadow-[0_22px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-3 text-base font-semibold transition-colors hover:bg-white/10 hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-5 flex gap-2 border-t border-white/15 pt-5">
            {localeOptions.map((option) => (
              <Link
                key={option}
                href={`/${option}`}
                className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.16em] transition-colors ${
                  option === locale
                    ? "border-gold bg-gold text-black"
                    : "border-white/20 text-white hover:border-gold hover:text-gold"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {languageLabels[option]}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
