import { useState } from 'react'
import ToggleText from './ToggleText'
import Users from './Users'
import LoginForm from './LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToggleText/>
    <Users/>
    <LoginForm/>
     
    </>
  )
}

export default App
