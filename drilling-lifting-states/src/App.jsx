import { useState } from 'react'
// props deriling start
function Parent(){
  const username = "Ghanshyam"
  return<Child name={username}/>}

function Child({name}){
  return <Grandchild name={name}/>
}
function Grandchild({name}){
  return <h3>My name is {name}</h3>
}
// props deriling end

// state Lifting start

function Parent1(){
  const [text, setText] = useState("")
  return(
    <>
    <Inputbox onChange={setText}/>
    <h3>{text}</h3>
    </>
  )
}

function Inputbox({onChange}){
  return(
    <>
    <input type="text" onChange={(e)=>onChange(e.target.value)} />
    
    </>
  )
}



// state Lifting end

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Parent/>
     <Parent1/>
    </>
  )
}

export default App
