const inquirer = require ('inquirer')
const pergunta = require('./perguntaInquirer')

// console.log(pergunta)

inquirer.prompt(pergunta).then(resposta)

function resposta(pergunta) {
    const dataSplit = pergunta.data.split("/")
    const data = new Date(dataSplit[2], dataSplit[1]-1, dataSplit[0])
    // console.log(data)
    
    console.log(`Dia: ${data.getDate()}`)
    console.log(`Mes: ${data.getMonth()+1}`)
    console.log(`Ano: ${data.getFullYear()}`)
}