// Intentaremos algo con este nuevo modulo

// importamos
// El simple hecho de que nuestro archivo o modulo saludo.js este exportando eso no significa que el otro modulo va a tener acceso inmediato a ese elemento, es por eso que debemos importar la funcion, para poder acceder. 
// Al importarlo por convencion asignamos el modul a una constante, por ejemplo:

// const saludos = require('./saludos.js');
// const saludo = require('./saludos.js');

// Sintaxis de Desestructuracion y require()
const { saludarHolaMundo, saludar } = require('./saludos.js');
// Escribimos el nombre de la propiedad que queremos extraer
// PAra especificar que solo queremos incluir "Hola mundo", usamos la sintaxis desestructuracion.
// La sintaxis de desestructuracion nos permite tomar ciertas propiedades de los objetos en JavaScript de forma muy concisa
// Aqui estamos asignando ese valor de "saludarHolaMundo" la definicion de la funcion a la variable que podemos usar

// Con la sintaxis de desestruturacion solamente se incuyo "saludarHolaMundo", no incluimos saludar, lo que hacemos si queremos incluirla es que las separamos con una coma, siempre dentro de las llaves de la sintaxis de desectructuración si queremos importar varios elementos.
// Esto es muy util cuando los modulos tienen muchos elementos exportados, podriamos seleccionar los elementos especificos con los cuales vamos a trabajar en este modulo especifico.
// Esto sera muy util para trabajar con "node" y "servidores"



// Mandaremos a llamar a la funcion, entonces es aqui donde mandamos a llamar a la función

// console.log(saludo.saludar('Joao GArduño'));
// console.log(saludar("Joao GArduño"));

// Estamos mandando a llamar a una funcion que no esta definida en app.js, pero si esta definida en saludo.js, pero al importarlo podemos tener acceso a esa función, lo que tenemos que hacer es, especificar el nombre del modulo, tambien podemos exportar mas de un elemento.

// Es muy comun que tambien se necesiten exportar varios elementos de un modulo por ejemplo si en este modulo tuvieramos varias funciones al ternativas para saludar al usaurio,  podriamos exportarlas todas y escoger cuales incluir en el modulo.
// -------------------------------------------------------





// Exportar varios elementos
// Tambien podemos exportar varios elementos, no estamos restringidos a un solo elemento por modulo, ya que debes recordar que "module.exports" es un objeto, asi que puede tener cuantas "propiedades" necesitemos, ademas que es muy utíl conocer esto, ya que podemos exportar lo que necesitemos

// console.log(saludos.saludar('Joao Garduno'));

// Llamamos a las 2 funciones

// console.log(saludos.saludarHolaMundo());


// Ejemplo de Desestructuracion
console.log(saludarHolaMundo());
// con la sintaxis de desestructuracion ya no 
// Como la estamos incluyendo con sintaxis de destructuracion ya no tenemos que mencionar el modulo del cual proviene, ya tenemos una variable que representa esa funcion o ese elemento, entonces podemos mandar a llamarla directamente con los parentesis vacios.
// Solo estamos escribiendo el nombre de esa propiedad de funcion


// Ahora que pasaria si nosotros queremos mandar a llamar a "saludar"
console.log(saludar('Joao Garduño'));


// ------------------
// ------------------
// ------------------

// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------




// ------------------
