export default function UserProfile({UserData}){

  const Username = UserData.name;
  const Age = UserData.age;


  return(
    <>
     <h1>User Profile</h1>
    <h2>{Username}</h2>
    <h4>{Age}</h4>    
    </>
  )

}