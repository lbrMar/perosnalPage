// PokeGameContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react'
import fetchPokemonData from '../api/pokeFetch'

const PokeGameContext = createContext()

const usePokeGameContext = () => {
  const context = useContext(PokeGameContext)
  if (!context) {
    throw new Error('usePokeGameContext must be used within a PokeGameProvider')
  }
  return context
}

const PokeGameProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([])
  const [randPokeData, setRandPokeData] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [pokeLevel, setPokeLevel] = useState(0)

  const shufflePokeData = (pokemonData) => {
    const shuffledData = pokemonData.slice() // Create a copy to avoid modifying the original array

    // Exclude the last element (index 150) from shuffling
    const lastIndex = shuffledData.length - 1
    const lastElement = shuffledData[lastIndex]
    shuffledData.splice(lastIndex, 1)

    // Fisher-Yates Shuffle for the remaining elements
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]] // Swap elements
    }

    // Add the last element back to the shuffled array
    shuffledData.push(lastElement)

    // Organize the data into sets
    const organizedData = []
    const totalPokemon = shuffledData.length

    // Calculate the number of full sets of 15 Pokémon
    const fullSetsCount = Math.floor(totalPokemon / 15)

    for (let i = 0; i < fullSetsCount; i++) {
      const startIndex = i * 15
      const endIndex = startIndex + 15
      organizedData.push(shuffledData.slice(startIndex, endIndex))
    }

    // Add the remaining Pokémon as a separate array
    organizedData.push([shuffledData.slice(fullSetsCount * 15)])

    setRandPokeData(organizedData)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the data using the function from pokeFetch.js
        const detailedData = await fetchPokemonData()

        // Update state with the fetched data
        setPokemonData(detailedData)
      } catch (error) {
        console.error('Error fetching Pokemon data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <PokeGameContext.Provider value={{
      pokemonData,
      randPokeData,
      shufflePokeData,
      currentScore,
      pokeLevel
    }}
    >
      {children}
    </PokeGameContext.Provider>
  )
}

export { PokeGameProvider, usePokeGameContext }
