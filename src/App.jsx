import { useState, useEffect } from 'react'

import ItemList from './components/ItemList.jsx'

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

  const handleDeleteItem = (id) => {
    const updateItems = items.filter((item) => item.id !== id)
    setItems(updateItems)
  }

  return (
    <div>
      <button className="themeToggle-button" onClick={themeToggle}>
        Toogle Theme
      </button>
      <ItemList items={items} onDeleteItem={handleDeleteItem} />
    </div>
  )
}

export default App
