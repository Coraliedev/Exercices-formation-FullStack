// "use strict";

// /* Selecting the body element and assigning it to the variable body. */
// const body = document.querySelector("body");

// /* Creating a new element and assigning it to the variable title. */
// const title = document.createElement("h1");
// title.textContent = "QUESTIONNAIRE";
// body.appendChild(title);

// /* Creating an object with the questions, the answers, the correct answers, and an empty array for the
// player's answers. */
// let QCM = [
//   {question: "question", reponse1: "reponse1", reponse2: "reponse2", reponse3: "reponse3",reponse4: "reponse4", attendu: "attendu", utilisateur: ""},
//   {question: "question", reponse1: "reponse1", reponse2: "reponse2", reponse3: "reponse3",reponse4: "reponse4", attendu: "attendu", utilisateur: ""},
//   {question: "question", reponse1: "reponse1", reponse2: "reponse2", reponse3: "reponse3",reponse4: "reponse4", attendu: "attendu", utilisateur: ""},
//   {question: "question", reponse1: "reponse1", reponse2: "reponse2", reponse3: "reponse3",reponse4: "reponse4", attendu: "attendu", utilisateur: ""},
//   {question: "question", reponse1: "reponse1", reponse2: "reponse2", reponse3: "reponse3",reponse4: "reponse4", attendu: "attendu", utilisateur: ""}
// ]

// {
//   questions: [
//     "Le premier club de foot à avoir gagné la coupe de france est:",
//     "Dans le film Casablanca,quelle musique l'orchestre interprète-t-il pour couvrir les chants des nazis?",
//     "Les guêpes de mer sont?",
//     "Laquelle de ces propositions, n’est pas une appellation du « Pierre Feuille Ciseaux » dans le monde ?",
//     "Parmi ces 3 voitures, laquelle a vraiment existé ?",
//   ],
//   responses: [
//     [
//       "Le FC Lyon",
//       "L'olympique de Marseille",
//       "Le sporting de Bondy",
//       "L'olympique de Pantin",
//     ],
//     [
//       "God save the queen",
//       "You'll never walk alone",
//       "La marseillaise",
//       "Lofteurs up and down",
//     ],
//     [
//       "Des poissons venimeux",
//       "Des méduses venimeuses",
//       "Le surnom des morpions du commandant cousteau",
//       "Des guêpes mais jetées à la mer, simplement",
//     ],
//     [
//       "Klet-Klat-Klout en Finlande",
//       "Schnick-Schnack-Schnuck en Allemagne ?",
//       "Kawi-Bawi-Bo en Corée",
//       "Chiam-Cham-Choum au Liban",
//     ],
//     ['La Skoda "Tapina"', 'La Nissan "gigolo"', 'La Mazda "la puta"'],
//   ],
//   responsesOk: [
//     "L'olympique de Pantin",
//     "La marseillaise",
//     "Des méduses venimeuses",
//     "Klet-Klat-Klout en Finlande",
//     'La Mazda "la puta"',
//   ],
//   responsePlayer: [],
// };

// /* Creating a new element and assigning it to the variable divQCM. */
// let divQCM = document.createElement("div");

// /**
//  * When the user clicks the button, the current question is removed from the page, and the next
//  * question is added to the page.
//  * @param e - the event object
//  */
// function nextQuestion(e) {
//   e.preventDefault();
//   /* Getting the radio buttons that have the same name as the current question, and then it is looping
// through them to find the one that is checked. Then it is getting the id of the checked radio button
// and pushing it to the array. */
//   let radios = document.getElementsByName(next - 1);
//   for (const element of radios) {
//     if (element.checked) {
//       divQCM.innerHTML = "";
//       form.innerHTML = "";
//       let value = element.id;
//       QCM.responsePlayer.push(value);
//       createQCM(next);
//     }
//   }
// }

// let button = document.createElement("input");
// button.setAttribute("type", "submit");
// button.setAttribute("value", "Valider");
// let form = document.createElement("form");
// divQCM.appendChild(form);

// function finalQCM() {
// console.log(QCM.responsePlayer)
//   }


// function createQuestion(i) {
//   let para = document.createElement("p");
//   para.textContent = `${QCM.questions[i]}`;
//   divQCM.appendChild(para);
//   body.appendChild(divQCM);
//   console.log(QCM.responses[i]);
//   for (const element of QCM.responses[i]) {
//     let radio = document.createElement("input");
//     radio.setAttribute("type", "radio");
//     radio.setAttribute("name", i);
//     radio.setAttribute("id", element);
//     let label = document.createElement("label");
//     label.setAttribute("for", element);
//     label.textContent = element;
//     form.appendChild(radio);
//     form.appendChild(label);
//     divQCM.appendChild(form);
//   }
// }

// let next = 0;

// function createQCM(i) {
//   if (next < QCM.questions.length) {
//     createQuestion(i);
//   } else {
//     console.log("end");
//     finalQCM();
//   }
//   form.appendChild(button);
//   next++;
// }

// createQCM(0);

// form.addEventListener("submit", nextQuestion);
