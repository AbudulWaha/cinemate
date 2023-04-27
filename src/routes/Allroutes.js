import { Route, Routes } from "react-router-dom"
import { MovieList, MovieDetail, Search, PageNotFound  } from "../pages"
export  function Allroutes() {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route path="" element={<MovieList apipath="movie/top_rated" title="Home"/>}  />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route path="movies/top" element={<MovieList apipath="movie/top_rated" title="Top rated" />} />
        <Route path="movies/upcoming" element={<MovieList  apipath="movie/upcoming" title="Upcoming"/>} />
        <Route path="movies/popular" element={<MovieList  apipath="movie/popular" title="Popular"/>} />
        <Route path="search" element={<Search apipath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
