console.log('Hola desde la calculadora');

let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');

const calculadora = {
    sumar: sumar,
    restar:restar,
    multiplicar: multiplicar,
    dividir: dividir
}

console.log("Operación normal de 'sumar': ", calculadora.sumar(40, 0));
console.log("Operación normal de 'restar': ", calculadora.restar(40, 0));
console.log("Operación normal de 'multiplicar': ", calculadora.multiplicar(40, 2));
console.log("Operación x 0 de 'multiplicar': ", calculadora.multiplicar(40, 0));
console.log("Operación x 0 (B) de 'multiplicar': ", calculadora.multiplicar(0, 2));
console.log("Operación normal de 'dividir': ", calculadora.dividir(40, 4));
console.log("Operación x 0 de 'dividir': ", calculadora.dividir(40, 0))