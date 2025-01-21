import { useState, useEffect } from 'react'

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Godofredo' },
    { id: 2, name: 'Paco' },
    { id: 3, name: 'Aitor' },
    { id: 4, name: 'Carlos' },
    { id: 5, name: 'Tanotavi' },
  ])
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
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
