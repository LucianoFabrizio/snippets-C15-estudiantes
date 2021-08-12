const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

console.log("antes del unshift: ", days);

days.unshift("osvaldo");

console.log("después del unshift: ", days);

// 2. Aprovechando la salida
// let largoActualizado = days.unshift("roberto");
// console.log({largoActualizado})
// console.log({days})