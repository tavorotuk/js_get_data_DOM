'use strict';

const arrayPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let sum = 0;
let count = 0;

for (let el of arrayPopulation) {
  const num = Number(el.textContent.replace(/,/g, ''));

  if (!isNaN(el)) {
    sum += num;
    count++;
  }
}

const average = count > 0 ? sum / count : 0;

totalPopulation.textContent = sum.toLocaleString();
averagePopulation.textContent = Math.round(average).toLocaleString();
