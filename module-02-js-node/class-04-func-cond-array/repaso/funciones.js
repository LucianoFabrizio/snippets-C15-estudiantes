/*
Escribir las siguientes tres funciones:

- anterior: recibe un número como parámetro y devuelve ese número menos uno.

- triple: recibe un número como parámetro y devuelve el triple de ese número.

- anteriorDelTriple: recibe un número como parámetro y, utilizando las dos
funciones anteriores, tendrá que devolver el número recibido multiplicado 
por 3 (tres) y al resultado restarle 1 (uno).
*/

function anterior(nro) {
    return nro - 1;
}

function triple(nro) {
    return nro * 3;
}

function anteriorDelTriple(nro) {
    const tripleDelOriginal = triple(nro);
    const anteriorDelTripleDelOriginal = anterior(tripleDelOriginal);
    return anteriorDelTripleDelOriginal;
}