// Acceso
const cadena = "Homo Sapiens";
let idx = 0;
let search = cadena[idx];
console.log({search});

// Largo
let cantidadDeCaracteres = cadena.length;
console.log({cantidadDeCaracteres});

// IndexOf
console.log(cadena.indexOf("Homo"));

// Slice
let copiaDeCadena = cadena.slice();
let copiaIntermedia = cadena.slice(4,5);
let copiaDesdeElInicio = cadena.slice(cantidadDeCaracteres-1)
let copiaDesdeElFinal = cadena.slice(-7)

console.log({copiaDeCadena});
console.log({copiaIntermedia});
console.log({copiaDesdeElInicio});
console.log({copiaDesdeElFinal});

// Trim
copiaDeCadena = "   " + copiaDeCadena + "    ";
console.log("copiaDeCadena antes del trim: ", copiaDeCadena);
console.log(copiaDeCadena.length)
copiaDeCadena.trim()
console.log("copiaDeCadena después del trim: ", copiaDeCadena);
// importancia de distinguir lo que DEVUELVE una función, por un lado,
// y lo que logramos ejecutándola, por el otro.
// console.log("copiaDeCadena después del trim: ", copiaDeCadena.trim());
console.log(copiaDeCadena.length)

// Split
const returnDelSplit = cadena.split("");
// const returnDelSplit = cadena.split(" ");
// const returnDelSplit = cadena.split();
console.log({returnDelSplit});
console.log({cadena});

// Replace
let frase = "Aguante Python";
console.log(frase.replace("Python", "JS"));