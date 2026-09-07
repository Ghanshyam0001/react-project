import {useState} from 'react'

function Inputexample() {
  const [name, setName] = useState("");

function changevalue(e){
  setName(e.target.value);
}
 

  return (
    <>
   <input type="text" value={name} onChange={changevalue}></input>
   <p>{name || "Guest"}</p>
    </>
  )
  
}

export default Inputexample