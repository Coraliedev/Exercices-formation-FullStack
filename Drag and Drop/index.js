"use strict";

//récupère les éléments HTML
let divDrag = document.getElementById("drag");
let divDrop = document.getElementById("drop");
let imageDrag = document.getElementById("imageDrag");
let legendeDrag = document.getElementById("legendeDrag");

function dragstart(e) {
  e.dataTransfer.setData("text", e.target.getAttribute("id"));
}

function dragover(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}

function drop(e) {
  e.preventDefault();
  let drop = e.dataTransfer.getData("text");
  e.currentTarget.appendChild(document.getElementById(drop));
  e.stopPropagation();
}

// écoutes d'événements pr passer les éléments draggables de la div 1 à 2
divDrag.addEventListener("dragstart", dragstart);
divDrop.addEventListener("dragover", dragover);
divDrop.addEventListener("drop", drop);

// écoutes d'événements pr passer les éléments draggables de la div 2 à 1
divDrop.addEventListener("dragstart", dragstart);
divDrag.addEventListener("dragover", dragover);
divDrag.addEventListener("drop", drop);
