var initialValue = {};

const users = [
  {
    id: '01',
    name: 'Shane'
  },
  {
    id: '02',
    name: 'Sally'
  }
];

const newUser = (obj, user) => {
  obj[user.id] = user;
  return obj;
}

const reducedNewUsers = users.reduce(newUser, initialValue)

console.log("Reduced New Users: ", reducedNewUsers);
console.log("Option: ", reducedNewUsers['02'].name);
