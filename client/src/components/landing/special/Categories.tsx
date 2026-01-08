import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <nav className="flex justify-center my-10">
      <ul className="flex gap-10">
        <Link to="">
          <li className="font-bold hover:border-b-2 hover:border-b-amber-950">
            Accessories
          </li>
        </Link>
        <Link to="">
          <li className="font-bold hover:border-b-2 hover:border-b-amber-950">
            Coffee beans
          </li>
        </Link>
        <Link to="">
          <li className="font-bold hover:border-b-2 hover:border-b-amber-950">
            Apparel
          </li>
        </Link>
        <Link to="">
          <li className="font-bold hover:border-b-2 hover:border-b-amber-950">
            Instant Coffee
          </li>
        </Link>
        <Link to="">
          <li className="font-bold hover:border-b-2 hover:border-b-amber-950">
            Boundle
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Categories
