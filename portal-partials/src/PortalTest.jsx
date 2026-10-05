import { createPortal } from 'react-dom'

export default function PortalTest(){
  return createPortal(
    <div>Portal Test</div>, document.querySelector('#test-root')
  )
}