const axios = require('axios');
​
let requisitador = axios.create({
  baseURL: '',
});
​
function receberPokemons(resposta) {  
  let { results } = resposta.data;
  
  for (let pokemon of results) {
    pokemon.saudacao = 'oi';
    console.log(pokemon);
  }
}
​
requisitador.get('https://pokeapi.co/api/v2/pokemon').then(receberPokemons);