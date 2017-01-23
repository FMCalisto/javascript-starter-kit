var data = [1, 2, 3];
var initialValue = [];

var reducer = (accumulator, value) => {
  accumulator.push(value * 2);

  return accumulator;
}

var mapped = (item) => {
  return item * 2;
}

var doubleReduce = data.reduce(reducer, initialValue);
var doubleMapped = data.map(mapped);

console.log("Double Reduce: ", doubleReduce);
console.log("Double Mapped: ", doubleMapped);
