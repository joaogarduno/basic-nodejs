// Intentaremos algo con este nuevo modulo

// importamos
// El simple hecho de que nuestro archivo o modulo saludo.js este exportando eso no significa que el otro modulo va a tener acceso inmediato a ese elemento, es por eso que debemos importar la funcion, para poder acceder. 
// Al importarlo por convencion asignamos el modul a una constante, por ejemplo:
const saludos = require('./saludos.js');
const saludo = require('./saludos.js');


// Mandaremos a llamar a la funcion, entonces es aqui donde mandamos a llamar a la función
// console.log(saludo.saludar('Joao GArduño'));
// console.log(saludar("Joao GArduño"));
// Estamos mandando a llamar a una funcion que no esta definida en app.js, pero si esta definida en saludo.js, pero al importarlo podemos tener acceso a esa función, lo que tenemos que hacer es, especificar el nombre del modulo, tambien podemos exportar mas de un elemento.

// Es muy comun que tambien se necesiten exportar varios elementos de un modulo por ejemplo si en este modulo tuvieramos varias funciones al ternativas para saludar al usaurio,  podriamos exportarlas todas y escoger cuales incluir en el modulo.
// -------------------------------------------------------





// Exportar varios elementos
// Tambien podemos exportar varios elementos, no estamos restringidos a un solo elemento por modulo, ya que debes recordar que "module.exports" es un objeto, asi que puede tener cuantas "propiedades" necesitemos, ademas que es muy utíl conocer esto, ya que podemos exportar lo que necesitemos

console.log(saludo.saludarHolaMundo());

// Llamamos a las 2 funciones
console.log(saludos.saludar('estas en las camara secreta del señor oscuro'));


// ------------------
// ------------------
// ------------------

// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------




// ------------------
