import Item from './Item.jsx'

const ItemList = ({ items, onDeleteItem }) => {
  if (!items || items.length === 0) return <p>No items found!</p>

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={onDeleteItem} />
      ))}
    </ul>
  )
}

export default ItemList
