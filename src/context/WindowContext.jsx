// WindowContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react'

// Create the context
const WindowContext = createContext()

const useWindowContext = () => {
  return useContext(WindowContext)
}

// Create a provider component
const WindowProvider = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [innerHeight, setInnerHeight] = useState(window.innerHeight)

  // Update innerWidth and innerHeight when the window is resized
  const handleResize = () => {
    setInnerWidth(window.innerWidth)
    setInnerHeight(window.innerHeight)
  }

  // Add event listener for resize
  useEffect(() => {
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <WindowContext.Provider value={{ innerWidth, innerHeight }}>
      {children}
    </WindowContext.Provider>
  )
}

export { WindowProvider, useWindowContext }
