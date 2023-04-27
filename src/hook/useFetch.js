import { useEffect, useState } from 'react'

export  function useFetch(apipath, queryTerm="") {
    const [data, setdata] =useState([])
    const url = `https://api.themoviedb.org/3/${apipath}?api_key=${process.env.REACT_APP_API_kEY}&query=${queryTerm}`
    
    
    useEffect(()=>{
        const FetchData =async ()=>{
          const response = await fetch(url)
          const json = await response.json()

          
          setdata(json.results)
        }
        FetchData()
      },[url])
  return { data }
}


