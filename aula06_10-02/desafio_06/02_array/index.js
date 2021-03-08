const inquirer = require('inquirer')
const pergunta = require('./perguntaInquirer')

inquirer.prompt(pergunta).then(resposta)

function resposta(pergunta) {
    pergunta.array = Array.from(String(pergunta.input), Number)
    // console.log(pergunta.array)

    const soma = pergunta.array.reduce(function (total, elemento) {
        return total + elemento
    })

    let impares = pergunta.array.filter(function (elemento) {
        return elemento % 2 !== 0
    })
    if (impares == "") {
        impares.push("Não foi informado nenhum numero impar")
    }

    
    console.log(`Sequencia informada: ${pergunta.array}`)
    console.log(`Soma de todos os numeros informados: ${soma}`)
    console.log(`Numeros impares entre os numeros informados: ${impares}`)
    
}