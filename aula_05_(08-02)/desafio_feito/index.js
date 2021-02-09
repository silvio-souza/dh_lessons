// busca dados do arquivo json
// arquivo possui os 151 pokemons originais (só os top)
const pokedex = require ('./pokedex.json')

// construtor recebe como parametro apenas o valor de ID
// do pokemon correspondente ao valor da Pokedex do mesmo
function Pokemon (id = (Math.floor(Math.random() * 151) + 1)) { //caso id nao seja definido, atribui id aleatório
    this.nomeDoPokemon = pokedex[id - 1].name;
    this.urlFoto = pokedex[id - 1].urlFoto;
    this.converteParaJSON = () => JSON.stringify(this) // tópico 2 da atividade
    this.mostrarComoJSON = mostrarJSON => mostrarJSON ? console.log(this.converteParaJSON()) : console.log(this) // tópico 3 da atividade
}

//instancias e testes
const pokemonAleatorio = new Pokemon;
pokemonAleatorio.mostrarComoJSON(1);

const pikachu = new Pokemon(25);
pikachu.mostrarComoJSON();

const bulbasauro = new Pokemon(1);
bulbasauro.mostrarComoJSON(true);
