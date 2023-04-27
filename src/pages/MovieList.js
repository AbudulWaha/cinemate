
import { Card } from "../Component/Card";
import { useFetch } from "../hook/useFetch";
import { useTitle  } from "../hook/useTitle";



export  function MovieList({ apipath, title }) {
  const { data: movies } = useFetch(apipath)
  useTitle(title)
  // console.log(movies.id)
 
  return (
    <main >
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly"> 
          { 
            movies.map((movie)=><Card key={movie.id}  movie={movie}  />)
          }
          
        </div>
      </section>
    </main>
  )
}
