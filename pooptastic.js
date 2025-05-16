const poopEmojis = ['💩', '🪠', '🚽', '🧻', '😷', '🤢'];

function isPoop(input) {
  return typeof input === 'string' && input.includes('💩');
}

function flushPoop() {
  console.log('🚽 Flushing...');
  setTimeout(() => console.log('💦 💨 *gurgle* 💨 💦'), 800);
}

function ratePoop() {
  const score = Math.floor(Math.random() * 11); // 0–10
  const comments = [
    "Yikes.",
    "Could be worse.",
    "Smells artisanal.",
    "Frighteningly majestic.",
    "Legendary loaf."
  ];
  return `${score}/10 – ${comments[score % comments.length]}`;
}

function poopEmoji() {
  return poopEmojis[Math.floor(Math.random() * poopEmojis.length)];
}

function generatePoopName() {
  const adjectives = ['Stinky', 'Silent', 'Sneaky', 'Massive', 'Cheeky', 'Slippery'];
  const nouns = ['Plopper', 'Dumper', 'Nugget', 'Splashmaster', 'WipeHog', 'StainLord'];
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adj} ${noun}`;
}

function getPoopFortune() {
  const fortunes = [
    "He who smelt it, dealt it.",
    "Your next dump will be enlightening.",
    "Flush twice, it's a long way to the cafeteria.",
    "Beware the wet wipe illusion.",
    "Great poops require great fiber."
  ];
  return fortunes[Math.floor(Math.random() * fortunes.length)];
}

module.exports = {
  isPoop,
  flushPoop,
  ratePoop,
  poopEmoji,
  generatePoopName,
  getPoopFortune
};

