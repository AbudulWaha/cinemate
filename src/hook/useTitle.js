import React from 'react'
import { useEffect } from 'react'

export  function useTitle(title) {
    useEffect(()=>{
        document.title = `${title} /cinemate`
    })
  return null
}
