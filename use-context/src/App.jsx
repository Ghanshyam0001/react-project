import { createContext, useContext, useState } from 'react'
import './App.css'
import ThemsContext from './assets/example-context/ThemeContext'
import Toolbar from './assets/example-context/Toolbar'
import NavBar from './auth-example/NavBar'
import { AuthProvider } from './auth-example/AuthContext'

function App() {
  // const user= "Ghanshyam"
 const [theme, setTheme] = useState("light")

  return (
    <>
    <AuthProvider>
      <NavBar></NavBar>
    </AuthProvider>

    <ThemsContext.Provider value={{theme,setTheme}}>
     <Toolbar/>
    </ThemsContext.Provider>
    </>
  )
}

export default App
