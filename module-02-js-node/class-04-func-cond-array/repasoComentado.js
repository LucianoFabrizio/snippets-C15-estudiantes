// 6 tipos de datos primitivos


// Declaración de constante. Su contenido no puede cambiar nunca
const descripcion = "geniales";
// Declaración de un booleano. Al estar declarado con "let", su contenido se puede editar luego
let tieneHijos = true;
// Declaración de un número
let cantidadDeHijos = 5;
// Declaración de un string, o cadena de texto
let nombre = "Mauro";

// Declaración de una función
function aletear (cantidadDeAleteos) {
    // Concatenación de strings con variables
    return "El pato va a aletear " + cantidadDeAleteos + " veces!"
    // Uso de estructuras de repetición
    /* for (let i = 0; i < cantidadDeAleteos; i++) {
        console.log("flap!");
    } */
}

// Declaración de un objeto literal, con variables (atributos) y funciones (metodos) dentro
let pato = {
    nombre: nombre,
    descripcion: descripcion,
    tieneHijos: tieneHijos,
    cantidadDeHijos: cantidadDeHijos,
    plumas: 4568,
    aletear: aletear
}

//--------------------------------------------------------------------------------------------------------------------------------------

// Aquí sencillamente usamos los console.log para poder ver los atributos y metodos que tiene el objeto literal "pato"
console.log("Los patos son " + pato.descripcion);
console.log("Este pato ha procreado? " + pato.tieneHijos);

// Uso de condicionales
if (pato.tieneHijos) {
    console.log("Este pato tiene " + pato.cantidadDeHijos + " hijos");
}

// Uso de operadores aritmeticos (+, -, *, /, etc)
pato.cantidadDeHijos = pato.cantidadDeHijos + 1;
// console.log("Este pato ahora tiene " + pato.cantidadDeHijos + " hijos");

// Uso de operadores lógicos (==, ===, !=, <, <=, >, >=  etc)
if (1 === "1") {
    console.log("iguales")
} else {
    console.log("no iguales")
}

if (pato.cantidadDeHijos < 2){
    console.log("Este pato tiene menos de 2 hijos");
} else {
    console.log("Este pato tiene menos de dos hijos")
}

// Llamado del método de pato, con su único parametro que debemos enviar (si no tiene parametros igualmente debemos escribir los parentesis para demostrar que es una función)
console.log(pato.aletear(5));

// Demostración de "undefined", declarando una variable sin asignarle nada
let pato2;
console.log(pato2);