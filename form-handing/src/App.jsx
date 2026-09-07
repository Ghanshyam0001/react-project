import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SimpleForm from './SimpleForm';
import MultiInputForm from './MultiInputForm';
import AdvancedForm from './AdvancedForm';
import UncontrolledForm from './UncontrolledForm';
import BasicValidation from './BasicValidation';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleForm/>
      <MultiInputForm/>
      <AdvancedForm/>
      <UncontrolledForm/>
      <BasicValidation/>

    </>
  )
}

export default App
