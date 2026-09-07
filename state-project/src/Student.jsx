import {useState} from 'react'

function Student() {
  const [student, setStudent] = useState({
    name:'ghanshyam',
    grade:'A',
    city:"Malpur"
  });

  const changename=()=>{
    setStudent({...student,name:'patel'})
  }
    const changegrade=()=>{
    setStudent({...student,grade:'B'})
  }
    const changecity=()=>{
    setStudent({...student,city:'amd'})
  }
 

  return (
    <>
    <h5>{student.name}</h5>
    <h5>{student.grade}</h5>
    <h5>{student.city}</h5>


    <button onClick={changename}>change Name</button>
    <br></br>
    <button onClick={changegrade}>Change Grade</button>
      <br></br>
    <button onClick={changecity}>Change City</button>



    </>
  )
  
}

export default Student