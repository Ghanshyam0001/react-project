import { useState } from 'react'
import UserProfile from './UserProfile'
import ErrorBoundries from './ErrorBoundries';

function App() {

  const UserData = {
    name: "Ghanshyam",
    age:25
  };

    const UserData1 = null;

  return (
    <>
        <ErrorBoundries>
    <UserProfile UserData={UserData}/>
     </ErrorBoundries>
     <ErrorBoundries fallback={<p>Error in UserData2</p>}>

    <UserProfile UserData={UserData1}/>
    </ErrorBoundries>



    </>
  )
}

export default App
