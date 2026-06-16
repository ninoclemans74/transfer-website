import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/HomePage";
import { isLocale, locales, translations, type Locale } from "@/lib/translations";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const metadataByLocale: Record<Locale, Metadata> = {
  de: {
    title: "Private Driver Service | Flughafentransfer Bochum",
    description:
      "Premium Chauffeur Service und Flughafentransfer in Bochum für Düsseldorf, Dortmund, Köln und Umgebung.",
    alternates: {
      canonical: "/de",
      languages: {
        de: "/de",
        en: "/en",
        ru: "/ru",
      },
    },
  },
  en: {
    title: "Private Driver Service | Airport Transfer Bochum",
    description:
      "Premium chauffeur service and airport transfer in Bochum for Düsseldorf, Dortmund, Cologne, and surrounding areas.",
    alternates: {
      canonical: "/en",
      languages: {
        de: "/de",
        en: "/en",
        ru: "/ru",
      },
    },
  },
  ru: {
    title: "Private Driver Service | Трансфер в аэропорт Бохум",
    description:
      "Премиальный сервис с личным водителем и трансфер в аэропорт из Бохума в Дюссельдорф, Дортмунд, Кельн и другие города.",
    alternates: {
      canonical: "/ru",
      languages: {
        de: "/de",
        en: "/en",
        ru: "/ru",
      },
    },
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return metadataByLocale[locale];
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <HomePage locale={locale} dictionary={translations[locale]} />;
}
