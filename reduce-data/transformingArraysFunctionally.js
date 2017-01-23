var data = [10, 20, 5];

var reducer = function(accumulator, item) {

  console.log("I am an accumulator: ", accumulator);
  console.log("I am an item: ", item);

  return accumulator + item;
}

var initialValue = 0;

var total = data.reduce(reducer, initialValue);

console.log("The sum is: ", total);
