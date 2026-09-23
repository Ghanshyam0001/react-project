import { useState } from "react";
import useToggle from "./hooks/useToggle";

export default function ToggleText(){

  const [isOpen, toggleOpen] = useToggle()
  const [istest, toggletest] = useToggle()


  return (
    <div>
      <div>
         <button onClick={toggleOpen}>
      Toggle
    </button>

    {isOpen && <p>Hello This Is Visible</p>}

      </div>
   <div>

         <button onClick={toggletest}>
      Toggle
    </button>

    {istest && <p>Hello This Is Visible</p>}

   </div>
    
    </div>
  )
}