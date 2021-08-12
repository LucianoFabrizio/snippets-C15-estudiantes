// Operacion de dividir
// 2 numeros
function dividir(num1, num2) {
    if (num2 == 0) {
        return 'No se puede dividir por 0';
    }    
    return num1 / num2;
}

console.log(dividir(3,0))
module.exports = dividir;

// Hagamos una prueba...
// Qué pasa si eliminamos todo el bloque condicional (if) y ejecutamos calculadora.js?
// EXACTO!
// Aparece un tipo de dato muy especial en consola.
// Podemos conocer más al respecto entrando a: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity