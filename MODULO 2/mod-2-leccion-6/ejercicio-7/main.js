const user = {};
const job = 'developer';

user.firstName = 'Patricia';
user.lastName = 'Vaquero';
user.age = '29';
user.job = job;

console.log(user);

const user2 = user;
user2.age = 30;
user2.firstName = 'Lorena';

console.log(user);
console.log(user2);

