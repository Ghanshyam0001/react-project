// import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Hello from './Hello'
import Bye from './Bye'
import Function from './Function'
import Array from './Array'
import Object from './Object'
import Conditionalrendring from './Conditionalrendring'
import Props from './Props'
import Button from './Button'

function App() {
  const hobbies = ["ps5","coding","reading"]
  function Message(){
    alert("Hello Ghanshyam Patel")
  }
  return (
    <div>
      <h1>App Component</h1>
      <Hello/>
      <img src={reactLogo} width="200px"/>
      <Bye/>
      <Function/>
      <Array/>
      <Object/>
      <Conditionalrendring/>
      <Props name="ghanshyam" age={26} city="Arvalli" hobbies={hobbies}/>
      <Button label="Click Me" handleclick={Message} />

    </div>
  )
}

export default App
