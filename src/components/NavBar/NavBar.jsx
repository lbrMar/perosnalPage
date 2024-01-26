import styles from './NavBar.module.css'
import { useScrollContext } from '../../context'

function NavBar () {
  const {
    sectionHeights
  } = useScrollContext()

  const linkItems = [
    '// home',
    '// about',
    '// arcade',
    '// contact'
  ]

  const scrollOnLinkClick = (index) => {
    const nextSection = sectionHeights[index]

    window.scrollTo({
      top: nextSection,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <div className={styles.flexRowContainer}>
        <h2 className={styles.titleItem}>@lbrm</h2>
        <div className={styles.linksContainer}>
          {linkItems.map((item, index) => (
            <h3
              className={styles.linkItem}
              key={index}
              onClick={() => scrollOnLinkClick(index)}
            >
              {item}
            </h3>
          ))}
          <h3 className={styles.linkItem}>
            <a
              href='https://github.com/lbrMar'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              // git
            </a>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default NavBar
