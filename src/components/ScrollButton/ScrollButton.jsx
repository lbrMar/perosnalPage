import './ScrollButton.css'
import downArrowIcon from '../../assets/icons/icon-down-arrow.png'
import { useScrollContext } from '../../context'

function ScrollButton () {
  const {
    disableScrollHandling,
    enableScrollHandling,
    updateScrollInfo,
    scrollInfo
  } = useScrollContext()
  const {
    scrollSection,
    visibleScrollDown
  } = scrollInfo

  const scrollToNextSection = () => {
    updateScrollInfo({ scrollDirection: 'down' })
    const nextSection = (scrollSection + 1) * window.innerHeight

    disableScrollHandling()

    window.scrollTo({
      top: nextSection,
      behavior: 'smooth'
    })

    enableScrollHandling()
  }

  return (
    <div>
      {visibleScrollDown && (
        <div
          className='scrollDownBtn'
          onClick={scrollToNextSection}
        >
          <img
            src={downArrowIcon}
            alt='DOWN'
          />
        </div>
      )}
    </div>
  )
}

export default ScrollButton
