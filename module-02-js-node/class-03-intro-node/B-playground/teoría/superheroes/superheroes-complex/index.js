let superheroes = [
  {
    nombre, "Wonder Woman",
    poder: "Golpear con látigo",
    saludar: function () {
      return "Hola, soy la Mujer Maravilla";
    },
  },
  {
    nombre: "Iron Man",
    poder: "Disparar rayos y volar",
    saludar: function () {
      return "Hola, soy el Hombre de Hierro";
    },
  },
  {
    nombre: "Batman",
    poder: "Un cinturón lleno de chucherías",
    saludar: function () {
      return "Hola, soy el Hombre Murciélago";
    },
  },
];
module.exports = superheroes;

/* Nota: en el video aparece this.name, pero no queremos profundizar tanto. */
