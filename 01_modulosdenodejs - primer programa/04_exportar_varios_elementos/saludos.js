function saludar(nombre) {
    return `Hola ${nombre}`;
}
function despedir(nombre) {
    return `Adiós ${nombre}`;
}
function saludarDespedir(nombre) {
    return {
        saludo: saludar(nombre),
        despedida: despedir(nombre)
    };
}
// Exportar las funciones
module.exports = {
    saludar,
    despedir,
    saludarDespedir
};
// Exportar la función saludarDespedir como default
// module.exports = saludarDespedir;
// Exportar la función saludar como default
// module.exports = saludar;
// Exportar la función despedir como default
// module.exports = despedir;
// Exportar las funciones saludar y despedir como default
// module.exports = { saludar, despedir };
// Exportar la función saludar como default y despedir como named export
// module.exports = { saludar, despedir };
// Exportar la función saludar como default y despedir como named export
// module.exports = { saludar, despedir };
// Exportar la función saludar como default y despedir como named export
// module.exports = { saludar, despedir };
// Exportar la función saludar como default y despedir como named export
// module.exports = { saludar, despedir };
