"use strict";

//1-2//

const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("text");
const ageEl = document.getElementById("age");

// btnEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   const result = document.querySelector("input[name=age]").value;
//   document.querySelector("h1").textContent = `Tavo amžius ${result} metai`;

//   alert(document.querySelector("input[name=text]").value);
// });

//3//

// debugger;
// console.log(document.querySelector("h1"));
// btnEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   const age = ageEl.value;
//   if (age >= 18) {
//     document.querySelector("h1").textContent = `Vairuoti gali: ${inputEl.value}`;
//     console.log(inputEl);
//   } else {
//     document.querySelector("h1").textContent = `Dar mokysis vairuoti: ${inputEl.value}`;
//   }

//   inputEl.value = "";
//   ageEl.value = "";
// });

//4// Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60. Variable turi būti aprašyti viršuj, kad būtų lengva keist.

const ageEl = document.getElementById("age");
const btnEl = document.getElementById("button");
const displayPrice = document.getElementById("price");
const price = 6;

btnEl.addEventListener("click", fn);
function fn(event) {
  event.preventDefault();
  const age = ageEl.value;
  if (age < 16) {
    displayPrice.textContent = `${0.5 * price} eur`;
  } else if (age >= 60) {
    displayPrice.textContent = `${(0.7 * price).toFixed(2)} eur`;
  } else displayPrice.textContent = `${price} eur`;
}
