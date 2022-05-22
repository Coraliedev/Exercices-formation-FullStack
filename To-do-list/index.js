"use strict";

//récupére les élements HTML
let valider = document.getElementById("submit");
let effacer = document.getElementById("supprimer");
let body = document.querySelector("body");
let listeTache = document.getElementById("liste");
let texte = document.getElementById("texte");
let couleur = document.getElementById("couleur");

let tacheAfaire = [];

//ajoute les taches dans le ul et le local storage
function ajoutTache(event) {
  event.preventDefault();
  let li = document.createElement("li");
  let tache = texte.value;
  li.textContent = tache;
  listeTache.appendChild(li);
  tacheAfaire.push(tache);
  window.localStorage.setItem("taches a faire", tacheAfaire);
  texte.value = "";
}
//garder la liste de taches et la couleur de fond lors du rechargement de la page
window.onload = function () {
  let liste = window.localStorage.getItem("taches a faire");
  if (liste != null) {
    liste = liste.split(",");
    for (let i = 0; i < liste.length; i++) {
      let li = document.createElement("li");
      li.textContent = liste[i];
      listeTache.appendChild(li);
    }
  }
  let color=window.localStorage.getItem("couleur");
  window.document.styleSheets[0].cssRules[0].style.backgroundColor =
    color;
};

// supprimer les éléments de la liste et du local storage
function supprimer() {
  window.localStorage.clear();
  listeTache.innerHTML = "";
}

//changer la couleur de la page avec la couleur de l'input
function changeCouleur() {
  let couleurInput = couleur.value;
  window.document.styleSheets[0].cssRules[0].style.backgroundColor =
    couleurInput;
  window.localStorage.setItem("couleur", couleurInput);
}

// écoute d'événements
valider.addEventListener("click", ajoutTache);
effacer.addEventListener("click", supprimer);
couleur.addEventListener("change", changeCouleur);
