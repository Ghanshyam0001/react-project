import { useState } from 'react'
import Timer from './Timer'
import UseEffectEvent from './UseEffectEvent'
import Autosaveform from './Autosaveform'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Timer/>
    <UseEffectEvent/>
    <Autosaveform/>     
    </>
  )
}

export default App
