import { createPortal } from 'react-dom'
import { useState } from 'react'

import PortalTest from './PortalTest'
import Model from './Model'

function App() {
  const[open,setOpen] = useState(false)

    return (
    <>
    <h1>Ghanshyam Patel</h1>
    { createPortal(<h1>Portal</h1>,document.body)}
    <PortalTest/>

    <button onClick={() => setOpen(true)}>openmodel</button>
    <Model isOpen={open} onClose={()=> setOpen(false)}>
    <h2>Hellow form model</h2>
    <p>This is simple model without context.</p>
    </Model>
    </>
  )
}

export default App
