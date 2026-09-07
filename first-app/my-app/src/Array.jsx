function Array(){
  const fruits = ["Apple","Banana","Mango","Graps"]
  return(
    <>
    <h1>Fruits List</h1>
    <ul>
      {
        fruits.map((fruit,index)=>(
           <li>{index}-{fruit}</li>
        ))}
      
    </ul>
    </>
  )

}
export default Array