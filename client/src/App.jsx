import styles from './App.module.css'
/***************************** import components *****************************/
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Arcade from './components/Arcade/Arcade'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <Landing />
      <About />
      <Arcade />
      <Contact />
    </div>
  )
}

export default App
