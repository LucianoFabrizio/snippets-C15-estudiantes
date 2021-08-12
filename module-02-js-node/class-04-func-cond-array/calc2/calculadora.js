// const dividir = ;
const sumar = require("./sumar.js");
const multiplicar = require("./multiplicar.js");
const restar = require("./restar.js");
const dividir = require("./dividir.js");

// console.log(dividir(8,2))
// console.log(restar(3,2))
// console.log(multiplicar(1,0))
// console.log(sumar(2,2))

const calculadora = {
  division: dividir,
  suma: sumar,
  multiplicacion: multiplicar,
  resta: restar,
};

/* console.log(
  calculadora.division(12, 3),
  calculadora.multiplicacion(1, 2),
  calculadora.resta(10, 9),
  calculadora.suma(12, 12)
); */

module.exports = calculadora;
