import { useState } from 'react'

export default function AdvancedForm(){
    const [formData, setFormData] = useState({
    gender: "",
    Country:"India",
    agree: false,
  });

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleChange = (e) => {
    const { name,type,value,checked } = e.target;
    setFormData((prev) => ({...prev,
      [name]: type === "checkbox" ? checked : value
     }));
  };
  return(
    <form onSubmit={handleSubmit}>
    <h2>Form With CheckBox,Radio & Select</h2>
    <label>
      <input onChange={handleChange} type="radio" name="gender" value="Male" checked={formData.gender === "Male"}/>
      Male
    </label>
   <label>
      <input onChange={handleChange} type="radio" name="gender" value="Female" checked={formData.gender === "Female"}/>
      Female
    </label>
    <br/>
    <label>
      Country:
      <select name="Country" value={FormData.country} onChange={handleChange}>
        <option value="India">India</option>
        <option value="Usa">Usa</option>
        <option value="Uae">Uae</option>
      </select>
    </label>

    <br/>
    <label>
      <input type="checkbox" name="agree" checked={FormData.agree} onChange={handleChange}/>
      I Agree to tearms & Conditions
    </label>
    <br/>

    <button type="submit">Submit</button>
    </form>
  )
}