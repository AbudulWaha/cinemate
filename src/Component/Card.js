import React from 'react'
import images from "../asset/images.png"
import { Link , useNavigate} from 'react-router-dom'


export function Card({movie}) {
    const {poster_path, overview, original_title, id} = movie
    const image = `https://image.tmdb.org/t/p/w500/${poster_path}`
    // console.log(id)
    const Navigate = useNavigate()
    const handleClick =()=>{
        return Navigate(`/movies/${id}`)
    }
    
    
  return (
    <div onClick={handleClick} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-3 mb-2">
        <Link to="/">
            <img className="rounded-t-lg" src={poster_path ? image : images} alt="" />
        </Link>
        <div className="p-5">
            <Link to="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
            </Link >
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview} </p>
           
        </div>
    </div>

  )
}
