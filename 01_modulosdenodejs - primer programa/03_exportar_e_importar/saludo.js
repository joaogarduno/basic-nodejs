// En este modulo definimos la función
function saludar(nombre){
  return `Hola, ${nombre}`;
}


// Este objeto va a tener todos los elementos que exportamos de este modulo "saludo.js"

// module.exports -> este es un objeto

module.exports.saludar = saludar;
