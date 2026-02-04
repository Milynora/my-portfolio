/* Typing Effect */
const textArray = [
  "web apps.",
  "clean UI.",
  "solutions."
];

let index = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
  if (charIndex < textArray[index].length) {
    typingText.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(type, 300);
  }
}

type();

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
