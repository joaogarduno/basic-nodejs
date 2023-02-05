// function saludar(nombre){
//   return `Hola, ${nombre}`;
// }

// console.log(saludar("Joao GArduño"));


// Un modulo en la practica es un archivo JavaScript, asi que cualquier archivo JavaScript que uses en tu programa se puede considerar un modulo.

// Creamos un nuevo archivo llamado "app.js"

// entonces vamos a tener 2 modulos uno con la definicion de la función y en otro módulo vamos a llamar a esa función.

// Tenemos un modulo que tiene las definiciones y podemos reutilizar esas definiciones donde queramos en los otros modulos de la aplicación.

// En este modulo o archivo tenemos la definicion de la funcion, mientras que el otro modulo "app.js" tenemos el llamado, es decir cuando manda a llamar a la función.
// function saludar(nombre){
//   return `Hola ${nombre}`;
// }

// Al ejecutar este codigo anterior gracias al modulo "app.js"
// Es un error de referencia, la funcion que tenemos definida no esta definida en el otro modulo, no se pude llamar directamente, para eso tenemos que importarla y tambien tenemos que exportarla desde este modulo.

// Debemos saber como importar y exportar elementos para trabajar con tus modulos y crear esa comunicación entre los modulos del proyecto.

// Tenemos el codigo divido en 2 modulos en uno definimos la funcion y en otro llamamos a la funcion, pero como no se ha "importado" y "exportado" la funcion se genera un error cuando ejecutamos el programa, asi que vamos a solucionarlo
// Y como lo podemos solucionar... y es exportando el elemento usando un objeto llamado "module" de "modulo", "module.exports", este objeto va a tener todos los elementos que exportamos de este modulo de saludo .js
// veamos su valor actual con esto:

// console.log(module.exports);

// el valor de module.exports es un objeto vacio, ya que no se ha exportado nada de este modulo hasta el momento, pero debemos despreocuparnos ya que eso cambiara, lo importante es que "module.exports" es un objeto y por lo tanto vamos a usar las operaciones que normalmente usariamos con un objeto en javascript

// Queremos agregar la definicion de esta funcion a nuestro objeto de exportaciones como lo podemos hacer es un objeto, asi que la notacion de punto funciona para agregarle una propiedad
function saludar(nombre){
  return `Hola ${nombre}`;
}

// En este modulo "saludo" vamos a definir una segunda funcion, vamos a saludar al usuario diciendo "hola mundo"
function saludarHolaMundo(){
  return '¡Hola, Mundo!';
}

// module.exports.saludar = saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo;
// En lugar de tener 2 líneas una para cada una de las propiedades, ya que estamos especificando que el objeto de exportaciones  debe ser este objeto ( el que esta alla abajo de estas lineas)

// Estas 2 opciones equivalentes todo depende del uso que se le de o la necesidad que sea requerida


// Otra forma alternativa de exportar elementos que es mas concisa y mas facil de leer sera algo equivalente a lo que se hizo anteriormente
// Asignamos un objeto, recuerda que "module.exports" es un objeto vacio inicialmente asi que si le asignamos un objeto
module.exports = {
  // Asignaremos un objeto con las propiedades y los valores que queremos
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo
};

