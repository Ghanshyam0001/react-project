import { createPortal } from 'react-dom'
 
 export default function Model({isOpen,onClose, children}){

  if(!isOpen) return null;
  return createPortal(<div onClick={onClose}>
    <div onClick={(e) => e.stopPropagation()}>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  </div>,document.querySelector('#model-root')
  )

 }

 