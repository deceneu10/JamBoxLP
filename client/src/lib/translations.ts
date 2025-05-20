interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// All text translations for the website
export const translations: Translations = {
  // Navbar
  "navbar.users": {
    en: "For Users",
    ro: "Pentru Utilizatori"
  },
  "navbar.businesses": {
    en: "For Businesses",
    ro: "Pentru Afaceri"
  },
  "navbar.pricing": {
    en: "Pricing",
    ro: "Prețuri"
  },
  "navbar.about": {
    en: "About Us",
    ro: "Despre Noi"
  },
  "navbar.contact": {
    en: "Contact",
    ro: "Contact"
  },
  
  // Hero section
  "hero.title": {
    en: "The Ultimate Multiplayer Mode for Music",
    ro: "Modul Multiplayer Suprem pentru Muzică"
  },
  "hero.subtitle": {
    en: "Transform how people experience music at venues. Create interactive experiences where everyone gets a say in what plays next.",
    ro: "Transformă modul în care oamenii experimentează muzica în localuri. Creează experiențe interactive în care toată lumea are un cuvânt de spus în ceea ce se cântă în continuare."
  },
  "hero.forUsers": {
    en: "For Users",
    ro: "Pentru Utilizatori"
  },
  "hero.forBusinesses": {
    en: "For Businesses",
    ro: "Pentru Afaceri"
  },
  
  // For Users section
  "users.title": {
    en: "For Music Lovers",
    ro: "Pentru Iubitorii de Muzică"
  },
  "users.subtitle": {
    en: "Your music, your choice, in your favorite venues",
    ro: "Muzica ta, alegerea ta, în localurile tale favorite"
  },
  "users.feature1.title": {
    en: "Influence What Plays",
    ro: "Influențează ce se cântă"
  },
  "users.feature1.description": {
    en: "Vote for your favorite songs and help determine what plays next at venues.",
    ro: "Votează pentru melodiile tale preferate și ajută la determinarea a ceea ce se va cânta în continuare în localuri."
  },
  "users.feature2.title": {
    en: "Discover New Music",
    ro: "Descoperă muzică nouă"
  },
  "users.feature2.description": {
    en: "Find new artists and tracks based on what's popular in your favorite spots.",
    ro: "Descoperă artiști și melodii noi pe baza a ceea ce este popular în locurile tale preferate."
  },
  "users.feature3.title": {
    en: "Connect with Others",
    ro: "Conectează-te cu alții"
  },
  "users.feature3.description": {
    en: "Share music with friends and meet people with similar tastes.",
    ro: "Împarte muzica cu prietenii și întâlnește oameni cu gusturi similare."
  },
  
  // For Businesses section
  "business.title": {
    en: "For Venues & Businesses",
    ro: "Pentru Localuri și Afaceri"
  },
  "business.subtitle": {
    en: "Boost engagement and keep customers coming back",
    ro: "Crește implicarea și păstrează clienții fideli"
  },
  "business.feature1.title": {
    en: "Boost Customer Engagement",
    ro: "Crește implicarea clienților"
  },
  "business.feature1.description": {
    en: "Create a more interactive, engaging atmosphere that keeps guests staying longer.",
    ro: "Creează o atmosferă mai interactivă și atractivă care îi face pe oaspeți să stea mai mult."
  },
  "business.feature2.title": {
    en: "Drive Increased Revenue",
    ro: "Generează venituri mai mari"
  },
  "business.feature2.description": {
    en: "Longer stays mean more purchases, increasing your venue's average revenue per customer.",
    ro: "Șederi mai lungi înseamnă mai multe achiziții, crescând venitul mediu per client al localului tău."
  },
  "business.feature3.title": {
    en: "Custom Music Experience",
    ro: "Experiență muzicală personalizată"
  },
  "business.feature3.description": {
    en: "Create the perfect playlist for your venue while still letting customers have input.",
    ro: "Creează lista de redare perfectă pentru localul tău, permițând în același timp clienților să aibă un cuvânt de spus."
  },
  
  // Pricing section
  "pricing.title": {
    en: "Pricing Plans",
    ro: "Planuri de Prețuri"
  },
  "pricing.free.name": {
    en: "Free",
    ro: "Gratuit"
  },
  "pricing.free.description": {
    en: "Perfect for small venues",
    ro: "Perfect pentru localuri mici"
  },
  "pricing.free.price": {
    en: "0 €",
    ro: "0 €"
  },
  "pricing.free.button": {
    en: "Start Free",
    ro: "Începe Gratuit"
  },
  "pricing.free.feature1": {
    en: "Up to 20 concurrent users",
    ro: "Până la 20 de utilizatori simultan"
  },
  "pricing.free.feature2": {
    en: "Basic music control",
    ro: "Control muzical de bază"
  },
  "pricing.free.feature3": {
    en: "Standard support",
    ro: "Asistență standard"
  },
  "pricing.pro.name": {
    en: "Pro",
    ro: "Pro"
  },
  "pricing.pro.description": {
    en: "For growing venues",
    ro: "Pentru localuri în creștere"
  },
  "pricing.pro.price": {
    en: "29 €",
    ro: "29 €"
  },
  "pricing.pro.button": {
    en: "Get Started",
    ro: "Începe acum"
  },
  "pricing.pro.feature1": {
    en: "Unlimited users",
    ro: "Utilizatori nelimitați"
  },
  "pricing.pro.feature2": {
    en: "Advanced controls",
    ro: "Controale avansate"
  },
  "pricing.pro.feature3": {
    en: "Priority support",
    ro: "Asistență prioritară"
  },
  "pricing.pro.feature4": {
    en: "Customer insights",
    ro: "Analize despre clienți"
  },
  "pricing.pro.feature5": {
    en: "Custom branding",
    ro: "Branding personalizat"
  },
  
  // About section
  "about.teamTitle": {
    en: "Meet the Team",
    ro: "Cunoaște Echipa"
  },
  "about.subtitle": {
    en: "The people behind JamBox",
    ro: "Oamenii din spatele JamBox"
  },
  "about.description.p1": {
    en: "JamBox was born from a simple frustration: why can't customers have more say in the music played at their favorite venues?",
    ro: "JamBox s-a născut dintr-o frustrare simplă: de ce clienții nu pot avea mai mult de spus în muzica redată în localurile lor preferate?"
  },
  "about.description.p2": {
    en: "Founded in 2022 by a team of music lovers and tech enthusiasts, we set out to create a platform that connects venues and their customers through interactive music experiences.",
    ro: "Fondată în 2022 de o echipă de iubitori de muzică și entuziaști tech, am pornit să creăm o platformă care conectează localurile și clienții lor prin experiențe muzicale interactive."
  },
  "about.description.p3": {
    en: "Today, JamBox helps hundreds of venues increase engagement, customer satisfaction, and revenue through the power of collaborative music selection.",
    ro: "Astăzi, JamBox ajută sute de localuri să crească implicarea, satisfacția clienților și veniturile prin puterea selecției muzicale colaborative."
  },
  
  // Contact form
  "contact.title": {
    en: "Have a bar, pub or gym? Let the music bring you clients and revenue!",
    ro: "Ai un bar, pub sau sală de sport? Lasă muzica să îți aducă clienți și venituri!"
  },
  "contact.name.label": {
    en: "Name of contact",
    ro: "Nume de contact"
  },
  "contact.name.placeholder": {
    en: "Your name",
    ro: "Numele tău"
  },
  "contact.establishmentName.label": {
    en: "Name of establishment",
    ro: "Numele localului"
  },
  "contact.establishmentName.placeholder": {
    en: "Your establishment name",
    ro: "Numele localului tău"
  },
  "contact.establishmentType.label": {
    en: "Type of establishment",
    ro: "Tipul localului"
  },
  "contact.establishmentType.placeholder": {
    en: "Please select your establishment...",
    ro: "Te rog selectează tipul localului..."
  },
  "contact.establishmentType.pub": {
    en: "Pub",
    ro: "Pub"
  },
  "contact.establishmentType.bar": {
    en: "Bar",
    ro: "Bar"
  },
  "contact.establishmentType.gym": {
    en: "Gym",
    ro: "Sală de sport"
  },
  "contact.establishmentType.other": {
    en: "Other",
    ro: "Altul"
  },
  "contact.email.label": {
    en: "Email",
    ro: "Email"
  },
  "contact.email.placeholder": {
    en: "Your email",
    ro: "Email-ul tău"
  },
  "contact.message.label": {
    en: "Message",
    ro: "Mesaj"
  },
  "contact.message.placeholder": {
    en: "Your message",
    ro: "Mesajul tău"
  },
  "contact.button.sending": {
    en: "Sending...",
    ro: "Se trimite..."
  },
  "contact.button.send": {
    en: "Send Message",
    ro: "Trimite Mesaj"
  },
  
  // Footer
  "footer.contact.title": {
    en: "Contact Us",
    ro: "Contactează-ne"
  },
  "footer.contact.address": {
    en: "Bulevardul Doina Cornea 4E, 1st floor, Bucharest, Romania",
    ro: "Bulevardul Doina Cornea 4E, etaj 1, București, România"
  },
  "footer.contact.email": {
    en: "Email: jambox.vibe@gmail.com",
    ro: "Email: jambox.vibe@gmail.com"
  },
  "footer.contact.phone": {
    en: "Phone: +40 727 934 162",
    ro: "Telefon: +40 727 934 162"
  },
  "footer.links.title": {
    en: "Quick Links",
    ro: "Linkuri Rapide"
  },
  "footer.links.home": {
    en: "Home",
    ro: "Acasă"
  },
  "footer.links.users": {
    en: "For Users",
    ro: "Pentru Utilizatori"
  },
  "footer.links.businesses": {
    en: "For Businesses",
    ro: "Pentru Afaceri"
  },
  "footer.links.about": {
    en: "About Us",
    ro: "Despre Noi"
  },
  "footer.links.contact": {
    en: "Contact",
    ro: "Contact"
  },
  "footer.copyright": {
    en: "© 2023 JamBox. All rights reserved.",
    ro: "© 2023 JamBox. Toate drepturile rezervate."
  },
  "footer.privacy": {
    en: "Privacy Policy",
    ro: "Politica de Confidențialitate"
  },
  "footer.terms": {
    en: "Terms of Service",
    ro: "Termeni și Condiții"
  },
  "footer.cookies": {
    en: "Cookie Policy",
    ro: "Politica de Cookies"
  },
  "about.heading": {
    en: "About JamBox",
    ro: "Despre JamBox"
  },
  "about.team": {
    en: "Our Team",
    ro: "Echipa noastră"
  },
  "business.signup": {
    en: "Sign Up as a Venue",
    ro: "Înscrie Locația Ta"
  }
};

// Function to get text in the current language
export function getTranslation(key: string, language: string): string {
  if (translations[key] && translations[key][language]) {
    return translations[key][language];
  }
  
  // Fallback to English if translation doesn't exist
  if (translations[key] && translations[key]['en']) {
    return translations[key]['en'];
  }
  
  // Return the key if no translation found
  return key;
}