// function Props(props){
function Props({name="aa",age=20,city="ahmedabad",hobbies}){
  return(
    <>
   <h2>Hello {name} {age} {city}</h2>
   <ul>{
    hobbies.map((hoddy,index)=>(
      <li>{hoddy}</li>
    ))
    
    
    }
   </ul>

    
    </>
  )


}
export default Props