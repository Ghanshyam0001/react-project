import {useState} from 'react'

function ToggleTest() {
  const [isvisible, setIsvisible] = useState(true);
  return (
    <>
    <div>ToggleTest</div>
    <button onClick={()=> setIsvisible(!isvisible)}>{isvisible ? 'Hide':'show'}Text</button>
    {isvisible && <h1>Ghanshyam</h1>}

    </>
  )
  
}

export default ToggleTest