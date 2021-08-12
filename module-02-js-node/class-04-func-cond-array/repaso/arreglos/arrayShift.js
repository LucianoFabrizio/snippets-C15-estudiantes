const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

console.log("antes del shift: ", days);

days.shift();

console.log("después del shift: ", days);

// 2. Aprovechando la salida
// let elementoQuitado = days.shift();
// console.log({elementoQuitado})
// console.log("después del 2do. shift: ", days);

// 3. Con arreglo vacío
// const arregloSinNada = [];
// console.log(arregloSinNada.shift());