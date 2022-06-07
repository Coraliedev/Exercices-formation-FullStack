"use strict";

let body = document.querySelector("body");

// creer la barre de navigation
let barreNav = document.createElement("nav");
let div = document.createElement("div");
div.innerHTML = `<img src="/exercice netflix/img/netflix-logo-png-2569.png" alt="logo netflix" id="netflix"></img>`;
let tableauNav = ["Accueil", "Séries", "Films", "Nouveautés"];
for (let i of tableauNav) {
  div.innerHTML += ` <a href="#">${i}</a>`;
}
barreNav.appendChild(div);
barreNav.innerHTML += `<img src="/exercice netflix/img/loupe_img.png" id="recherche" alt="icone recherche"></img>`;
body.appendChild(barreNav);

//creer la section série
let sectionSerie = document.createElement("section");
sectionSerie.innerHTML = `<h2>Séries</h2>`;
for (let i = 1; i <= 5; i++) {
  sectionSerie.innerHTML += `<img src="/exercice netflix/img/serie${i}.jpg" alt="image serie${i}">`;
}
body.appendChild(sectionSerie);

//creer la section série
let sectionNouveaute = document.createElement("section");
sectionNouveaute.innerHTML = `<h2>Nouveautés</h2>`;
for (let i = 1; i <= 5; i++) {
  sectionNouveaute.innerHTML += `<img src="/exercice netflix/img/nouveaute${i}.jpg" alt="image nouveaute${i}">`;
}
body.appendChild(sectionNouveaute);

//creer la section série
let sectionRevoir = document.createElement("section");
sectionRevoir.innerHTML = `<h2>Revoir</h2>`;
for (let i = 1; i <= 5; i++) {
  sectionRevoir.innerHTML += `<img src="/exercice netflix/img/revoir${i}.jpg" alt="image revoir${i}">`;
}
body.appendChild(sectionRevoir);
