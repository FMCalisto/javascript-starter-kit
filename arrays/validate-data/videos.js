const videos = [
  {
    title: 'Title 1',
    length: 310,
    viewed: 310
  },
  {
    title: 'Title 2',
    length: 420,
    viewed: 360
  }
];

var complete = (x) => {
  return x.viewed == x.length;
}

const isComplete = videos.every(complete);

console.log(isComplete);
