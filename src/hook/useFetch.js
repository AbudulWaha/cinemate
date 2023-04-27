import { useEffect, useState } from 'react'

export  function useFetch(apipath, queryTerm="") {
    const [data, setdata] =useState([])
    const url = `https://api.themoviedb.org/3/${apipath}?api_key=fe000dff045e0e669c59ef891e06c222&query=${queryTerm}`
    
    
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


