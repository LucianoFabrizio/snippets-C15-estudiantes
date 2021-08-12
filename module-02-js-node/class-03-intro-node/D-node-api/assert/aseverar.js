/* Chequeado */

const assert = require('assert');

// Si no se cumple, arroja un error con el mensaje que le digamos.


assert.ok(true);

assert.equal(1, "1");

assert.strictEqual(1, 1);


// 1.
// assert.ok(false);

// 2.
// assert.ok(false, "Arroja ERROR porque el resultado es FALSO.");

// 3.
// assert.equal(1, "2", "Arroja ERROR porque los valores son DIFERENTES.");

// 4.
// assert.strictEqual(1, "1", "Arroja ERROR porque los valores NO son ESTRICTAMENTE iguales.");

// 5.
// JS's FALSY values...
// assert(0);
// assert(0n);
// assert(null);
// assert(undefined);
// assert(false);
// assert(NaN);
// assert("");