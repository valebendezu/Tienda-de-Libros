const leer = require('./leer.js')
const write = require('./cargar.js')

let editar = (id, title, author, genre, year, cost, price) => {
    const librosLiteral = (leer.leer())
    librosLiteral.forEach(elem => {
        if (elem.id == id) {
            elem.title = title
            elem.author = author
            elem.genre = genre
            elem.year = year
            elem.cost = cost
            elem.price = price
            write.write(librosLiteral)
        }
    })
}

module.exports = { editar }