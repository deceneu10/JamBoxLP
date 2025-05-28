// Fun success messages for the contact form
export const successMessages = {
  en: [
    "🎉 Excellent! You're on your way to the Music Hall of Fame!",
    "🕺 Your message hit all the right notes. We'll dance to it soon!",
    "🎧 Mic check complete. Our team is tuning into your vibes now!",
    "🥁 Boom! Your message just dropped like an awesome bass line.",
    "🎤 You've connected with the Jam gods. Expect a response soon."
  ],
  ro: [
    "🎉 Excelent! Ești pe drumul spre Music Hall of Fame!",
    "🕺 Mesajul tău a nimerit toate notele potrivite. Vom dansa pe el în curând!",
    "🎧 Verificare microfon completă. Echipa noastră se acordează la vibrațiile tale acum!",
    "🥁 Boom! Mesajul tău tocmai a căzut ca o linie de bass grozavă.",
    "🎤 Ai luat legătura cu zeii Jam. Așteaptă un răspuns curând."
  ]
};

// Fun error messages for the contact form
export const errorMessages = {
  en: [
    "🎤 Oops... someone dropped the mic. Try again!",
    "🔌 Oops! Looks like the DJ unplugged the system. Give it another shot.",
    "🐛 That was a false note. Something glitched – please try again!",
    "📡 Signal's unclear. Our vinyl is skipping. Try once more?",
    "⚡ Oops, we hit a false chord. Can you resend?"
  ],
  ro: [
    "🎤 Ups... cineva a scăpat microfonul. Încearcă din nou!",
    "🔌 Oops! Se pare că DJ-ul a deconectat sistemul. Mai încearcă o dată.",
    "🐛 A fost o notă falsă. Ceva s-a defectat – te rugăm să încerci din nou!",
    "📡 Semnalul e neclar. Vinilul nostru sare. Mai încerci o dată?",
    "⚡ Ups, am lovit un acord fals. Poți retrimite?"
  ]
};

// Get a random message from the array based on language
export const getRandomMessage = (messages: string[], language: string = 'ro') => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

export const getRandomSuccessMessage = (language: string = 'ro') => {
  const messages = successMessages[language as keyof typeof successMessages] || successMessages.ro;
  return getRandomMessage(messages, language);
};

export const getRandomErrorMessage = (language: string = 'ro') => {
  const messages = errorMessages[language as keyof typeof errorMessages] || errorMessages.ro;
  return getRandomMessage(messages, language);
};