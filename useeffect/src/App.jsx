import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import First from './First'
import Timer from './Timer'
import WindowSizeTracker from './WindowSizeTracker'
import Users from './Users'




function App() {
  return(
 <>
 <First/>
 <Timer/>
 <WindowSizeTracker/>
 <Users/>


 </>
 )
}

export default App
