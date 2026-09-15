import { children, createContext, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({children})=>{
  const [isLoggedin,setIsLoggedin] = useState(false)

  const login =()=>setIsLoggedin(true);
  const logout =()=>setIsLoggedin(false);

  return(
    <AuthContext.Provider value={{isLoggedin,login,logout}}>
      {children}
    </AuthContext.Provider>
  )

}

export {AuthProvider,AuthContext}