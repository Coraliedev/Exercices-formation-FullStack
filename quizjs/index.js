"use strict";

let section = document.getElementById("section");
let next = 0;

/* Creating a new element and assigning it to the variable title. */
const title = document.createElement("h1");
title.textContent = "QUESTIONNAIRE";
section.appendChild(title);

/* The Question class is a blueprint for creating question objects. */
class Question {
  constructor(questionText, choices, correctAnswer, userAnswer) {
    this.questionText = questionText;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
    this.userAnswer = userAnswer;
  }
}

let question1 = new Question(
  "Le premier club de foot à avoir gagné la coupe de france est:",
  [
    "Le FC Lyon",
    "L'olympique de Marseille",
    "Le sporting de Bondy",
    "L'olympique de Pantin",
  ],
  "L'olympique de Pantin"
);

let question2 = new Question(
  "Dans le film Casablanca,quelle musique l'orchestre interprète-t-il pour couvrir les chants des nazis?",
  [
    "God save the queen",
    "You'll never walk alone",
    "La marseillaise",
    "Lofteurs up and down",
  ],
  "La marseillaise"
);

let question3 = new Question(
  "Les guêpes de mer sont?",
  [
    "Des poissons venimeux",
    "Des méduses venimeuses",
    "Le surnom des morpions du commandant cousteau",
    "Des guêpes mais jetées à la mer, simplement",
  ],
  "Des méduses venimeuses"
);

let question4 = new Question(
  "Laquelle de ces propositions, n’est pas une appellation du « Pierre Feuille Ciseaux » dans le monde ?",
  [
    "Klet-Klat-Klout en Finlande",
    "Schnick-Schnack-Schnuck en Allemagne ?",
    "Kawi-Bawi-Bo en Corée",
    "Chiam-Cham-Choum au Liban",
  ],
  "Klet-Klat-Klout en Finlande"
);
let question5 = new Question(
  "Parmi ces 3 voitures, laquelle a vraiment existé ?",
  ['La Skoda "Tapina"', 'La Nissan "gigolo"', 'La Mazda "la puta"'],
  'La Mazda "la puta"'
);
let QCM = [question1, question2, question3, question4, question5];

/**
 * It clears the section element, then adds the title element back to it, then calls the createQuestion
 * function with the argument 0.
 */
function reStartQCM() {
  section.innerHTML = "";
  section.appendChild(title);
  createQuestion(0);
}

/**
 * It creates a div for each question, then creates a paragraph for each choice, and then adds a
 * checkmark if the choice is correct, a line-through if the choice is wrong, and nothing if the choice
 * is correct but not selected.
 */
function finalQCM() {
  for (let i of QCM) {
    let divQCM = document.createElement("div");
    let para = document.createElement("p");
    para.id = "question";
    para.textContent = `${i.questionText}`;
    divQCM.appendChild(para);
    for (const choice of i.choices) {
      let paraChoice = document.createElement("p");
      paraChoice.id = "choices";
      paraChoice.innerHTML = choice;
      if (
        (choice == i.userAnswer && i.correctAnswer == choice) ||
        choice == i.correctAnswer
      ) {
        paraChoice.innerHTML += "<span>&#10003;</span>";
        paraChoice.style.color = "rgb(30, 180, 60)";
      } else if (choice == i.userAnswer && i.correctAnswer != i.userAnswer) {
        paraChoice.style.color = "red";
        paraChoice.style.textDecoration = "line-through";
      }
      divQCM.appendChild(paraChoice);
    }
    section.appendChild(divQCM);
  }
  let reStart = document.createElement("button");
  reStart.innerText = "Réessayer";
  section.appendChild(reStart);
  reStart.addEventListener("click", reStartQCM);
}

/**
 * It removes the current question, then checks if there are more questions to be asked. If there are,
 * it creates the next question. If there aren't, it creates the final score.
 * @param e - the event object
 */
function removeQuestion(e) {
  next++;
  e.preventDefault();
  if (next < QCM.length) {
    let radios = document.getElementsByName(next - 1);
    for (const element of radios) {
      if (element.checked) {
        document.getElementById("divQCM").remove();
        let value = element.id;
        QCM[next - 1].userAnswer = value;
        createQuestion(next);
      }
    }
  } else {
    next = 0;
    document.getElementById("divQCM").remove();
    finalQCM();
  }
}

/**
 * It creates a form with a question and a set of choices, and adds a submit event listener to the
 * form.
 * @param i - the index of the question in the array
 */
function createQuestion(i) {
  let divQCM = document.createElement("div");
  divQCM.id = "divQCM";
  let form = document.createElement("form");
  let para = document.createElement("p");
  para.textContent = `${QCM[i].questionText}`;
  divQCM.appendChild(para);
  for (const choice of QCM[i].choices) {
    let divForm = document.createElement("div");
    divForm.className = "divForm";
    let radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", i);
    radio.setAttribute("id", choice);
    let label = document.createElement("label");
    label.setAttribute("for", choice);
    label.textContent = choice;
    divForm.appendChild(radio);
    divForm.appendChild(label);
    form.appendChild(divForm);
  }
  let button = document.createElement("input");
  button.setAttribute("type", "submit");
  button.setAttribute("value", "Valider");
  form.appendChild(button);
  divQCM.appendChild(form);
  section.appendChild(divQCM);
  form.addEventListener("submit", removeQuestion);
}

/* Calling the function `createQuestion` and passing the argument `0` to it. */
createQuestion(0);
