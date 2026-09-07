import './App.css'

function Function(){
  function getName(yourname){
    return yourname
  }

  const getname =(yourname)=>{
    return yourname

  }

  function handleClick(){
    alert("hi")
  }
  const handleinput = (event) =>{
     console.clear()
    console.log("value",event.target.value)

  }
  const handleMouseOver = () => console.log("Mouse Is Over")
  const handleDoubleClick = () => console.log("Mouse Is Click")

const name = "Ghanshyam Patel"  
const name1 = "Patel"


  return(
    <>
    <h1 className="green">Hello {getName(name)}</h1>
    <h2 className="green">Hello {getname(name1)}</h2>

   <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>
  Lorem ipsum dolor sit amet.
</p>

    <button onClick={handleClick}>Clik Me</button>
    <button onClick={()=> alert('Hello from Inline')}>Say Hello</button>
    <br>
    </br>
    <input type='text' onChange={handleinput} placeholder='Type something'></input>

    </>
  )

}
export default Function;