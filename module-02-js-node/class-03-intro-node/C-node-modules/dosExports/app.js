// 1.
const sumar = require('./sumar');
const restar = require('./restar');

// 2.
// const sumar = require('./ambasFunciones').sumar;
// const restar = require('./ambasFunciones').restar;

const suma = sumar(100,200);
const resta = restar(300,200);

console.log({suma});
console.log({resta});