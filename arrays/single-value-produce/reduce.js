const items = [1, 2, 3, 4, 5];
const sum = items.reduce((prev, item) => {
  console.log('prev', prev, 'item', item);
  return prev + item;
}, 0);

// fn(1, 2) -> 3
// fn(3, 3) -> 6
// fn(6, 4) -> 10
// fn(10, 5) -> 15

console.log("Result: ", sum);
