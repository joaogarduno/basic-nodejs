// Intentaremos algo con este nuevo modulo

// importamos
// El simple hecho de que nuestro archivo o modulo saludo.js este exportando eso no significa que el otro modulo va a tener acceso inmediato a ese elemento, es por eso que debemos importar la funcion, para poder acceder. 
// Al importarlo por convencion asignamos el modul a una constante, por ejemplo:
const saludo = require("./saludo.js");


// Mandaremos a llamar a la funcion, entonces es aqui donde mandamos a llamar a la función
console.log(saludo.saludar("Joao GArduño"));
// console.log(saludar("Joao GArduño"));