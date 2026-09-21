
import React from 'react'

 function Child({click}){
    console.log("child rendered");

    return(
      <>
      <button onClick={click}>Child Button</button>
      
      </>
    )


}

export default React.memo(Child)