
import React from 'react'

export default function withStyle(WrappErappedComponent) {
  return function NewComponent(props){
    return(
          <div style={{border:'2px solid red',padding:'10px'}}>
     <WrappErappedComponent {...props}/>
    </div>
    )
  }
}

