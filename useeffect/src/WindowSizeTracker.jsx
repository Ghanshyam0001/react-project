import { useEffect, useState } from 'react'

function WindowSizeTracker() {
 const [width, setWidth] = useState(window.innerWidth)

  useEffect(()=>{
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize",handleResize)

    return () =>{
    window.removeEventListener("remove",handleResize)
    console.log("Unsubscribed form resize event")

    }
   
  },[])

  return (
    <div>
      <h2>window width Tracker</h2>
      <p>Current Width {width}px</p>
      
    </div>
  )
}

export default WindowSizeTracker
