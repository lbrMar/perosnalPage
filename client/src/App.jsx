import styles from './App.module.css'
/***************************** import components *****************************/
import ScrollColorChange from './ScrollColorChange'
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Arcade from './components/Arcade/Arcade'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className={styles.mainContainer}>
      <ScrollColorChange />
      <NavBar />
      <Landing />
      <About />
      <Arcade />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
