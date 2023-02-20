import React, { createContext, useState, useEffect} from 'react'

export const ThemeContext = createContext({
    isDarkTheme: false,
    toggleTheme: () => {},
})

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedIsDarkTheme = localStorage.getItem('isDarkTheme')
    return savedIsDarkTheme ? JSON.parse(savedIsDarkTheme) : false;
  });

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev)
  }

  useEffect(() => {
    localStorage.setItem('isDarkTheme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider