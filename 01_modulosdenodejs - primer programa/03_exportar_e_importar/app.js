// Para tener acceso a los elemento definidos en otro modulo (funciones, variables, constantes) debemos importarlos a nuestro archivo

// IMPORTAR UN MODULO
// Es darle acceso a funciones y elementos definidos en otro modulo a nuestro archivo

// Cuando importamos un archivo estamos dando acceso a esos elementos que estan definidos en otro modulo

// En este modulo llamamos a la función
const saludo = require('./saludo.js');

// console.log(saludo); 

console.log(saludo.saludar('Joao Garduño'));

// Como no se ha importando la función se genera un error y lo solucionamos exportando ese elemento usando un objeto llamado "module"

