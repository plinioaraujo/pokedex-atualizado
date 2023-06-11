const fetchPokemon = () =>{
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemonPromises = []

  for (let i = 1; i < 150; i++) {
    pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
  }

  Promise.all(pokemonPromises)
    .then(pokemons => {
      
      const lisPokemons = pokemons.reduce((acc,pokemon)=>{
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        acc += `
        <li class="card">
          <img class="card-image ${types[0]}" alt="${pokemon.name}" src="" />
          <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
          <p class="card-subtitle">${types.join(' | ')}</p>
        </li>`
        return acc
      },0)

      console.log(lisPokemons)

    })
}

fetchPokemon()