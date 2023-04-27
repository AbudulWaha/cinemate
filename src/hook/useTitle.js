<<<<<<< HEAD

=======
>>>>>>> b9d2bbfdc7bae9c31a5c84bc5fb05031d20efe82
import { useEffect } from 'react'

export  function useTitle(title) {
    useEffect(()=>{
        document.title = `${title} /cinemate`
    })
  return null
}
