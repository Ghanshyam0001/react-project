import { useEffect, useState } from 'react'

function Timer() {
  const [seconds, setseconds] = useState(0) 

  useEffect(()=>{
    const interval = setInterval(()=>{
      setseconds((prev) => prev + 1)
    },1000)

    return () =>{
      clearInterval(interval)
      console.log("Timer Clear")
    }
   
  },[])

  return (
    <div>
      <h2>Seconds: {seconds}</h2>
      
    </div>
  )
}

export default Timer
