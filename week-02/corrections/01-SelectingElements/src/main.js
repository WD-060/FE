// Selecting elements

const h1 = document.querySelector(".hero-content h1");
console.log(h1);

const links = document.querySelectorAll(".nav-list a");
console.log(links);

const btn = document.querySelector(".btn");
console.log(btn);

const heroContent = document.querySelector(".hero-content");

// Styling elements

h1.style.backgroundColor = "#b5651d";
h1.style.fontSize = "3rem";

links.forEach((link) => (link.style.color = "#faf0e6"));

const paragraph = document.createElement("p");
paragraph.textContent = "Open daily from 7 AM to 9 PM.";
paragraph.style.backgroundColor = "#b5651d";
paragraph.style.color = "#faf0e6";
paragraph.style.fontSize = "0.7rem";
paragraph.style.padding = "0.5rem";
paragraph.style.borderRadius = "0.5rem";
heroContent.appendChild(paragraph);