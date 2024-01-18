import styles from './NavBar.module.css'

function NavBar() {

  return (
    <div>
      <div className={styles.flexRowContainer}>
        <p className={styles.titleItem}>{`@lbrm`}</p>
        <div className={styles.linksContainer}>
          <p className={styles.linkItem}>{`// home`}</p>
          <p className={styles.linkItem}>{`// about`}</p>
          <p className={styles.linkItem}>{`// arcade`}</p>
          <p className={styles.linkItem}>{`// contact`}</p>
          <p className={styles.linkItem}>{`// git`}</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
