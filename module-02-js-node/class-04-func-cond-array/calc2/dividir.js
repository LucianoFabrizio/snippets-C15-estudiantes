function dividir(dividendo, divisor) {
    if (divisor === 0) {
        return "No se puede dividir por Cero"
    }
    return dividendo / divisor;   
}

// console.log(dividir(8,4))
// console.log(dividir(0,4))
// console.log(dividir(4,0))

module.exports = dividir;