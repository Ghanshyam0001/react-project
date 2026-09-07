import { useEffect, useState } from 'react'

import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function App() {
  const [expenses, setExpenses] = useState(()=>{
    const saved = localStorage.getItem("expense")
    return saved ? JSON.parse(saved) : [];
  })

  useEffect(()=>{
    localStorage.setItem("expense",JSON.stringify(expenses))
  },[expenses])

  const addExpenses = (expense) => {
    setExpenses((prev) => [...prev, expense])
  }

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item)=>item.id != id))
  }
   const totalexpenses = expenses.reduce((sum, item)=> sum + item.amount,0)


  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>

      <ExpenseForm onAddExpense={addExpenses} />

      <h3 className="total">
        Total Expense: ₹{totalexpenses.toFixed(2)}
      </h3>

      <ExpenseList
        expenses={expenses}
        onDelete={deleteExpense}
      />
    </div>
  )
}

export default App