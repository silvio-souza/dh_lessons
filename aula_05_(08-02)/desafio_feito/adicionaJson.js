const pokedex = require ('./pokedex.json')

// pokedex = JSON.parse(pokedex)
console.log(pokedex.length)

for(i=0; i < pokedex.length; i++) {
    pokedex[i].urlFoto = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`;
}

console.log(JSON.stringify(pokedex))