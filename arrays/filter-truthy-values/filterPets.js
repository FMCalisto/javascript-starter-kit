var people = [
  {
    name: 'Shane',
    pets: ['cat', 'dog']
  },
  {
    name: 'Simon',
    pets: ['horse']
  },
  {
    name: 'Ben',
    pets: []
  },
];

var petsLength = x => x.pets.length;
var filtered = people.filter(petsLength);

console.log(filtered);
