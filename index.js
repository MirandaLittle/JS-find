'use strict';

// JS callback functions

const isEvenNumber = number => {
  return number % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];

const foundEven = numbers.find(isEvenNumber);
console.log(foundEven); // 2

// Same example but with an anonymous function
const foundOdd = numbers.find((number) => number % 2 !== 0 );
console.log(foundOdd); //1

console.log(isEvenNumber(3));