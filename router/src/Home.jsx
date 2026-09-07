import { useNavigate } from "react-router-dom"
export default function Home(){
  const navigate = useNavigate();
  const goToAbout = () =>{
    navigate("/about");
  }
  return(
    <>
    <h2>Welcome To Homepage</h2>
    <button onClick={goToAbout}>Go To About</button>
    </>
  ) 
}