import { useState, useCallback} from 'react'

import Child from './Child'

export default function Parent(){

  const [count,setCount] = useState(0)

  const handleclick = useCallback(() =>{
   console.log("clicked");
},[]);

  return(
    <>
    <h2>Count: {count}</h2>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    <Child onClick={handleclick}/>
    </>
  )


}