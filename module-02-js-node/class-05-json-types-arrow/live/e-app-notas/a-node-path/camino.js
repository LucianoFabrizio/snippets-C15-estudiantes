/* Chequeado */

const path = require('path');

const basename = path.basename("./nombreCarpeta/nombreArchivo.txt");
console.log({basename});


// 1.
const dirname = path.dirname("./nombreCarpeta/nombreArchivo.txt");
console.log({dirname});

// 2.
const extension = path.extname("./nombreCarpeta/nombreArchivo.txt");
console.log({extension});

// 3.
const basenameSinExtension = path.basename("./nombreCarpeta/nombreArchivo.txt", extension);
console.log({basenameSinExtension});

// 4. Esta variable es global en Node (comprobarlo, comentando el require)
console.log(__dirname)