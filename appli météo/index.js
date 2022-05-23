// récupère les éléments HTML
let form = document.getElementById("form");
let ville = document.getElementById("ville");
let sectionMeteo = document.getElementById("meteo");
let nomVille = document.getElementById("h2");
let longitude = document.getElementById("longitude");
let latitude = document.getElementById("latitude");

// fonction appel API
const apiCall = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d1235f11f38a5d75a161a12b0081113e`
  )
    .then(responseOk, responseError)
    .then(recupMéteo)
    .catch(function (error) {
      console.log(error);
    });
};

//recupere la ville longitude et latitude
function recupVille(json) {}

// réponse si le fetch est ok
function responseOk(response) {
  //console.log(response.json());
  return response.json();
}
//réponse si erreur lors du fetch
function responseError(error) {
  console.log(error);
}

// fonction pour récupérer les données de toutes les 3h
function recupMéteo(json) {
  for (let i = 0; i < 40; i++) {
    // creer une div pour y mettre les éléments
    let div = document.createElement("div");
    sectionMeteo.appendChild(div);
    // recupere la température actuelle dans un paragraphe
    let p1 = document.createElement("p");
    p1.textContent = Math.round(json.list[i].main.temp_max - 272, 15) + "°C";
    div.appendChild(p1);
    // récupère la date et l'heure
    let p2 = document.createElement("p");
    p2.textContent = json.list[i].dt_txt;
    div.appendChild(p2);
    // récupère l'icône du temps
    let p3 = document.createElement("img");
    p3.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${json.list[i].weather[0].icon}.png`
    );
    div.appendChild(p3);
    // récupère la température min
    let p4 = document.createElement("p");
    p4.textContent =
      "Min:" + Math.round(json.list[i].main.temp_min - 272, 15) + "°C";
    div.appendChild(p4);
    // récupère la température max
    let p5 = document.createElement("p");
    p5.textContent =
      "Max:" + Math.round(json.list[i].main.temp_max - 272, 15) + "°C";
    div.appendChild(p5);
    // récupère l'humidité
    let p6 = document.createElement("p");
    p6.textContent = "Humidité:" + json.list[i].main.humidity + "%";
    div.appendChild(p6);
    // récupère la pression
    let p7 = document.createElement("p");
    p7.textContent = "Pression:" + json.list[i].main.pressure + "Pa";
    div.appendChild(p7);
        //recupere le nom de la ville longitude et latitude
    nomVille.textContent = json.city.name.toUpperCase();
    longitude.textContent = `Longitude :${json.city.coord.lon}`;
    latitude.textContent = `Latitude :${json.city.coord.lat}`;
    console.log(json.city.coord.lon);
  }
}

//reset la section méteo et les contenus crées
function reset(){
   sectionMeteo.textContent="";
}

// ecoute evenement submit sur le formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();
  reset();
  city = event.target.ville.value;
  apiCall(city);
});
