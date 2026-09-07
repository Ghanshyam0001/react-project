import React from 'react'
import { useState, useEffect, useRef }  from 'react'
import MovieList from '../components/MovieList'


export default function Home(){

  const [movies, setMovies] = useState([])
  const [loading, SetLoading] = useState(false)
  const inputRef = useRef()
  const hundlesearch =(e)=>{
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if(query) fetchMovies(query)
  }

  const fetchMovies = async (query) => {
    SetLoading(true)
    const res = await fetch(`https://www.omdbapi.com/?apikey=d321da4f&s=${query}`)
    const data =  await res.json()
    console.log(data);
     setMovies(data.Search || [])
     SetLoading(false)
  }

  useEffect(()=>{
    fetchMovies("Avengers")
  },[])
  return(
    <>
    	<div className="home">
		<form onSubmit={hundlesearch}>
			<input className="searchInput" placeholder="Search for a movie..." ref={inputRef}/>
			<button type="submit">Search 🔎</button>
		</form>
    {loading ? <p>Loading...</p> : <MovieList movies={movies}/>}
  
	</div>	
    
    </>
  )
}