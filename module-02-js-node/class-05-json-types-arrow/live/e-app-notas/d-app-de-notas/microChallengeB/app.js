// Microdesafíos 2
// 4. Se lleva el código a un modulo
let archivoTareas = require('./funcionesDeTareas');

// La API de node no dice que lo que se pasa por terminal se almacena como 
// arreglo, nosotros, pues, necesitamos la tercera palabra, es decir, el
// elemento de índice 2 del arreglo en cuestión. Fuente:
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
let accion = process.argv[2];

switch (accion) {
    // primer caso: accion = 'listar'
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();
        for (let i = 0; i < tareas.length; i++) {
            console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        }
        break;
    // segundo caso: sin parámetros
    case undefined:
        console.log('Atención - Tenés que pasarme una acción');
        break;

    // tercer caso: cualquier otra cosa menos [vacío] y "listar"
    default:
        console.log('No entiendo qué querés hacer');
        break;
}
