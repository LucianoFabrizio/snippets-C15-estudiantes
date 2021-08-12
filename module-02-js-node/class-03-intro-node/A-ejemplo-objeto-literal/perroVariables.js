/* Hay dos formas de hacer comentarios:
   puede ser por párrafos, envolviendo el párrafo con barra y asterisco,
   de esta manera  */

// O puede comentarse sólo una línea, de esta manera.

// Aquí debajo están las variables sueltas
var variablePerro = 1;
const variablePatas = 4;
let variableOrejas = 2;
const variableCola = 1;

// A las que accedo simplemente mencionando su nombre, las puedo pintar en
// la terminal con la orden siguiente:

console.log(variablePerro);

/*
    O pasar el mismo console.log con dos parámetros, para evitar confusiones
    Donde el primer parámetro es el string (o cadena de caracteres)

    ->  "Cuántos perros tengo? Respuesta: "
    
    Y el segundo parámetro es la llamada de la variable que definimos arriba

    ->  variablePerro
*/

console.log("Cuántos perros tengo? Respuesta: ", variablePerro);



/* // 2. Aquí tenemos el objeto literal "perro" y cuatro atributos, uno de ellos, un método
let objetoPerro = { 
    atributoPatas : 4, 
    atributoOrejas : 2, 
    atributoCola : 1,
    metodoLadrar : () => console.log("guau!")
}

// Accedemos a las variables simplemente mencionando su nombre:


console.log("Hago que ladre mi perro llamando al método 'ladrar' del objeto 'perro':", );
objetoPerro.metodoLadrar(); */

