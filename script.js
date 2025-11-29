/* DARK MODE */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

/* TYPING EFFECT */
const text = [
  "Full-Stack Developer",
  "JavaScript Enthusiast",
  "UI/UX Designer",
  "Open-Source Contributor"
];

let index = 0;
let charIndex = 0;

function type() {
  const typingElement = document.querySelector(".typing");

  if (charIndex < text[index].length) {
    typingElement.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  const typingElement = document.querySelector(".typing");

  if (charIndex > 0) {
    typingElement.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 400);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
