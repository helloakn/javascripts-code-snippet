// let hello = require('./hello/world.js');
// hello.greeting();
//
// const {greeting} = require('./hello/world.js');
// greeting();

// const {greeting,sayByeBye} = require('./hello/world.js');
// //greeting();
// sayByeBye();

// const {sayByeBye:bye} = require('./hello/world.js');
// bye();


// const Calculator = require('tech2/num/calculator');
// const calc = new Calculator();
// console.log(calc.sum(1,2));

// const Calculator = require('tech2/num/calculator');
// let tmp = (new Calculator()).sum(1,2);
// console.log(tmp);

// let tmp = (new (require('tech2/num/calculator'))()).sum(1,2);
// console.log(tmp);

const sumResult = require('tech2/num/sum')(3,2);
console.log(sumResult)
