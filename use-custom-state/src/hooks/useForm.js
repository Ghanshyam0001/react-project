import { useState } from 'react';

export default function useForm(intialValues = {},callback){
  const [values, setValues] = useState({intialValues})

  // handle input change
  const handleChange = (e) =>{
    const {name, value } = e.target;
   setValues(prev =>({
    ...prev,[name]:value
   }))

  }
//  handle form submit
  const handleformsubmit = (e) =>{
    e.preventDefault();
    if(callback) callback(values);

  }
  // reset form
  const resetForm = () => setValues(intialValues)
   

  return {resetForm,handleformsubmit,handleChange,values }


}