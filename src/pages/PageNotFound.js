import { Link } from "react-router-dom"
import PagenotFound from "../asset/images.png"
export  function PageNotFound() {
  return (
    <section className="flex flex-col justify-center py-24 ">
      <div className="flex flex-col items-center my-4">
        <p className="text-3xl text-white my-5 ">404 Oop! PageNotFound</p>
        <div className="max-w-64">
          <img src={PagenotFound} alt="page not found" />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link  to="/">
          <button className="rounded-lg text-xl border-solid h-12 w-48 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500">Back to Home Page</button>
        </Link>
      </div>
    </section>
  )
}
