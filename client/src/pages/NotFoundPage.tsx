import { HiArrowLeft } from "react-icons/hi2"
import { Link } from "react-router-dom"
const NotFoundPage = () => {
  return (
      <div className="flex justify-center align-middle mt-[15%]">
          <div>
              <h1 className="text-center">COFFEE POINT</h1>
              <h1 className="font-bold text-[clamp(2em,10vw,5em)] text-amber-950">PAGE NOT FOUND</h1>

              <Link to="/" className="text-center flex gap-4 items-center">
                 <HiArrowLeft/>  Go Back to Safety
              </Link>
          </div>
    </div>
  )
}
export default NotFoundPage