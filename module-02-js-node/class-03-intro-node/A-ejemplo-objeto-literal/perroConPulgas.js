/* Chequeado */

// 1.
// let pulga = {
//     patas: 6,
//     color: "cobre"
// };

// El objeto pulga de arriba no es el mismo que el de abajo.

// 2.
let perro = { 
    patas : 4, 
    orejas : 2, 
    cola : 1,

    pulga: {
        patas: 6,
        color: "cobre"
    },
    
    ladrar : () => console.log("guau!")
}

console.log("Hago que ladre mi perro llamando al método 'ladrar' del objeto 'perro':", );
perro.ladrar();
