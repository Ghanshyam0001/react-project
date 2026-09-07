import { useEffect, useState } from 'react'

function Users() {
 const [user, setUser] = useState([])

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))

 
  },[])

  return (
    <div>
      <h2>Uers Lists</h2>
      <ul>{user.map((u)=>{
        return(
        <li key={u.id}>{u.name}</li>
        )
      })}
    
      </ul>

    </div>
  )
}

export default Users
