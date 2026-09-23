import { useState } from 'react'
import Greeting from './Greeting'
import GreetingWithstyle from './GreetingWithStyle'
import PostListwithData from './postListwithData'
import withAuth from "./HOC/withAuth";
import Dashboard from './Dashboard';

const ProtectedDashboard = withAuth(Dashboard)


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Greeting name="ghanshyam"/>
    <GreetingWithstyle name="patel"/>
    <PostListwithData/>
    <withAuth/>
     
     <ProtectedDashboard/>
    </>
  )
}

export default App
