
export default function postList({data}){
  return(
    <>
    <ul>
      {data.map(post =>{
        return <li key={post.id}>{post.title}</li>
      })}
    </ul>
    
    </>
  )
}