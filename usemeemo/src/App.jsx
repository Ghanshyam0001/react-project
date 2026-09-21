import { useState } from 'react'

import WithoutuseMemo from './WithoutuseMemo'
import WithuseMemo from './WithuseMemo'
import Parent from './Parent'




function App() {
  return(
  <>

  {/* <WithoutuseMemo/> */}
  {/* <WithuseMemo/> */}
  <WithuseMemo/>
  <WithuseMemo/>
  <Parent/>

  <h1>Ghanshyam Patel</h1>
  
  </>
  )

  
}

export default App
