function multiplicar(factorUno, factorDos) {
    let resultado = factorUno * factorDos;
    if (resultado === 0) {
        return "cero"
    } else {
        return resultado;
    }
}

// console.log(multiplicar(3,4));
multiplicar(3,4)

module.exports = multiplicar;