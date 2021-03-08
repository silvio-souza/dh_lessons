const primeiraPergunta = [
    {
        type: 'list',
        name: 'opcao',
        message: 'O que voce quer fazer?',
        choices: [
            {
                name: 'Criar uma tarefa',
                value: 0
            },
            {
                name: 'Criar um arquivo',
                value: 1
            }
            
        ]
    }
]

module.exports = primeiraPergunta;