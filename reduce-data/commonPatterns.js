
// DATA VARIABLES

var data = [1, 2, 3];
var dataBig = [0, 1, 2, 3, 4, 5, 6, 8, 9];
var dataHuge = [];

// POPULATE DATA

for (var i = 0; i < 1000000; i++) {
  dataHuge[i] = i;
}

// INITIAL VALUES

var initValue = [];
var evensInitValue = [];
var initDataHuge = [];

// FUNCTIONS

var reducer = (accumulator, value) => {
  accumulator.push(value * 2);

  return accumulator;
}

var double = (item) => {
  return item * 2;
}

var evensReducer = (accumulator, value) => {
  if (value % 2 === 0) {
    accumulator.push(value);
  }

  return accumulator;
}

var evens = (item) => {
  return (item % 2 === 0);
}

var odds = (item) => {
  return (item % 2 != 0);
}

// TRANSFORMATIONS

var doubleReduced = data.reduce(reducer, initValue);
var doubleMapped = data.map(double);
var evensReduced = dataBig.reduce(evensReducer, evensInitValue);
var evensFilteredDoubled = dataBig.filter(evens).map(double);
var oddsFiltered = dataBig.filter(odds);
var filterMappedDataHuge = dataHuge.filter(evens).map(double);
var reducedDataHuge = dataHuge.reduce(evensReducer, initDataHuge);

// LOGS

console.log("Double Reduced: ", doubleReduced);
console.log("Double Mapped: ", doubleMapped);
console.log("Evens Reduced: ", evensReduced);
console.log("Evens Filtered Doubled: ", evensFilteredDoubled);
console.log("Odds Filtered: ", oddsFiltered);

// TIME COUNTERS

console.time('dataHuge');
console.log("Huge Data Filter Mapped: ", filterMappedDataHuge);
console.timeEnd('dataHuge');

console.time('dataHugeReduce');
console.log("Huge Data Reduced: ", reducedDataHuge);
console.timeEnd('dataHugeReduce');


