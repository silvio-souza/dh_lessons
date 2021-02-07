const fs = require('fs');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
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
        console.log(resposta.opcao)
    }
}