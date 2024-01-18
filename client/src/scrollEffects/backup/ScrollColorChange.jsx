import { useEffect } from "react"

const bg1 = '#FF004D'
const bg2 = '#22092C'
const bg3 = '#1D2B53'
const bg4 = '#000000'

function ScrollColorChange() {

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight
      const halfScreenHeight = screenHeight / 2
      
      if (scrollY < (screenHeight / 2)) {
        setBackgroundColor(bg1)
      } else if (scrollY >= (screenHeight / 2) 
          && scrollY < (screenHeight + halfScreenHeight)) {
        setBackgroundColor(bg2)
      } else if (scrollY >= (screenHeight + halfScreenHeight)
          && (scrollY < ((screenHeight * 2) + halfScreenHeight))) {
        setBackgroundColor(bg3)
      } else if (scrollY >= ((screenHeight * 2) + halfScreenHeight)) {
        setBackgroundColor(bg4)
      }
    }

    const handleResize = () => {
      setBackgroundColor(bg1)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const setBackgroundColor = (color) => {
    document.body.style.backgroundColor = color
  }

  return null
}

export default ScrollColorChange
