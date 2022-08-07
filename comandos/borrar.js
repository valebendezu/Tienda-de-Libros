const leer = require('./leer.js')
const write = require('./cargar.js')
//no borra el elemento correcto
let borrar = (n) => {
    n = Number(n)
    console.log(n)
    const librosLiteral = (leer.leer())
    librosLiteral.forEach(element => {
        let deleteBook
        if (element.id === n) {
            deleteBook = n
            librosLiteral.splice(deleteBook, 1)
            console.log(librosLiteral)
            write.write(librosLiteral)
        }
    })
}

module.exports = { borrar }