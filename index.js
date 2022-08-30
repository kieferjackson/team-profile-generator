// Including Team Profile Classes
const tp = require('./lib/classes');

const Ted = new tp.Employee ('Ted', 3, 'ted@work.com');
const Bill = new tp.Manager ('Bill', 1, 'bill@work.com', 1);

console.log(Ted);
console.log(Bill);