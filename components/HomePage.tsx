import { AboutSection } from "@/components/AboutSection";
import { CarsSection } from "@/components/CarsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import type { Dictionary, Locale } from "@/lib/translations";

type HomePageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HomePage({ locale, dictionary }: HomePageProps) {
  return (
    <>
      <Navbar locale={locale} dictionary={dictionary.nav} />
      <main>
        <HeroSection dictionary={dictionary.hero} />
        <AboutSection dictionary={dictionary.about} />
        <CarsSection dictionary={dictionary.cars} />
        <ContactSection dictionary={dictionary.contact} />
      </main>
      <Footer dictionary={dictionary.footer} />
    </>
  );
}
