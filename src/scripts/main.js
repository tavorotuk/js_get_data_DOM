'use strict';

const arrayPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let sum = 0;

for (let el of arrayPopulation) {
  el = Number(el.textContent.replace(/,/g, ''));
  sum += el;
}

const average = sum / arrayPopulation.length;

totalPopulation.textContent = sum.toLocaleString();
averagePopulation.textContent = Math.round(average).toLocaleString();
