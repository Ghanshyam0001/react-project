import { useState, useRef } from 'react'

export default function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const titleRef = useRef()

  const handlesubmit = (e) => {
    e.preventDefault()

    if (!title || !amount) {
      return alert('Please Fill All Fields')
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount)
    }

    onAddExpense(newExpense)

    setTitle('')
    setAmount('')

    titleRef.current.focus()
  }

  return (
    <form className="expense-form" onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleRef}
      />

      <input
        type="number"
        placeholder="Amount ₹"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">
        Add Expense
      </button>
    </form>
  )
}