const element = document.getElementById("word");
const words = ["Dana!", "Kampanye!"];
let wordIndex = 0;

const typewriter = new Typewriter(element, {
  loop: true,
  delay: 100,
});

typewriter.typeString(words[wordIndex]).start();

setInterval(() => {
  typewriter.deleteAll().typeString(words[wordIndex]).start();
  wordIndex = (wordIndex + 1) % words.length;
}, 2000);
