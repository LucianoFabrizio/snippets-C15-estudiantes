// creamos la función "ladrar" normalmente
// function ladrar() {
//     console.log("Guau! Guau!")
// }

const ladrar = () => console.log("Guau! Guau!");

// const ladrar = (uno) => console.log("Guau! Guau!");
// const ladrar = (uno, dos) => console.log("Guau! Guau!");

// para poder usarla en otro lado, la EXPORTAMOS COMO MÓDULO
module.exports = ladrar;