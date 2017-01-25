const fields = [
  {
    field: 'email',
    value: 'shane@example.com',
    errors: []
  },
  {
    field: 'name',
    value: '',
    errors: ['No name provided']
  }
];

const isValid = fields.every(x => x.errors.length == 0);

console.log(isValid);
