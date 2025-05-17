// Fun success messages for the contact form
export const successMessages = [
  "🎉 Great! You're now on the path to the Music Hall of Fame!",
  "🕺 Your message hit all the right notes. We'll be dancing to it shortly!",
  "🎧 Mic check complete. Our team's tuning in to your vibes now!",
  "🥁 Boom! That message just dropped like a killer bassline.",
  "🎤 You've made contact with the Jam gods. Expect a righteous reply soon."
];

// Fun error messages for the contact form
export const errorMessages = [
  "🎤 Uh-oh... someone dropped the mic. Try again in a sec!",
  "🔌 Oops! Looks like the DJ unplugged the system. Give it another spin.",
  "🐛 That was a bum note. Something glitched – please retry!",
  "📡 Signal's fuzzy. Our vinyl's skipping. Try one more time?",
  "⚡ Oops, we hit a sour chord. Can you resend that jam?"
];

// Get a random message from the array
export const getRandomMessage = (messages: string[]) => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};