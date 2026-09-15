import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const NavBar = () =>{
  const {isLoggedin,login,logout} = useContext(AuthContext)

  return(
    <nav>
      {isLoggedin ? (
        <button onClick={logout}>Logout</button>
      ):(
        <button onClick={login}>Login</button>

      )}

    </nav>
  )
}

export default NavBar;