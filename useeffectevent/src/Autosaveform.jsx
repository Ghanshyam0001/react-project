import { useEffect, useEffectEvent, useState } from "react";

export default function Autosaveform(){
 const  [formData,setFormData] = useState({name:"",email:""})

 const onTrinck = useEffectEvent(()=>{
       console.log("Form Data",formData)
 })

 useEffect(()=>{
      const id = setInterval(()=>{
        onTrinck()
      },3000)
      return(()=>{
        clearInterval(id)
      })
 },[])

  return(
    <>
    <form>
      <input type="text" placeholder="Enter Your Name" onChange={e => setFormData({...formData,name:e.target.value})} value={formData.name} />
      <input type="email" placeholder="Enter Your email" onChange={e => setFormData({...formData,email:e.target.value})} value={formData.email}/>
    </form>
    </>
  )
}