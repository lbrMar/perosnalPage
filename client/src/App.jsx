import styles from './App.module.css'

/***************************** import components *****************************/
import ScrollColorChange from './scrollEffects/ScrollColorChange'
import ScrollSlowOnY from './scrollEffects/ScrollSlowOnY'
import LoadingPage from './components/LoadingPage/LoadingPage'
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Arcade from './components/Arcade/Arcade'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

/******************************* import hooks *******************************/
import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(delay)
  }, [])


  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className={styles.mainContainer}>
          <ScrollColorChange />
          <ScrollSlowOnY />
          <NavBar />
          <Landing />
          <About />
          <Arcade />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default App
