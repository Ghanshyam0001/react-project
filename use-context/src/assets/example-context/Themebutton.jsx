import {  useContext } from 'react'
import ThemsContext from './ThemeContext'
export default function Themebutton(){
  const {theme,setTheme} = useContext(ThemsContext)
  return(
    <>
    <h1 className={theme}>Ghanshyam Patel</h1>

    <button onClick={(e)=> (setTheme(theme === "light" ? "dark" : "light"))}>Current Theme:{theme}</button>
    </>
  )
}