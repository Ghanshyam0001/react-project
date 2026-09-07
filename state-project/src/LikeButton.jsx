import {useState} from 'react'

function LikeButton() {
  const [liked, setLiked] = useState(true);
  return (
    <>
    <div>Like</div>
    <button onClick={()=> setLiked(!liked)}>{liked ? 'Like':'Dislike'}</button>
    {liked && <h1>Ghanshyam</h1>}

    </>
  )
  
}

export default LikeButton