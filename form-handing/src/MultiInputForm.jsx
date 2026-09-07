import { useState } from "react";

export default function MultiInputForm() {
  // Fixed: Changed "=" to ":" for object properties
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev,[name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Multiple Input Form</h2>
      <input onChange={handleData} name="name" type="text" value={formData.name} placeholder="Name" />
      <br/>
      <input onChange={handleData} name="email" type="email" value={formData.email} placeholder="Email" />
      <br/>
      <input onChange={handleData} name="age" type="number" value={formData.age} placeholder="Age"/>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}
