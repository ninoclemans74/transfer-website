export const locales = ["de", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const translations = {
  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      cars: "Fahrzeuge",
      contact: "Kontakt",
      menuLabel: "Menü",
      menuToggle: "Navigation öffnen",
      menuClose: "Navigation schließen",
    },
    hero: {
      eyebrow: "Private Driver Service",
      title: "Premium-Fahrservice für entspannte und zuverlässige Reisen.",
      cta: "Auto buchen",
      imageAlt: "Privates Chauffeur-Fahrzeug",
    },
    about: {
      eyebrow: "Über uns",
      title: "AIRPORT TRANSFER | Premium Chauffeur Service",
      intro:
        "Reisen Sie entspannt und stilvoll mit unserem exklusiven Flughafentransfer in einem Mercedes-Benz (2019).",
      highlights: [
        {
          title: "Komfort & Luxus",
          text: "Genießen Sie eine ruhige Fahrt in einem gepflegten Premium-Fahrzeug mit viel Platz und höchstem Komfort.",
        },
        {
          title: "Pünktlich - Immer",
          text: "Wir garantieren zuverlässige Abholung und bringen Sie stressfrei und rechtzeitig zum Flughafen.",
        },
        {
          title: "Professioneller Service",
          text: "Freundlicher, erfahrener Fahrer - diskret, hilfsbereit und jederzeit für Sie da.",
        },
        {
          title: "24/7 verfügbar",
          text: "Egal ob früh morgens oder spät in der Nacht - wir fahren, wann Sie uns brauchen.",
        },
        {
          title: "Ideal für:",
          text: "Urlaubsreisen · Geschäftsreisen · Hotel- & Firmenkunden",
        },
        {
          title: "Bochum & Umgebung",
          text: "Flughäfen: Düsseldorf, Dortmund, Köln & mehr",
        },
      ],
    },
    cars: {
      eyebrow: "Fahrzeuge",
      title: "Eine gepflegte Flotte für private Fahrten.",
      previous: "Vorheriges Fahrzeug anzeigen",
      next: "Nächstes Fahrzeug anzeigen",
      adjacent: "Weiteres Fahrzeug",
      items: [
        { name: "Executive Sedan", image: "/cars/sedan.png" },
        { name: "Premium SUV", image: "/cars/suv.png" },
        { name: "Business Van", image: "/cars/van.png" },
        { name: "Airport Transfer Sedan", image: "/cars/sedan.png" },
        { name: "City Ride SUV", image: "/cars/suv.png" },
        { name: "Private Pickup Van", image: "/cars/van.png" },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Planen Sie Ihre nächste private Fahrt.",
      sent: "Nachricht erfolgreich gesendet.",
      sending: "Wird gesendet…",
      error: "Senden fehlgeschlagen. Bitte versuchen Sie es erneut.",
      submit: "Nachricht senden",
      fields: {
        name: "Name",
        namePlaceholder: "Ihr vollständiger Name",
        email: "E-Mail-Adresse",
        emailPlaceholder: "ihrname@gmail.com",
        message: "Nachricht",
        messagePlaceholder:
          "Teilen Sie uns Abholort, Ziel, Datum und gewünschte Uhrzeit mit.",
      },
      items: [
        { label: "Standort", value: "Bochum, Deutschland" },
        { label: "Telefonnummer", value: "+49 234 45979838" },
        { label: "E-Mail", value: "Ninoclemens74@yahoo.de" },
      ],
    },
    footer: {
      brand: "Privater Fahrservice",
      copyright: "Urheberrecht",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      cars: "Cars",
      contact: "Contact",
      menuLabel: "Menu",
      menuToggle: "Open navigation",
      menuClose: "Close navigation",
    },
    hero: {
      eyebrow: "Private Driver Service",
      title: "Premium pickup service for calm, reliable travel.",
      cta: "Book car",
      imageAlt: "Private chauffeur vehicle",
    },
    about: {
      eyebrow: "About Us",
      title: "AIRPORT TRANSFER | Premium Chauffeur Service",
      intro:
        "Travel relaxed and in style with our exclusive airport transfer in a Mercedes-Benz (2019).",
      highlights: [
        {
          title: "Comfort & Luxury",
          text: "Enjoy a quiet ride in a well-maintained premium vehicle with generous space and maximum comfort.",
        },
        {
          title: "Always Punctual",
          text: "We guarantee reliable pickup and get you to the airport on time without stress.",
        },
        {
          title: "Professional Service",
          text: "Friendly, experienced driver - discreet, helpful, and available whenever you need support.",
        },
        {
          title: "Available 24/7",
          text: "Whether early in the morning or late at night, we drive when you need us.",
        },
        {
          title: "Ideal for:",
          text: "Holiday travel · Business trips · Hotel & corporate clients",
        },
        {
          title: "Bochum & Surroundings",
          text: "Airports: Düsseldorf, Dortmund, Cologne & more",
        },
      ],
    },
    cars: {
      eyebrow: "Cars",
      title: "A clean fleet for private travel.",
      previous: "Show previous car",
      next: "Show next car",
      adjacent: "Adjacent car",
      items: [
        { name: "Executive sedan", image: "/cars/sedan.png" },
        { name: "Premium SUV", image: "/cars/suv.png" },
        { name: "Business van", image: "/cars/van.png" },
        { name: "Airport transfer sedan", image: "/cars/sedan.png" },
        { name: "City ride SUV", image: "/cars/suv.png" },
        { name: "Private pickup van", image: "/cars/van.png" },
      ],
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Arrange your next private ride.",
      sent: "Message sent successfully.",
      sending: "Sending…",
      error: "Sending failed. Please try again.",
      submit: "Send Message",
      fields: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email address",
        emailPlaceholder: "yourname@gmail.com",
        message: "Message",
        messagePlaceholder:
          "Tell us your pickup location, destination, date, and preferred time.",
      },
      items: [
        { label: "Location", value: "Bochum, Germany" },
        { label: "Phone number", value: "+49 234 45979838" },
        { label: "Email", value: "Ninoclemens74@yahoo.de" },
      ],
    },
    footer: {
      brand: "Private Driver Service",
      copyright: "Copyright",
      rights: "All rights reserved.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      cars: "Авто",
      contact: "Контакты",
      menuLabel: "Меню",
      menuToggle: "Открыть навигацию",
      menuClose: "Закрыть навигацию",
    },
    hero: {
      eyebrow: "Private Driver Service",
      title: "Премиальный трансфер для спокойных и надежных поездок.",
      cta: "Заказать авто",
      imageAlt: "Автомобиль с личным водителем",
    },
    about: {
      eyebrow: "О нас",
      title: "AIRPORT TRANSFER | Premium Chauffeur Service",
      intro:
        "Путешествуйте спокойно и стильно с нашим эксклюзивным трансфером в аэропорт на Mercedes-Benz (2019).",
      highlights: [
        {
          title: "Комфорт и люкс",
          text: "Наслаждайтесь спокойной поездкой в ухоженном премиальном автомобиле с большим пространством и высоким уровнем комфорта.",
        },
        {
          title: "Всегда вовремя",
          text: "Мы гарантируем надежную подачу автомобиля и доставим вас в аэропорт вовремя и без стресса.",
        },
        {
          title: "Профессиональный сервис",
          text: "Дружелюбный и опытный водитель - тактичный, внимательный и готовый помочь в любой момент.",
        },
        {
          title: "Доступно 24/7",
          text: "Рано утром или поздно ночью - мы едем тогда, когда вам нужно.",
        },
        {
          title: "Идеально для:",
          text: "Отпуска · Деловых поездок · Отелей и корпоративных клиентов",
        },
        {
          title: "Бохум и окрестности",
          text: "Аэропорты: Дюссельдорф, Дортмунд, Кельн и другие",
        },
      ],
    },
    cars: {
      eyebrow: "Авто",
      title: "Ухоженный автопарк для частных поездок.",
      previous: "Показать предыдущий автомобиль",
      next: "Показать следующий автомобиль",
      adjacent: "Соседний автомобиль",
      items: [
        { name: "Executive sedan", image: "/cars/sedan.png" },
        { name: "Premium SUV", image: "/cars/suv.png" },
        { name: "Business van", image: "/cars/van.png" },
        { name: "Airport transfer sedan", image: "/cars/sedan.png" },
        { name: "City ride SUV", image: "/cars/suv.png" },
        { name: "Private pickup van", image: "/cars/van.png" },
      ],
    },
    contact: {
      eyebrow: "Контакты",
      title: "Запланируйте вашу следующую частную поездку.",
      sent: "Сообщение успешно отправлено.",
      sending: "Отправка…",
      error: "Не удалось отправить. Попробуйте ещё раз.",
      submit: "Отправить",
      fields: {
        name: "Имя",
        namePlaceholder: "Ваше полное имя",
        email: "Электронная почта",
        emailPlaceholder: "yourname@gmail.com",
        message: "Сообщение",
        messagePlaceholder:
          "Укажите место подачи, пункт назначения, дату и желаемое время.",
      },
      items: [
        { label: "Локация", value: "Бохум, Германия" },
        { label: "Телефон", value: "+49 234 45979838" },
        { label: "E-mail", value: "Ninoclemens74@yahoo.de" },
      ],
    },
    footer: {
      brand: "Сервис с личным водителем",
      copyright: "Авторские права",
      rights: "Все права защищены.",
    },
  },
} as const;

export type Dictionary = (typeof translations)[Locale];
