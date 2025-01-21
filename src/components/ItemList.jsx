import Item from './Item.jsx'
import '../css/ItemList.css'

const ItemList = ({ items, onDeleteItem }) => {
  if (!items || items.length === 0) return <p>No items found!</p>

  return (
    <ul className="ul-list">
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={onDeleteItem} />
      ))}
    </ul>
  )
}

export default ItemList
