const fs = require('fs')
const data = require('../libros.json')
const leer = require('./leer.js')

// Propongo repensar la generación de ID para evitar el problema de IDs repetidos en caso de borrar un libro que no fuese el último.
// Para esto lo primero es filtrar con .filter o .find la bdd parseada chequeando si ya hay un ID asignado con el valor que se quiere pasar.
// Y luego si no existe, asignar ese ID y si ya existe, generar uno nuevo, chequeando otra vez para asegurarse que no existe tampoco.
function cargar(title, author, genre, year, cost, price) {
    let identif = data.length + 1
    let librosLiteral = (leer.leer())
    librosLiteral.push({id: identif, title: title, author: author, genre: genre, year: year, cost: cost, price: price})
    write(librosLiteral)
}

function write(librosLiteral) {
    fs.writeFileSync('./libros.json', JSON.stringify(librosLiteral, null, 2))
}
//No se como hacer para convalidar que los id no se repitan
module.exports = { cargar, write }
