//récupère les éléments du HTML
let button = document.getElementById("button");
let latitude=document.getElementById("latitude");
let longitude=document.getElementById("longitude");
let date= document.getElementById("date");

function onClickButton () {
navigator.geolocation.getCurrentPosition(geo_ok,geo_error);
};

function geo_ok (position) {
    console.log(position); 
    latitude.textContent= `Latitude ${position.coords.latitude}`; 
    longitude.textContent= `Longitude ${position.coords.longitude}`;
    let timestamp= position.timestamp;
    let heure = (new Date(timestamp)).toLocaleString();
    date.textContent = `Date ${heure}`;
};

function geo_error () {
    alert("Sorry, no position available.");
}

//écoute au clic bouton
button.addEventListener('click',onClickButton);