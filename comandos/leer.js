fs=require('fs')

function leer(){
    let data = fs.readFileSync('./libros.json','utf-8')
    let dataObjetoLiteral = JSON.parse(data)
    return dataObjetoLiteral
}

module.exports = {leer}