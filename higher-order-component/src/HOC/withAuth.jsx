 export default function withAuth(WrrepedComponent){

  return function Protected(props){

    const isLoggedin = true;
    if(!isLoggedin) return <h1>Please Login To Continue</h1>

    return <WrrepedComponent {...props}/>

  }

 }