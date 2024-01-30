const fetchPokemonData = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await response.json()
    const pokemonNames = data.results.map((pokemon) => pokemon.name)

    const detailedData = await Promise.all(
      pokemonNames.map(async (name) => {
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return pokemonResponse.json()
      })
    )

    return detailedData
  } catch (error) {
    console.error('Error fetching Pokemon data:', error)
    throw error // Propagate the error to handle it in the calling code
  }
}

export default fetchPokemonData
