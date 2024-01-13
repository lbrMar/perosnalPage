import styles from './App.module.css'
import AsciiArt from './components/AsciiArt/AsciiArt'

function App() {

  return (
    <>
      <button className={styles.btn}>click me</button>
      <AsciiArt />
    </>
  )
}

export default App
