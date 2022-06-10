"use strict";

let body = document.querySelector("body");

let array = [];
let count = 0;
let arrayImages = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
let shuffleArray = [];

/**
 * The function takes an array as an argument, sorts it randomly, and returns the sorted array.
 * @param Array - The array you want to shuffle.
 * @returns the shuffled array.
 */
function Shuffle(Array) {
  shuffleArray = Array.sort(() => 0.5 - Math.random());
  return shuffleArray;
}

let shuffleImages = Shuffle(arrayImages);

/**
 * It creates a div element, creates an img element, sets the src attribute of the img element to the
 * image at the current index of the shuffleImages array, sets the className of the div element to
 * "card", sets the className of the img element to "none", appends the img element to the div element,
 * and then appends the div element to the body element.
 */
function divGenerator() {
  for (let i in shuffleImages) {
    let divCard = document.createElement("div");
    let img = document.createElement("img");
    img.src = `./img/image${shuffleImages[i]}.jpg`;
    divCard.className = "card";
    img.className = "none";
    divCard.appendChild(img);
    body.appendChild(divCard);
  }
}

divGenerator();

/**
 * It resets the game by emptying the array, shuffling the array, and then generating the cards.
 */
function resetGame() {
  array = [];
  shuffleArray = [];
  count = 0;
  body.innerHTML = "";
  Shuffle(arrayImages);
  divGenerator();
  onclickCard();
}

/**
 * It creates a div, a paragraph and a button, then adds them to the body, and adds an event listener
 * to the button.
 */
function endGame() {
  let winDiv = document.createElement("div");
  winDiv.id = "winDiv";
  let winPara = document.createElement("p");
  winPara.textContent = "Félicitations, vous avez gagné!";
  winDiv.appendChild(winPara);
  let buttonEnd = document.createElement("input");
  buttonEnd.type = "button";
  buttonEnd.value = "Rejouer";
  winDiv.appendChild(buttonEnd);
  body.appendChild(winDiv);
  buttonEnd.addEventListener("click", resetGame);
}

/**
 * If the number of elements with the class "ok" is equal to 12, then the game is over.
 */
function testEnd() {
  let ok = document.getElementsByClassName("ok");
  if (ok.length == arrayImages.length) {
    console.log("ok");
    endGame();
  } else {
    onclickCard();
  }
}
/**
 * It compares the images that are clicked on and if they are the same, it adds a class to them so that
 * they stay visible. If they are not the same, it hides them.
 * @param e - the event object
 */

function compare(e) {
  let images = document.querySelectorAll("img");
  array.push(e.target.childNodes[0].src);
  console.log(array);
  let testSimilarImages = 2;
  if (array.length == testSimilarImages && array[0] == array[1]) {
    for (let image of images) {
      if (image.style.display == "block") {
        image.className = "ok";
        array = [];
      }
    }
  } else if (array.length == 2 && array[0] !== array[1]) {
    for (let image of images) {
      if (image.style.display == "block" && image.className != "ok") {
        setTimeout(() => (image.style.display = "none"), 300);
        array = [];
      }
    }
  }
  count = 0;
  testEnd();
}

/**
 * If the count is less than 3, display the child node of the target element.
 * @param e - the event object
 */
function returnCard(e) {
  count++;
  let maxCardReturned = 2;
  if (count < maxCardReturned + 1) {
    e.target.childNodes[0].style.display = "block";
  }
  compare(e);
}

/**
 * When the user clicks on a card, the card is returned to the deck.
 */
function onclickCard() {
  let divs = document.querySelectorAll(".card");
  divs.forEach((element) => element.addEventListener("click", returnCard));
}

onclickCard();
