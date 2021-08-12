// var variableGlobalConArreglo;
var variableGlobalConArreglo = [];

// const constanteConArreglo;
const constanteConArreglo = [1, 2, 3];

// let variableConArreglo;
let variableConArreglo = [1];
// console.log(variableConArreglo);

variableConArreglo = "Diego, chau arreglo";
// console.log(variableConArreglo);
// ---------------------------------------------------------------------------

const days = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
];

// 1. Derecho viejo
// console.log(days);

// y accedemos con la notación de corchetes
// console.log(days[1]);

// 2. Con aclaración emparchada:
// console.log("Mi arreglo es: ", days);

// 3. Nombrada automáticamente (convertida en objeto)
// console.log({days});

// 4. Método de Console específico para arreglos
// console.table(days);

// ---------------------------------------------------------------------------

// 5. Un arreglo puede contener cualquier tipo de elemento
const arregloDeNros = [1, 2, 3, 4, 5, 6, 7, 8];

const arregloDeObjetos = [ { day : 22 }, { month: "abril"}, { year : 1980 } ];

const arregloDeArreglos = [ [ 1 ], [ 2, 3 ], [ 4, 5, 6 ] ];

const arregloMezclado = [ "lunes", 22, { year : 1980 }, [ 4, 5, 6 ] ];

const arrayWithFunction = [
    1,
    "dos",
    [
        "a",
        "b"
    ],
    function tres() {
        console.log("----------------------------------------");
        console.log("Hola! Soy la función interna del arreglo");
        console.log("----------------------------------------");
        return 2
    },
];
console.log(arrayWithFunction);
console.log(arrayWithFunction[3]);
console.log(arrayWithFunction[3]());
