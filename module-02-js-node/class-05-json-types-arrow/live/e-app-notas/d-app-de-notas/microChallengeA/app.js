// Microdesafíos A
// 1. Creamos tareas.json
// 2. Creamos el arreglo con dichos objetos y dichas propiedades

// 3. Necesitamos leer un archivo de nuestro file system, ergo, importamos FS
const fs = require('fs');

// 4. Usamos el método sgte para leer el contenido y guardarlo en una variable
// el 1° parámetro es ubicación (./ = "carpeta actual") y nombre del archivo
// el 2° parámetro simplemente es un requerimiento convencional que indica
// en qué standard de codificación está el JSON
let tareasJSON = fs.readFileSync('./tareas.json', 'utf-8');

console.log(typeof tareasJSON);

// Pero la variable anterior está en JSON, no podemos manipularla con el FOR
let tareas = JSON.parse(tareasJSON);
// console.log(tareas)

/* for (let i = 0;  i < tareas.length; i++) {
    console.log(("---------------------------------------------------"));
    console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);    
} */

