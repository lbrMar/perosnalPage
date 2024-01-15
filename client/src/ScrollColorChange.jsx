import { useState, useEffect } from "react"

const bg1 = '#FF004D'
const bg2 = '#22092C'
const bg3 = '#1D2B53'
const bg4 = '#000000'

function ScrollColorChange() {
  const [backgroundColor, setBackgroundColor] = useState(bg1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const screenHeight = window.innerHeight
      const halfSH = screenHeight / 2
      
      if (scrollY < (screenHeight / 2)) {
        setBackgroundColor(bg1)
      } else if (scrollY >= (screenHeight / 2) && scrollY < (screenHeight + halfSH)) {
        setBackgroundColor(bg2)
      } else if (scrollY >= (screenHeight + halfSH)
          && (scrollY < ((screenHeight * 2) + halfSH))) {
        setBackgroundColor(bg3)
      } else if (scrollY >= ((screenHeight * 2) + halfSH)) {
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

  document.body.style.backgroundColor = backgroundColor
}

export default ScrollColorChange
