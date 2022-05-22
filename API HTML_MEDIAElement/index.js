"use strict";

//récupère éléments HTML
let video = document.getElementById("video");
let bouton = document.getElementById("play");
let icone = document.getElementById("playpause");
let boutonVitesse = document.getElementById("speed");
let iconeVitesse = document.getElementById("vitesse");
let range = document.getElementById("range");

//fonction pour gérer la mise sur play et pause de la vidéo
function playPauseVideo() {
  if (icone.className == "fa-solid fa-play") {
    video.play();
    icone.className = "fa-solid fa-pause";
  } else {
    video.pause();
    icone.className = "fa-solid fa-play";
  }
}

// réinitialise les boutons lorsque la vidéo est terminée
function resetBoutons() {
  icone.className = "fa-solid fa-play";
  iconeVitesse.className = "fa-solid fa-forward-step";
  video.playbackRate = 1;
}

//fonction pour changer la vitesse de lecture
function vitesses() {
  //empêche la vitesse d'être changée quand la vidéo n'est pas en cours de lecture
  if (icone.className == "fa-solid fa-pause") {
    if (iconeVitesse.className == "fa-solid fa-forward-step") {
      video.playbackRate = 2;
      iconeVitesse.className = "fa-solid fa-forward-fast";
    } else {
      video.playbackRate = 4;
      iconeVitesse.className = "fa-solid fa-forward-step";
    }
  }
}

// barre de progression de la vidéo
setInterval(function () {
  range.value = video.currentTime;
}, 10);

//ecoute événement bouton play/pause
bouton.addEventListener("click", playPauseVideo);

//ecoute événement bouton vitesses
boutonVitesse.addEventListener("click", vitesses);

//ecoute événement fin de vidéo
video.addEventListener("ended", resetBoutons);
