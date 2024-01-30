import './PokemonGame.css'
import loremIpsum from '../../../utils/loremipsum.js'
import chevronsLeft from '../../../assets/icons/featherIcons/chevrons-left.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { usePokeGameContext } from '../../../context/PokeGameContext.jsx'

const PokemonGame = () => {
  const [gameOn, setGameOn] = useState(false)
  const {
    pokemonData,
    randPokeData,
    shufflePokeData,
    currentScore,
    pokeLevel
  } = usePokeGameContext()

  const toggleGameOn = (pokemonData) => {
    setGameOn(true)
    shufflePokeData(pokemonData)
  }

  return (
    <div className='pokemonGameMainContainer'>
      <div className='pokeTitleContainer'>
        <Link to='/'>
          <img
            className='leftIcon'
            src={chevronsLeft}
            alt='Left Arrow'
          />
        </Link>
        <h1>POKE GAME</h1>
        <h2>Score: {currentScore}</h2>
      </div>
      <div className='pokeGameContainer'>
        {gameOn === false
          ? (
            <div className='pokeMenuContainer'>
              <h3>INSTRUCTIONS</h3>
              <p>{loremIpsum}</p>
              <button onClick={() => toggleGameOn(pokemonData)}>START</button>
            </div>
            )
          : (
            <div className='pokePlayContainer'>
              {randPokeData[pokeLevel] && randPokeData[pokeLevel].map((pokemon, index) => (
                <div className='pokeItemContainer' key={index}>
                  <img src={pokemon.sprites.front_default} />
                  <p>{pokemon.name}</p>
                </div>
              ))}
            </div>
            )}
      </div>
    </div>
  )
}

export default PokemonGame
