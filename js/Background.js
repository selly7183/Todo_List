const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const body = document.querySelector("body");

const randomBg = images[Math.floor(Math.random() * images.length)];
const imageBg = document.createElement("img");
body.appendChild(imageBg);

imageBg.src = `img/${randomBg}`;
