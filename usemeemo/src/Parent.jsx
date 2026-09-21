import {useState, useMemo}  from "react";
import React from 'react';

export default function Parent(){
  const [count, setCount] = useState(0);
  
  const user = useMemo(() => ({
    name: "Ghanshyam Patel",
    age:24,
  }),[])

  console.log("Parent rendered");

  return (
    <>
    <h2>Parent Count : {count}</h2>
     <button onClick={()=> setCount(count + 1)}>Incresecount</button>
     <Child user={user} />
    </>
  )
}

const Child = React.memo(({user}) =>{
  console.log("child rendered");
  return(<h3> {user.name}</h3>)
})