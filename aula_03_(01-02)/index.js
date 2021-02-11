const fs = require('fs');
const inquirer = require('inquirer');
const primeiraPergunta = require('./perguntas');

inquirer.prompt(primeiraPergunta).then(receberResposta);

function receberResposta(resposta) {
    if (resposta.opcao === 1) {
        // console.log(resposta)
        fs.writeFile("Arquivo.txt", 'Novo arquivo', (err) => {
            if (err) throw err;
                console.log('Arquivo criado com sucesso!');
    })} else {
        console.log(resposta)
    }
}