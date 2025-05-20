// Fun success messages for the contact form
export const successMessages = [
  "🎉 Excelent! Ești pe drumul spre Music Hall of Fame!",
  "🕺 Mesajul tău a nimerit toate notele potrivite. Vom dansa pe el în curând!",
  "🎧 Verificare microfon completă. Echipa noastră se acordează la vibrațiile tale acum!",
  "🥁 Boom! Mesajul tău tocmai a căzut ca o linie de bass grozavă.",
  "🎤 Ai luat legătura cu zeii Jam. Așteaptă un răspuns curând."
];

// Fun error messages for the contact form
export const errorMessages = [
  "🎤 Ups... cineva a scăpat microfonul. Încearcă din nou!",
  "🔌 Oops! Se pare că DJ-ul a deconectat sistemul. Mai încearcă o dată.",
  "🐛 A fost o notă falsă. Ceva s-a defectat – te rugăm să încerci din nou!",
  "📡 Semnalul e neclar. Vinilul nostru sare. Mai încerci o dată?",
  "⚡ Ups, am lovit un acord fals. Poți retrimite?"
];

// Get a random message from the array
export const getRandomMessage = (messages: string[]) => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};