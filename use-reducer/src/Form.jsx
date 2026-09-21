import { useReducer } from 'react';

export default function Form(){

  const [formdata,dispatch] = useReducer(reducer,{username:"",email:""});

  function reducer(state,action){
    return {
      ...state,[action.name]:action.value
    }
  }

  function handlechange(e){
    dispatch({
      name: e.target.name,
      value: e.target.value
    })
  }

  return(
    <>
    <form>
      <input type="text" name="username" value={formdata.username} placeholder='username' onChange={handlechange} />
      <input type="email" name="email" value={formdata.email} placeholder='email'onChange={handlechange} />
      <p>
      {formdata.username} - {formdata.email}
      </p>
    </form>

    
    </>
  )
}