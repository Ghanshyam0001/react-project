import useForm from "./hooks/useForm";

export default function LoginForm(){
  const intialValues = {
    email:"",
    password:""
  }

  const onsubmit = (values) =>{
    console.log(values)
  }
   const {resetForm,handleformsubmit,handleChange,values} = useForm(intialValues,onsubmit)

   return(
    <>  
    <form onSubmit={handleformsubmit}>
      <h2>Login</h2>
      <input type="email" placeholder="email" value={values.email} onChange={handleChange}/>
      <br></br>
      <input type="password" placeholder="Password" value={values.password} onChange={handleChange}/>
      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>Reset</button>



    </form>
    
    </>
   )
}