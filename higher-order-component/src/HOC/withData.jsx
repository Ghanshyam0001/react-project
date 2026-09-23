import { useState, useEffect } from "react"
 export default function withData(WrappedComponent,url){
return function EnhancedComponent(){
  const [data,setData] = useState([]);

  useEffect(()=>{

    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))

  },[url])

  return <WrappedComponent data={data} />
}
}