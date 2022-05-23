"use strict";

// récupère les éléments HTML
let titre = document.getElementById("titre");
let DivImageChat = document.getElementById("imageChat");
let bouton = document.getElementById("bouton");
let urlChat = document.getElementById("urlImage");
let body = document.getElementById("body");
let coordX = document.getElementById("curseurX");
let coordY = document.getElementById("curseurY");

// fonction qui récupère les images et la race de chat si elle existe
function apiChat() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((item) => {
      urlChat.setAttribute("src", item[0].url);
      if (item[0].breeds.length != 0) {
        titre.textContent = item[0].breeds[0].name;
      } else titre.textContent = "API chat";
    });
}

// afficher la position X et Y du curseur
function positionCurseur(event) {
  coordX.textContent = `Curseur X ${event.offsetX}`;
  coordY.textContent = `Curseur X ${event.offsetY}`;
}

//écoute au clic bouton
bouton.addEventListener("click", apiChat);
// écoute mouvement souris
body.addEventListener("mousemove", positionCurseur);
// ecoute evenement document pr afficher un chat au chargeemnt de la page
document.addEventListener('DOMContentLoaded', apiChat)
