
// DATA VARIABLES

var data = [1, 2, 3];
var dataBig = [0, 1, 2, 3, 4, 5, 6, 8, 9];

// INITIAL VALUES

var initialValue = [];
var evensInitialValue = [];

// FUNCTIONS

var reducer = (accumulator, value) => {
  accumulator.push(value * 2);

  return accumulator;
}

var mapped = (item) => {
  return item * 2;
}

var evens = (accumulator, value) => {
  if (value % 2 === 0) {
    accumulator.push(value);
  }

  return accumulator;
}

var odds = (item) => {
  return (item % 2 != 0);
}

// TRANSFORMATIONS

var doubleReduced = data.reduce(reducer, initialValue);
var doubleMapped = data.map(mapped);
var evensReduced = dataBig.reduce(evens, evensInitialValue);
var oddsFiltered = dataBig.filter(odds);

// LOGS

console.log("Double Reduced: ", doubleReduced);
console.log("Double Mapped: ", doubleMapped);
console.log("Evens Reduced: ", evensReduced);
console.log("Odds Filtered: ", oddsFiltered);


