function Object(){
  const user = {
    name : "john",
    age :20,
  }

  const users = [
    {name:"ghanshyam",age:25},
    {name:"rohan",age:30},
    {name:"kathan",age:40}
  ]

  function detail(user){
    return user.name + " " + user.age

  }
return(
  <>
  <h1>Object</h1>
  <p>User Detail: {detail(user)}</p>
  {
    users.map((user,index)=> (
      <p>{user.name} {user.age}</p>
    ))
  }


  </>
)
}
export default Object