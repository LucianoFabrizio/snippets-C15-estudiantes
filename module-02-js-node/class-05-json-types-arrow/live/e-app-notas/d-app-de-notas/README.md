# App de Notas (Diego's)

## Microdesafíos I

...programar una app de notas

#### 1. Crear un archivo tareas.json que contenga un array de objetos literales

- Recordamos modularidad (importar/exportar módulos)

- Recordamos la funcionalidad del módulo nativo de Node File System o 'fs' [(fuente aquí)](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfilesync_path_options)

- Creamos, simplemente: [{},{},{}]

#### 2. Cada objeto literal deberá tener las propiedades: titulo y estado

- Actualizamos nuestro arreglo en el archivo JSON:
    [
        { "titulo": "Repasar JS",  "estado": "terminada" },
        { "titulo": "Armar app de Tareas", "estado": "en progreso" },
        { "titulo": "Break", "estado": "pendinte" }
    ]

#### 3. Generar un archivo app.js que "consuma" el archivo de tareas.json

- Creamos app.js

- Importamos 'fs'

- Utilizamos 'fs' para leer nuestro archivo JSON externo [(fuente aquí)](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfilesync_path_options)

#### 4. Mostrar el listado de tareas existente por terminal

- Para listar una a una las tareas recorremos el arreglo con 'for' [(fuente aquí)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

- Pero nuestro arreglo vino en JSON, así que hay que convertirlo a un objeto de JS: recordamos el método JSON.parse()

## Microdesafíos II

### 1. Permitir que se pueda pasar un argumento después de app.js
...Hay dos partes en nuestro problema:

- Tengo que poder pasar un argumento por terminal, del tipo: "node app.js miArgumento"

    - (Para esto necesitamos recurrir a la API de Node y ver cómo maneja Node los argumentos por consola.) [(fuente aquí)](https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line)

- Tengo que hacer diferentes acciones de acuerdo al argumento que reciba

    - (Para esto, necesitamos un 'switch', la estructura de control pensada para decidir entre diferentes posibilidades) [(fuente aquí)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
#### 1.a) Si se escribe 'node app.js listar'

- Si recibo "node app listar" por terminal, hago correr el 'for' que recorre el arreglo de tareas.

#### 1.b) Si NO se escribe ninguna palabra después de 'node app.js'

- Si recibo "node app" (sin argumentos), debo pintar en consola: "Atención - Tienes que pasar una acción."

#### 1.c) Si se llegase a pasar cualquier otro texto que no sea la palabra "listar"

- Si recibo "node app x" (cualquier otro argumento que no sea "listar"), debo pintar en consola: "No entiendo qué quieres hacer."

### 2. Modularizar la aplicación

- Trasladar la funcionalidad de lectura de archivos JSON a un archivo diferente, llamado 'funcionesDeTareas.js' y exportamos dicho módulo.

- Importamos 'funcionesDeTareas.js' en 'app.js' para poder leer archivos JSON desde nuestro archivo de entrada (app)