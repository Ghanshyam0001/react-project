export default function Expenseitem({ item, onDelete }) {
  return (
    <div className="expense-item">
      <span>{item.title}</span>
      <span>₹{item.amount.toFixed(2)}</span>

      <button onClick={() => onDelete(item.id)}>
        ❌
      </button>
    </div>
  )
}