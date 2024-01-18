import downArrowIcon from '../../../dist/assets/icons8-double-down-64.png'
import styles from './ScrollButton.module.css'
import { useScrollContext } from '../../context'

function ScrollButton() {
  const {
    disableScrollHandling,
    enableScrollHandling,
    updateScrollInfo,
    scrollInfo, 
  } = useScrollContext()
  const { 
    scrollSection, 
    visibleScrollDown, 
    scrollDirection,
  } = scrollInfo

  const scrollToNextSection = () => {
    updateScrollInfo({ scrollDirection: 'down' })
    const nextSection = (scrollSection + 1) * window.innerHeight

    disableScrollHandling()

    window.scrollTo({
      top: nextSection,
      behavior: 'smooth',
    })

    enableScrollHandling()
  }

  return (
    <div>
      {visibleScrollDown && (
        <div
          className={styles.scrollButton}
          onClick={scrollToNextSection}>
          <img 
            src={downArrowIcon} 
            alt='DOWN' />
        </div>
      )}
    </div>
  )
}

export default ScrollButton;
