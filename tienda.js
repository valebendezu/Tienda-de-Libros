const cargar = require('./comandos/cargar.js')
const leer = require('./comandos/leer.js')
const editar = require('./comandos/editar.js')
const borrar = require('./comandos/borrar.js')

switch (process.argv[2]) {
    case "new":
        cargar.cargar(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8])
        break
    case "read":
        console.log(leer.leer())
        break
    case "edit":
        editar.editar(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9])
        break
    case "delete":
        borrar.borrar(process.argv[3])
}