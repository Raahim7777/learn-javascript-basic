const facebookPerson = require('./facebook-personal-user.json');

const personSokheng = facebookPerson.people[0];
const personSokhim = facebookPerson.people[1];

console.log(personSokheng.name, personSokhim.email)

const people = facebookPerson['people'];

console.log(people);