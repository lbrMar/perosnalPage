import styles from './Spinner.module.css'

function Spinner() {

  return (
  <div className={styles.spinnerContainer}>
      <img 
        src='../../../dist/assets/icons8-beach-64.png' 
        alt='Beach Baby' 
      />
  </div>
  )
}

export default Spinner
