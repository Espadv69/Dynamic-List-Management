import '../css/Item.css'

const Item = ({ item, onDelete }) => {
  return (
    <li className="li-list">
      {item.name} <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  )
}

export default Item
