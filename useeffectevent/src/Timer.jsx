import { useEffect, useState } from "react";

export default function Timer(){

  const [count, setCount] = useState(0);
  useEffect(()=>{

    const id = setInterval (()=>{
      // console value not print and if in dependency write [count] then countinue run useeffect also so its load in server then we use useeffectevent package for this problem
      console.log("count",count);
      setCount((prev)=>prev +1)
    },1000)

    return(()=>{
      clearInterval(id)
    })
  },[]);

  return(
    <>
    <div>{count}</div>


    </>
  )
}