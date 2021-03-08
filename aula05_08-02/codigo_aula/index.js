const pokemons = `{
    "count": 1118,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=300&limit=100",
    "previous": "https://pokeapi.co/api/v2/pokemon?offset=100&limit=100",
    "results": [
      {
        "name": "unown",
        "url": "https://pokeapi.co/api/v2/pokemon/201/"
      },
      {
        "name": "wobbuffet",
        "url": "https://pokeapi.co/api/v2/pokemon/202/"
      },
      {
        "name": "girafarig",
        "url": "https://pokeapi.co/api/v2/pokemon/203/"
      },
      {
        "name": "pineco",
        "url": "https://pokeapi.co/api/v2/pokemon/204/"
      }
    ]
  }`;
  
  const objetoPineco = JSON.parse(pokemons).results[3];
  
  function MeuPokemon(name, url = 'http://google.com', tipo) {
    this.name = name;
    this.url = url;
    this.tipo = tipo;
    this.escolhoVoce = () => {
      console.log(`O pokemon escolhido foi ${this.name}. A URL do pokemon é ${this.url}`);
    }
    this.quantoVale = () => this.tipo === 'bug' ? "R$1.000.000,00" : "0",
    this.exemploSwitch = () => {    
      switch (this.tipo) {
        case 'bug': 
        case 'fire':
        case 'other':
        case 'water': return 'R$1.000.000,00';      
        case 'eletric': return 'R$800.000,00';      
        default: return 'R$ 0,00';
      }
    }
  }
  
  const pineco = new MeuPokemon(objetoPineco.name, objetoPineco.url, 'bug');
  const corsola = new MeuPokemon('Corsola', 'https://pokeapi.co/api/v2/pokemon/222/', 'water');
  const pikachu = new MeuPokemon('Pikachu', 'https://pokeapi.co/api/v2/pokemon/25/', 'eletric');
  
  console.log(pineco.exemploSwitch());
  // console.log(corsola.exemploSwitch());
  