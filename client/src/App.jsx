import styles from './App.module.css'
import AsciiArt from './components/AsciiArt/AsciiArt'

function App() {

  return (
    <div className={styles.mainContainer}>
      <button className={styles.btn}>click me</button>
      <AsciiArt />
    </div>
  )
}

export default App
