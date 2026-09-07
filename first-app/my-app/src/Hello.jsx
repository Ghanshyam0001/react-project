import './App.css'

function Hello(){
  const name = "Ghanshyam"
  const headingstyle = {
    color:"red",
    textAlign:"center",
    backgroundColor:"pink",
    fontSize:"20px"
  }
return(
  <>
<h2 className="test">Hello {name} Component</h2>
<p style={headingstyle}>I Am Ghanshyam Patel</p>
<h4 style={{color:"red",textAlign:"right",paddingRight:"10px"}}>Laravel Developer</h4>
</>
)  
}
export default Hello