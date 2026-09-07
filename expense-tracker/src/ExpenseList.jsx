import Expenseitem from './Expenseitem'

export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p className="no-expense">No Expense Yet</p>
  }

  return (
    <div className="expense-list">
      {expenses.map((item) => (
        <Expenseitem
          key={item.id}
          item={item}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}