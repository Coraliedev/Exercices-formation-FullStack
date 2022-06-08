"use strict";

const body = document.querySelector("body");

// creer le titre de la page
const title = document.createElement("h1");
title.textContent = "SHIFUMI";
body.appendChild(title);

const pictures = ["ciseau", "feuille", "pierre"];
//creer une div qui contiendra les images pour le choix du joueur
let divPicturesPlayer = document.createElement("div");
divPicturesPlayer.setAttribute("id", "divPlayer");

for (let i of pictures) {
  let image = document.createElement("img");
  image.setAttribute("src", `/pierre feuille ciseaux/img/${i}.png`);
  image.setAttribute("alt", `image ${i}`);
  image.setAttribute("id", `${i}`);
  divPicturesPlayer.appendChild(image);
}
body.appendChild(divPicturesPlayer);

const imagePierre = document.querySelector("#pierre");
const imageCiseau = document.querySelector("#ciseau");
const imageFeuille = document.querySelector("#feuille");

//creer une div image choisie par l'ordinateur et le joueur
let divComputerPlayer = document.createElement("div");
divComputerPlayer.setAttribute("id", "divComputer");

let paraPlayer = document.createElement("p");
paraPlayer.textContent = "Joueur:";
divComputerPlayer.appendChild(paraPlayer);
let divPlayer = document.createElement("div");
divPlayer.innerHTML = `<img src="/pierre feuille ciseaux/img/point.png" alt="point interrogation">`;
divComputerPlayer.appendChild(divPlayer);

let paraComputer = document.createElement("p");
paraComputer.textContent = "Ordinateur:";
divComputerPlayer.appendChild(paraComputer);
let divComputer = document.createElement("div");
divComputer.innerHTML = `<img src="/pierre feuille ciseaux/img/point.png" alt="point interrogation">`;
divComputerPlayer.appendChild(divComputer);
body.appendChild(divComputerPlayer);

// initialisation compteurs
let countPlayer = 0;
let countComputer = 0;

//creation div compteurs

let divCompteur = document.createElement("div");
divCompteur.setAttribute("id", "divCompteurs");
let paraCompteurJoueur = document.createElement("p");
paraCompteurJoueur.innerHTML = `Joueur: 0`;
divCompteur.appendChild(paraCompteurJoueur);
let paraCompteurComputer = document.createElement("p");
paraCompteurComputer.innerHTML = `Ordinateur: 0`;
divCompteur.appendChild(paraCompteurComputer);
body.appendChild(divCompteur);


function resetPartie() {
    divComputer.innerHTML = `<img src="/pierre feuille ciseaux/img/point.png" alt="point interrogation">`;
    divPlayer.innerHTML = `<img src="/pierre feuille ciseaux/img/point.png" alt="point interrogation">`;
    countComputer = 0;
    countPlayer = 0;
    paraCompteurComputer.innerHTML = `Ordinateur: ${countComputer}`;
    paraCompteurJoueur.innerHTML = `Joueur: ${countPlayer}`;
    body.removeChild(body.lastChild);
    body.removeChild(body.lastChild);
  }

function shifumi(indexOfArray) {
  divPlayer.innerHTML = `<img src="/pierre feuille ciseaux/img/${indexOfArray}.png" alt="image ${indexOfArray}">`;
  let random = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  divComputer.innerHTML = `<img src="/pierre feuille ciseaux/img/${pictures[random]}.png" alt="image ${pictures[random]}">`;
  if (
    (indexOfArray === pictures[0] && random === 1) ||
    (indexOfArray === pictures[1] && random === 2) ||
    (indexOfArray === pictures[2] && random === 0)
  ) {
    countPlayer++;
    paraCompteurJoueur.innerHTML = `Joueur: ${countPlayer}`;
  } else if (indexOfArray == pictures[random]) {
    console.log(countPlayer);
  } else {
    countComputer++;
    paraCompteurComputer.innerHTML = `Ordinateur: ${countComputer}`;
  }

  let gagne =document.createElement("div");
  gagne.setAttribute("id","gagnant");

  if (countPlayer === 2) {
    gagne.innerHTML="Joueur gagne";
    body.appendChild(gagne)
    let bouton=document.createElement("button");
    bouton.textContent="Nouvelle partie";
    body.appendChild(bouton);
    bouton.addEventListener('click',() => {resetPartie()})
   
  } else if (countComputer === 2) {
    gagne.innerHTML="Ordinateur gagne";
    body.appendChild(gagne)
    let bouton=document.createElement("button");
    bouton.textContent="Nouvelle partie";
    body.appendChild(bouton);
    bouton.addEventListener('click',() => {resetPartie()})
  }
}


imageCiseau.addEventListener("click", () => {
  shifumi(pictures[0]);
});
imageFeuille.addEventListener("click", () => {
  shifumi(pictures[1]);
});
imagePierre.addEventListener("click", () => {
  shifumi(pictures[2]);
});
