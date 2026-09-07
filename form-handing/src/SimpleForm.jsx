import { useState } from "react";
function SimpleForm(){
  const [name,setName] = useState("");
  const[email,setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:",name);
    console.log("Email:",email);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>React Form Example</h2>

      <lable>Name:</lable>
      <input onChange={(e)=>setName(e.target.value)} type="text" value={name}/>
      <br/>

       <lable>Email:</lable>
      <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email}/>
      <br/>

      <button type="submit">Submit</button>

    </form>
  )
}
export default SimpleForm;