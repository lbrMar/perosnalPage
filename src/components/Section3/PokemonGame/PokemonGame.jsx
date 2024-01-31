import './PokemonGame.css'
import loremIpsum from '../../../utils/loremipsum.js'
import chevronsLeft from '../../../assets/icons/featherIcons/chevrons-left.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { usePokeGameContext } from '../../../context/PokeGameContext.jsx'
import { useArcadeContext } from '../../../context/ArcadeContext.jsx'

const PokemonGame = () => {
  const [gameState, setGameState] = useState('menu')
  const { setHighScore } = useArcadeContext()
  const {
    pokemonData,
    randPokeData,
    shufflePokeData,
    currentScore,
    setCurrentScore,
    pokeLevel,
    setPokeLevel,
    setSelectedPokemon,
    checkSelectedPokemon,
    checkLevel,
    shuffleOnClick
  } = usePokeGameContext()

  const toggleGameOn = (pokemonData) => {
    setGameState('game')
    shufflePokeData(pokemonData)
  }

  const toggleMenu = () => {
    setGameState('menu')
  }

  const toggleWinner = () => {
    setGameState('winner')
  }

  const toggleLoser = () => {
    setGameState('loser')
  }

  const onChevronClick = () => {
    setCurrentScore(0)
    setSelectedPokemon([])
    setPokeLevel(1)
  }

  const onPokeClick = (event, pokemon) => {
    event.preventDefault()

    const isGoodGuess = checkSelectedPokemon(pokemon)

    if (isGoodGuess === true) {
      setCurrentScore((prev) => prev + 1)
      checkLevel()
      shuffleOnClick()
    } else {
      const score = currentScore
      setHighScore('pokemonGame', score)
      setCurrentScore(0)
      setPokeLevel(1)
      setSelectedPokemon([])
      toggleLoser()
    }
  }

  return (
    <div className='pokemonGameMainContainer'>
      <div className='pokeTitleContainer'>
        <Link to='/'>
          <img
            onClick={onChevronClick}
            className='leftIcon chevronBtn'
            src={chevronsLeft}
            alt='Left Arrow'
          />
        </Link>
        <h1>POKE GAME</h1>
        <div className='gameTrackerContainer'>
          <h3 className='gameTrackerItem'>Score: {currentScore}</h3>
          <h3 className='gameTrackerItem'>Level: {pokeLevel}</h3>
        </div>
      </div>
      <div className='pokeGameContainer'>
        {gameState === 'menu' &&
          (
            <div className='pokeMenuContainer'>
              <h3>INSTRUCTIONS</h3>
              <p>{loremIpsum}</p>
              <button onClick={() => toggleGameOn(pokemonData)}>START</button>
            </div>
          )}
        {gameState === 'game' &&
          (
            <div className='pokePlayContainer'>
              {randPokeData[pokeLevel] && randPokeData[pokeLevel - 1].map((pokemon, index) => (
                <div
                  onClick={(event) => onPokeClick(event, pokemon.name)}
                  className='pokeItemContainer'
                  key={index}
                >
                  <img src={pokemon.sprites.front_default} />
                  <p>{pokemon.name}</p>
                </div>
              ))}
            </div>
          )}
        {gameState === 'loser' &&
          (
            <div>
              <p>You lose</p>
              <button onClick={toggleMenu}>
                MENU
              </button>
            </div>
          )}
        {gameState === 'winner' &&
          (
            <div>
              <p>You are the very best, like no one ever was</p>
              <button onClick={toggleMenu}>
                MENU
              </button>
            </div>
          )}
      </div>
    </div>
  )
}

export default PokemonGame
