import { useState } from 'react'

export default function BasicValidation(){
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[error,setError] = useState("");

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!name || !email){
      setError("Please fill all fields");
    }else{
      setError("")
      console.log("form Submited:",{name,email})
      alert("Form Submitted Successfully");
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <h2>Basic Validation Form</h2>
      <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter Your Name" />
      <br/>
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter Your Email" />
      <br/>
      {error && <p style={{color:"red"}}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  )

}