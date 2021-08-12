/* Chequeado */

const fs = require('fs');

// 0.
// En Playground importan 'fs' y hacen una impresión en consola para mostrarlo
// console.log(fs)

fs.writeFileSync("./textoUno.txt", "Hola, soy Texto Uno.");

// 1.
// sin "./" funciona igual, pero no es aconsejable
// fs.writeFileSync("textoUno.txt", "Hola, soy Texto Uno.");
f
// 2.
// fs.copyFileSync('./textoUno.txt', './textoDos.txt');

// 3.
// fs.mkdirSync("./subcarpeta");
// fs.copyFileSync('textoUno.txt', 'subcarpeta/textoDos.txt');

// 4.
// const textoUnoOriginal = fs.readFileSync("./textoUno.txt", 'utf8');
// console.log({textoUnoOriginal});

// 5.
// fs.writeFileSync("./textoUno.txt", "Hola, soy Texto Dos.");
// const textoUnSobreescrito = fs.readFileSync("./textoUno.txt", 'utf8');
// console.log({textoUnSobreescrito});
