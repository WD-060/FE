const body = document.querySelector("body");

// Creating elements
const header = document.createElement("header");
header.classList.add("header");

const nav = document.createElement("nav");
nav.classList.add("nav");

const logo = document.createElement("a");
logo.textContent = "Coffee Shop";
logo.href = "#";
logo.classList.add("logo");

const navList = document.createElement("ul");
navList.classList.add("nav-list");

const navItems = ["Home", "Menu", "About", "Contact"];

navItems.forEach((item) => {
  const navItem = document.createElement("li");
  navItem.classList.add("nav-item");

  const link = document.createElement("a");
  link.textContent = item;
  link.href = "#";
  link.classList.add("nav-link");

  navItem.appendChild(link);
  navList.appendChild(navItem);
});

nav.appendChild(logo);
nav.appendChild(navList);
header.appendChild(nav);

const hero = document.createElement("section");
hero.classList.add("hero");

const heroContent = document.createElement("div");
heroContent.classList.add("hero-content");

const heroTitle = document.createElement("h1");
heroTitle.textContent = "Welcome to Our Coffee Shop";

const heroText = document.createElement("p");
heroText.textContent = "Enjoy the best coffee in town.";
heroText.classList.add("hero-text");

const btn = document.createElement("a");
btn.textContent = "Explore Our Menu";
btn.href = "#";
btn.classList.add("btn");

heroContent.appendChild(heroTitle);
heroContent.appendChild(heroText);
heroContent.appendChild(btn);
hero.appendChild(heroContent);

// Create footer
const footer = document.createElement("footer");
footer.classList.add("footer");

const footerText = document.createElement("p");
footerText.textConent = "© 2024 Coffee Shop. All rights reserved.";
footerText.classList.add("footer-text");

footer.appendChild(footerText);

body.appendChild(header);
body.appendChild(hero);
body.appendChild(footer);


// Applying styles

// Header styles
header.style.backgroundColor = "#fff";
header.style.boxShadow = " 0 2px 4px rgba(0, 0, 0, 0.1)"
header.style.padding = "1rem 0";

// Nav styles
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.maxWidth = "1200px";
nav.style.margin = "0 auto";
nav.style.padding = "0 1rem";

// Logo styles
logo.style.fontSize = "1.5rem";
logo.style.fontWeight = "bold";
logo.style.color = "#333";
logo.style.textDecoration = "none";

// Nav list styles   
navList.style.display = "flex";
navList.style.listStyle = "none";

// Nav item styles
document.querySelectorAll(".nav-item").forEach((item) => item.style.marginLeft = "1.5rem")

document.querySelectorAll(".nav-link").forEach((link) => {
    link.style.textDecoration = "none";
    link.style.color = "#333";
    link.style.fontWeight = "bold";
})
