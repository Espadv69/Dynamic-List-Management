import { useState, useEffect } from 'react'

export const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
    console.log('theme toggle')
  }, [theme])

  const themeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return <button onClick={themeToggle}>Toogle Theme</button>
}
