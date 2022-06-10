"use strict";

let body = document.querySelector("body");

let obj = [
  { chiffre: 1},
  { chiffre: 2},
  { chiffre: 1},
  { chiffre: 2},
];
let array = [];
let count = 0;

/**
 * It creates a div element, sets its id to the value of the current object's chiffre property, sets
 * its class to "card", creates a p element, sets its class to "none", sets its innerHTML to the value
 * of the current object's chiffre property, appends the p element to the div element, and appends the
 * div element to the body element.
 */
function divGenerator() {
  for (let i of obj) {
    let divCard = document.createElement("div");
    divCard.setAttribute("id", `${i.chiffre}`);
    let para = document.createElement("p");
    divCard.className = "card";
    para.className="none";
    para.innerHTML = `${i.chiffre}`;
    divCard.appendChild(para);
    body.appendChild(divCard);
  }
}

divGenerator();



/**
 * It pushes the innerHTML of the clicked card into an array, then checks if the array has two elements
 * and if they are equal. If they are, it changes the class of the paragraph to "ok".
 * @param e - the event object
 */
function compare(e) {
    
  array.push(e.target.childNodes[0].innerHTML);
  let paras =document.querySelectorAll("p");
  if (array.length == 2 && array[0] == array[1]) {
      
   for (let text of paras){
       if (text.style.display=="block"){
        text.className="ok";
       }
   }
  }
  else if(array.length==2 &&  array[0] !== array[1]) {
      for(let text of paras){
          if(text.style.display=="block" && text.className!="ok"){
            
          }
      }
   }
   
  count=0;
  onclickCard();

}


/**
 * If the count is less than 3, display the child node of the target element.
 * @param e - the event object
 */
function returnCard(e) {
  count++;
  if (count < 3) {
    e.target.childNodes[0].style.display = "block";
  }
  compare(e);
}

let divs = document.querySelectorAll(".card");
function onclickCard (){
    divs.forEach((element) => element.addEventListener("click", returnCard));
}

onclickCard();