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
        <p className={styles.pInfo}>{`Greetings! I'm Lukas, a self-taught web developer`}</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.pInfo}>{`with a unique journey —a decade of nurturing trees`}</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.pInfo}>{`and four seasons as a ski patroller.Now, I'm planting`}</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.pInfo}>{`seeds of innovation in the digital realm.`}</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.pTitle}>Commits:</p>
      </div>
    </div>
  )
}

export default InfoFetch
