const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

console.log("antes del pop: ", days);

days.pop();

console.log("después del pop: ", days);

// 2. Aprovechando la salida
// let elementoQuitado = days.pop();
// console.log({elementoQuitado})
// console.log({days});

// 3. Con arreglo vacío
// const arregloSinNada = [];
// console.log(arregloSinNada.pop());

// 4. Quitando elementos compuestos
// const arregloDeObjetos = [ { day : 22 }, { month: "abril"}, { year : 1980 } ];
// const elementoQuitado = arregloDeObjetos.pop(arregloDeObjetos);
// console.log({elementoQuitado});
