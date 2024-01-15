import styles from './NavBar.module.css'

function NavBar() {

  return (
    <div>
      <div className={styles.flexRowContainer}>
        <p>{`@lbrm`}</p>
        <div className={styles.linksContainer}>
          <p>{`// home`}</p>
          <p>{`// about`}</p>
          <p>{`// arcade`}</p>
          <p>{`// contact`}</p>
          <p>{`// git`}</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
