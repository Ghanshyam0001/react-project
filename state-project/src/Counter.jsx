import {useState} from 'react'

export default function Counter(){
  const [index, setIndex] = useState(0);

  const increse = () =>{
    setIndex(index + 1);
  }

    const decrese = () =>{
    setIndex(index - 1);
  }
  return(
    <>
    <h1>Count:{index}</h1>
    <button onClick={increse}>Click Me For Increse</button>
    <br></br>
    <button onClick={decrese}>Click Me For Decrese</button>

    
    </>
  )

}