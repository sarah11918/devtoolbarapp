import { defineToolbarApp } from "astro/toolbar";

const motivationalMessages = [
  "You're doing great!",
  "Keep up the good work!",
  "You're awesome!",
  "You're a star!",
];

export default defineToolbarApp({
    init(canvas) {
      const h1 = document.createElement('h1');
      h1.textContent = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

      canvas.appendChild(h1);
    },
});