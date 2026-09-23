import { useState, useEffect } from 'react';

export default function useFetch(url){

  const [data, setData] = useState(null)
  const [error,setError] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    async function fetchdata(){
      try{
        const res = await fetch(url)
        const json = await res.json()
        setData(json)

      }catch(err){
        setError(err)
      }
      finally{
        setLoading(false)
      }
    }
    fetchdata();
  },[url])
  return {data,error,loading};
}