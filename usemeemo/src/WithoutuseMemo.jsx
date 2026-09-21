import { useState } from "react";

export default function WithoutuseMemo(){
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = () =>{
    console.log("running....");
    let total = 0;
    for(let i = 0; i<1000000000; i++){
      total = total + i;
    }
    return total;
  }

  const result = expensiveCalculation();
  return(
    <>
    <h2>Result: {result}</h2>
    <button onClick={()=> setCount(count + 1)}>Incresecount</button>
    <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
    <p>Count :{count}</p>
    <p> {text}</p>
    </>
  )

}