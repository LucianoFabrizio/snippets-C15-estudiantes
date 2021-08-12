let horaActual = () => {
    const fecha = new Date();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    return "Son las " + horas + " horas con " + minutos + " minutos.";
}

console.log(horaActual());

// Cuándo usamos arreglos y cuándo usamos objetos?