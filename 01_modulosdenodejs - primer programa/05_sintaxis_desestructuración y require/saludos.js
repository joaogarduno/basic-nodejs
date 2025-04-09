function saludar(nombre){
  return `Hola ${nombre} desde el módulo saludos.js`;
}

function despedir(nombre){
  return `Adiós ${nombre} desde el módulo saludos.js`;
}
// Exportar las funciones
module.exports = {
  saludar,
  despedir
}
// Exportar la función saludar como default
// module.exports = saludar;
// module.exports = {
//   saludar,
//   despedir
// }
// module.exports = saludar;
// module.exports = saludar;
// module.exports = saludar;
// module.exports = saludar;
// module.exports = saludar;