import { useState, Suspense, lazy } from 'react'
// import Post from './Post'
const Post = lazy(() => import("./Post"))


function App() {
  const [showpost, setShowPost] = useState(false)

  return (
    <>
   <button onClick={() => setShowPost(true) }>Show Post</button>
   {showpost && (<Suspense fallback={<p>Loading...</p>}><Post/></Suspense>)}
    </>
  )
}

export default App
