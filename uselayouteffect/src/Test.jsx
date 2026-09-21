import React from 'react'
import { useEffect, useLayoutEffect } from 'react'

function Test() {

useEffect(() => {
console.log("useeffect")
},[]);

useLayoutEffect(() => {
console.log("useLayoutEffect")
},[]);

  return (
    <div>



    </div>
  )
}

export default Test