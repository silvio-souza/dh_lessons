function MeuPokemon(name, url) {
    this.name = name;
    this.url = url;
  }
  ​
  function criarUmPokemon(name, url, callback) {
    console.log('Iniciei o processo de criação de um pokemon');
    let pineco = new MeuPokemon(name, url);
    callback(pineco);
    console.log('Terminei de criar o pokemon');
  }
  ​
  function receberUmPikachu(pikachu) {  
    console.log(pikachu);
    console.log('Recebi um pikachu');
  }
  ​
  criarUmPokemon('pineco', 'http://google.com', (pokemon) => {
    console.log('Recebi um pokemon');
    console.log(pokemon);
  });
  ​
  criarUmPokemon('pikachu', 'http://google.com', receberUmPikachu);