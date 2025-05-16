const poop = require('./pooptastic');

console.log("💩 Welcome to Pooptastic 💩\n");

console.log("👉 Is this poop?:", poop.isPoop('💩'));
console.log("👉 Poop emoji of the day:", poop.poopEmoji());
console.log("👉 Poop rating:", poop.ratePoop());
console.log("👉 Your poop name:", poop.generatePoopName());
console.log("👉 Wisdom from the toilet:");
console.log("   " + poop.getPoopFortune());

console.log("\n👉 Time to flush:");
poop.flushPoop();

