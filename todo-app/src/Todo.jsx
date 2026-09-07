import React from 'react';
import { useState } from 'react'

function Todo() {
  const [newTodo,setNewTodo] = useState("")
  const [todos,setTodos] = useState([])
   const handleSubmit =(e)=>{
    e.preventDefault();
    if(newTodo){
      setTodos([...todos,{text:newTodo,completed:false }])
      setNewTodo('')
    }
   }
      const handleDelete =(index)=>{
        const newtodos = [...todos];
        newtodos[index].completed = !newtodos[index].completed
        setTodos(newtodos)
   }
  return (
    <>
    <div>Todo App</div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e)=>setNewTodo(e.target.value)} placeholder='Add New todo' value={newTodo}/>
      <button type='submit'>Add Todo</button>

    </form>

    <ul>
{todos.map((todo, index) => {
  return (
    <li key={index}>
      <span style={{textDecoration : todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </li>
  );
})}
    </ul>
    </>
  )
}

export default Todo