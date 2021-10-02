const dados = require('./dados.json')

const gerar = function(){
    const lugar = {
        "cidade":dados.cidade[parseInt(Math.random() * dados.cidade.lenght)],
        "estado":dados.estado[parseInt(Math.random() * dados.estado.lenght)],
        "pais":dados.pais[parseInt(Math.random() * dados.pais.lenght)],
        "cep":dados.cep[parseInt(Math.random() * dados.cep.lenght)],
        "habitantes":dados.habitantes[parseInt(Math.random() * dados.habitantes.lenght)],
    }

    lugar.mensagem = '${lugar.cidade} ${lugar.estado} ${lugar.pais} ${lugar.cep} ${lugar.habitantes}'

    return lugar
}

module.exports = gerar