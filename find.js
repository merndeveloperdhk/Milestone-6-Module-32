const numbers = [12,5,95,26,24,15,28,34,62];
const bigNumber = numbers.filter(number => number >30);
console.log("Big Number = ", bigNumber);
const largeNumber = numbers.find(number => number >= 60);
console.log("Large Number = ", largeNumber);
const evenNumber = numbers.filter(number => number % 2 == 0);
console.log("Even Number =", evenNumber);
const oddNumbers= numbers.filter(number => number % 2 !== 0);
console.log("Odd Number = ", oddNumbers);