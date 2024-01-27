import './App.css'
import ScrollEffectHandler from './scrollEffects/ScrollEffectHandler'
import LoadingPage from './components/LoadingPage/LoadingPage'
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Arcade from './components/Arcade/Arcade'
import Contact from './components/Contact/Contact'
import HomeButton from './components/HomeButton/HomeButton'
import { useEffect, useState } from 'react'

function App () {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(delay)
  }, [])

  return (
    <div>
      {loading
        ? (
          <LoadingPage />
          )
        : (
          <div className='appContainer'>
            <ScrollEffectHandler />
            <NavBar />
            <Landing />
            <About />
            <Arcade />
            <Contact />
            <HomeButton />
          </div>
          )}
    </div>
  )
}

export default App
