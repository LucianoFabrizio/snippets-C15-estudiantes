// importamos los cuatro módulos de los correspondientes archivos
const estornudar = require("./estornudar");
const gruñir = require("./gruñir");
const ladrar = require("./ladrar");
const pulga = require("./pulga");

// definimos el objeto "perro", y llamamos a los módulos para usarlos dentro
let perro = {
  patas: 4,
  orejas: 2,
  cola: 1,
  gruñir: gruñir,
  ladrar: ladrar,
  estornudar: estornudar,
  pulga: pulga
};

// Ahora, para saber si anda, pintamos en la terminal algunos atributos
console.log("Cuántas patas tiene mi perro?");
console.log(perro.patas);

console.log("Cuántas orejas tiene mi perro?");
console.log(perro.orejas);

console.log("Cuántas patas tiene la pulga de mi perro?");
console.log(perro.pulga.patitas);

// Y ahora llamamos algunos métodos que no es otra cosa que el módulo importado
console.log("Hago que ladre mi perro llamando al método 'ladrar' del objeto 'perro':");
perro.ladrar();

console.log("Hago que ladre mi perro llamando al método 'estornude' del objeto 'perro':");
perro.estornudar();

console.log("Hago que ladre mi perro llamando al método 'gruña' del objeto 'perro':");
perro.gruñir();
