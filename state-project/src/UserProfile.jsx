import {useState} from 'react'

function UserProfile() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(15);

  return (
    <>
    <h5>{name}</h5>
    <h5>{age}</h5>

    <button onClick={()=> setName("ghansyam")}>change Name</button>
    <br></br>
    <button onClick={()=> setAge(25)}>Change Age</button>



    </>
  )
  
}

export default UserProfile