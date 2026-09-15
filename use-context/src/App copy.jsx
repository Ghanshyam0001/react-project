import { createContext, useContext } from 'react'

const UserContext = createContext()

function App() {
  // const user= "Ghanshyam"

  const user = {name: "Ghanshyam", role: "Admin"}

  return (
    <>
    <UserContext.Provider value={user}>
     <Parent/>
    </UserContext.Provider>
    <h1>hi</h1>
    </>
  )
}


function Parent(){
  return< Child/> 
}

function Child(){
  const user1 = useContext(UserContext)
  return(
    <>
    <h1 style={{color:"blue"}}>{user1.name}</h1>
    <Grandchild/>
    </>
  )
}

function Grandchild(){
  // const user = useContext(UserContext)
  const {name,role} = useContext(UserContext)

  return <h3>My name is {name} and role is {role}</h3>
}


export default App
