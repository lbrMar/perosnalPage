import React, { createContext, useContext, useEffect, useState } from 'react'

// Create the ArcadeContext
const ArcadeContext = createContext()

// Custom hook to use the ArcadeContext
const useArcadeContext = () => {
  const context = useContext(ArcadeContext)
  if (!context) {
    throw new Error('useArcadeContext must be used within an ArcadeProvider')
  }
  return context
}

// ArcadeProvider component to wrap your app with the context
const ArcadeProvider = ({ children }) => {
  // State for high scores
  const [highScores, setHighScores] = useState({})

  // Arcade game array
  const arcadeGames = [
    'pokemonGame'
  ]

  const setHighScore = (gameName, score) => setHighScores((prevScores) => {
  // Check if the provided score is higher than the current high score
    if (score > (prevScores[gameName] || 0)) {
      return {
        ...prevScores,
        [gameName]: score
      }
    }

    return prevScores // If the provided score is not higher, keep the existing high scores
  })

  // Function to get the high scores for a specific game
  const getHighScore = (gameName) => {
    return highScores[gameName] || {}
  }

  // Set highscores on page load
  useEffect(() => {
    for (let i = 0; i < arcadeGames.length; i++) {
      setHighScore(arcadeGames[i], 0)
    }
  }, [])

  // Value to be provided by the context
  const contextValue = {
    highScores,
    arcadeGames,
    setHighScore,
    getHighScore
  }

  return (
    <ArcadeContext.Provider
      value={contextValue}
    >
      {children}
    </ArcadeContext.Provider>
  )
}

export { ArcadeProvider, useArcadeContext }
