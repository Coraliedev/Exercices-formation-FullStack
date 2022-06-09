"use strict";

/* Selecting the body element and assigning it to the variable body. */
const body = document.querySelector("body");

/* Creating a new element and assigning it to the variable title. */
const title = document.createElement("h1");
title.textContent = "QUESTIONNAIRE";
body.appendChild(title);

/* Creating an object with the questions and the answers. */
let QCM = [
  "Le premier club de foot à avoir gagné la coupe de france est:",
  [
    "Le FC Lyon",
    "L'olympique de Marseille",
    "Le sporting de Bondy",
    "L'olympique de Pantin",
  ],
  "Dans le film Casablanca,quelle musique l'orchestre interprète-t-il pour couvrir les chants des nazis?",
  [
    "God save the queen",
    "You'll never walk alone",
    "La marseillaise",
    "Lofteurs up and down",
  ],
  "Les guêpes de mer sont?",
  [
    " Des poissons venimeux",
    "Des méduses venimeuses",
    "Le surnom des morpions du commandant cousteau",
    "Des guêpes mais jetées à la mer, simplement",
  ],
  "Laquelle de ces propositions, n’est pas une appellation du « Pierre Feuille Ciseaux » dans le monde ?",
  [
    "Klet-Klat-Klout en Finlande",
    "Schnick-Schnack-Schnuck en Allemagne ?",
    "Kawi-Bawi-Bo en Corée",
    "Chiam-Cham-Choum au Liban",
  ],
  "Parmi ces 3 voitures, laquelle a vraiment existé ?",
  ['La Skoda "Tapina"', 'La Nissan "gigolo"', 'La Mazda "la puta"'],
];

/* An array of the correct answers. */
let responseOk = [
  "L'olympique de Pantin",
  "La marseillaise",
  "Des méduses venimeuses",
  "Klet-Klat-Klout en Finlande",
  'La Mazda "la puta"',
];

/* Creating a new element and assigning it to the variable divQCM. */
let divQCM = document.createElement("div");

/**
 * When the user clicks the button, the current question is removed from the page, and the next
 * question is added to the page.
 * @param e - the event object
 */
function nextQuestion(e){
  e.preventDefault();
    divQCM.innerHTML="";
    form.innerHTML=""
    createQuestion(next);
}

let button=document.createElement("input");
button.setAttribute("type","submit");
button.setAttribute("value","Valider")
let form = document.createElement("form");
divQCM.appendChild(form);

let next=0;

/**
 * It creates a paragraph element, adds the question to it, adds the paragraph to the div, adds the div
 * to the body, creates a radio button for each answer, adds the radio buttons to the form, adds the
 * form to the div, adds the button to the form, and increments the next variable by 2.
 * @param i - the index of the question in the array
 */
function createQuestion(i) {
  if (next<=8){  
  let para = document.createElement("p");
  para.textContent = `${QCM[i]}`;
  divQCM.appendChild(para);
  body.appendChild(divQCM);
  for (const element of QCM[i+1]) {
    let radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", i);
    radio.setAttribute("id",element);
    let label = document.createElement("label");
    label.setAttribute("for", element);
    label.textContent = element;
    form.appendChild(radio);
    form.appendChild(label);
    divQCM.appendChild(form);
  }
  form.appendChild(button);
  next+=2;
  }
  else {console.log("café")}
}

createQuestion(0);
form.addEventListener("submit",nextQuestion);