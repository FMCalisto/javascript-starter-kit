var data = [
  {num: 10},
  {num: 20},
  {num: 5}
];

var reducer = function(accumulator, item) {

  console.log("I am an accumulator: ", accumulator);
  console.log("I am an item: ", item);
  console.log("I am an item number: ", item.num);

  return accumulator + item.num;
}

var initialValue = 0;

var total = data.reduce(reducer, initialValue);

console.log("The sum is: ", total);
