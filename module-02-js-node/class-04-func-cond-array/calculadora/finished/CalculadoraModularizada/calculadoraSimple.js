console.log('Hola desde la calculadora');

let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');

// Micro desafío 1
// Escribir y ejecutar la función de restar con dos número cualquiera

// Micro desafío 2
// Escribir la función de dividir teniendo en cuenta que el segundo número no puede ser 0

// Micro desafío 3
// Escribir y ejecutar la función de división
// Si el segundo número es 0 devolver error de división por cero


console.log("Operación normal de 'sumar': ", sumar(40, 0));
console.log("Operación normal de 'restar': ", restar(40, 0));
console.log("Operación normal de 'multiplicar': ", multiplicar(40, 2));
console.log("Operación x 0 de 'multiplicar': ", multiplicar(40, 0));
console.log("Operación x 0 (B) de 'multiplicar': ", multiplicar(0, 2));
console.log("Operación normal de 'dividir': ", dividir(40, 4));
console.log("Operación x 0 de 'dividir': ", dividir(40, 0))