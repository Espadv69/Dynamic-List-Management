import { useState, useEffect } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
    console.log('theme toggle')
  }, [theme])

  const themeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div>
      <button onClick={themeToggle}>Toogle Theme</button>
      <h1>hello, world</h1>
    </div>
  )
}

export default App
