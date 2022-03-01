"use strict";

// susikuriat nauja html faila
// jame h1 antraste ir mygtuka

// mygtuko paspaudimu pakeiciam antraste i pakeista su js

const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");

btnEl.addEventListener("click", function () {
  resultEl.textContent = `pakeiciau su js`;
});

//________________________________________//

const ageInput = document.getElementById("age");
const btn = document.querySelector("button");
const priceDisplay = document.getElementById("price");

btn.addEventListener("click", fn);

function fn(event) {
  event.preventDefault();
  const price = 6;
  const age = Number(ageInput.value);

  if (age >= 60) {
    priceDisplay.textContent = (0.7 * price).toFixed(2);
  } else if (age < 16) {
    priceDisplay.textContent = (0.5 * price).toFixed(2);
  } else {
    priceDisplay.textContent = price.toFixed(2);
  }
}
