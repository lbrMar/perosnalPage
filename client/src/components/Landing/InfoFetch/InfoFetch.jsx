import styles from './InfoFetch.module.css'

function InfoFetch() {
  return (
    <div className={styles.flexColumnContainer}>
      <div className={styles.textContainer}>
        <p className={styles.pTitle}>Lukas@Myhal</p>
      </div>
      <p>---------------------------</p>
      <div className={styles.textContainer}>
        <p className={styles.pTitle}>Skills:</p>
        <p className={styles.pInfo}>Javascript React CSS HTML NODE</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.pTitle}>Git Hub:</p>
        <p className={styles.pInfo}>https://github.com/lbrMar</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.pTitle}>University:</p>
        <p className={styles.pInfo}>Wilfrid Laurier University FRENCH MAJOR</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.pTitle}>About:</p>
      </div>
    </div>
  )
}

export default InfoFetch
