const fs = require('fs')
const data = require('../libros.json')
const leer = require('./leer.js')

function cargar(title, author, genre, year, cost, price) {
    let identif = data.length + 1
    let librosLiteral = (leer.leer())
    librosLiteral.push({id: identif, title: title, author: author, genre: genre, year: year, cost: cost, price: price})
    write(librosLiteral)
}

function write(librosLiteral) {
    fs.writeFileSync('./libros.json', JSON.stringify(librosLiteral, null, 2))
}

module.exports = { cargar, write }