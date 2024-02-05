// DisplayModeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react'

const DisplayModeContext = createContext()

const useDisplayMode = () => {
  return useContext(DisplayModeContext)
}

const DisplayModeProvider = ({ children }) => {
  const [displayMode, setDisplayMode] = useState(getDefaultDisplayMode)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    // Initial check
    setDisplayMode(mediaQuery.matches ? 'dark' : 'light')

    // Event listener for changes
    const handleChange = (event) => {
      setDisplayMode(event.matches ? 'dark' : 'light')
    }

    // Attach event listener directly to the MediaQueryList
    mediaQuery.addEventListener('change', handleChange)

    // Cleanup: Remove the event listener when the component is unmounted
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <DisplayModeContext.Provider value={displayMode}>
      {children}
    </DisplayModeContext.Provider>
  )
}

const getDefaultDisplayMode = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDarkMode ? 'dark' : 'light'
}

export { DisplayModeProvider, useDisplayMode }
