import './App.css'

function ConditionalRendering() {
  const isvisible = true;
  const isLoggedin = false;
   let message;
  if (isLoggedin) {
    message =  <h3>Welcome User</h3>;
  } else {
    message = <h3>Login</h3>;
  }
  return(
    <>
  <div>{message}</div>
  <h1 className={isvisible ? 'visible':'unvisible' }>Conditional Rendring</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa tempora ab repellendus quas minima consequuntur reprehenderit expedita voluptatibus assumenda?</p>
    </>
  )
}

export default ConditionalRendering;