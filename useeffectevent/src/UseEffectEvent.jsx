import { useEffect, useEffectEvent, useState } from "react";

export default function UseEffectEvent(){

  const [count, setCount] = useState(0);
      const onTrick = useEffectEvent(()=>{
      console.log("count",count);
     setCount((prev)=>prev +1)
    })
    // useeffectevent package is used to solve the problem of useeffect dependency array and also we can use the function in useeffect without dependency array
  useEffect(()=>{
    const id = setInterval (()=>{
     onTrick();
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