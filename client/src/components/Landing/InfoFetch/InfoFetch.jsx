import styles from './InfoFetch.module.css'
import GitCommitGraph from '../GitCommitGraph/GitCommitGraph'

function InfoFetch() {
  return (
    <div className={styles.flexColumnContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.fontTitle}>Lukas@Myhal</h2>
      </div>
      <p>---------------------------</p>
      <div className={styles.textContainer}>
        <h3 className={styles.fontSubTitle}>Skills:</h3>
        <h3 className={styles.fontMain}>Javascrih3t React CSS HTML NODE</h3>
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.fontSubTitle}>Git Hub:</h3>
        <h3 className={styles.fontMain}>htth3s://github.com/lbrMar</h3>
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.fontSubTitle}>University:</h3>
        <h3 className={styles.fontMain}>Wilfrid Laurier University FRENCH MAJOR</h3>
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.fontSubTitle}>About:</h3>
        <h3 className={styles.fontMain}>
{`Greetings! I'm Lukas, a self-taught web developer 
with a unique journey —a decade of nurturing trees 
and four seasons as a ski patroller. 
Now, I'm planting seeds of innovation in the digital realm.`}
        </h3>
      </div>
      <div className={styles.textContainer}>
        <GitCommitGraph />
      </div>
    </div>
  )
}

export default InfoFetch
