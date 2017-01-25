var people = [
  {
    name: 'Shane'
  },
  {
    name: 'Sally'
  }
];

var people2 = [
  {
    name: 'Simon'
  },
  {
    name: 'Ben'
  }
];

var personName = (person) => {
  console.log(person.name);
}

people
  .forEach(personName);

people2
  .forEach(personName);
