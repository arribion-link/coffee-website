'use client'
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import ProductDropDown from "./ProductDropDown";
import {  useState } from "react";

const Header = () => {
const [open, setOpen] = useState(true);
const handlePopUp = () => {
    setOpen(!open)
  }
  // const linkRef = useRef();
  //   useEffect(() => (
  //     window.addEventListener("click", (e) => {
  //       if (e.target !== linkRef.current) {
  //         setOpen(false);
  //       }
  //     })
  //   ), [])
  return (
    <header className="flex justify-between sticky bottom-0 bg-slate-50 items-center p-2 z-50">
      <Link to="/">
        <img
          src={logo}
          alt="coffee point logo"
          className="w-full h-auto max-w-[4em] "
        />
      </Link>
      <nav>
        <ul className="hidden md:flex gap-4">
          <li
            onClick={handlePopUp}
            className="flex items-center gap-2 cursor-pointer relative">
            Products
            <IoIosArrowDown />
            {!open && <ProductDropDown />}
          </li>
          <Link to="/coffeepoint/special">
            <li>Special Offer</li>
          </Link>
          <Link to="/process">
            <li>The Process</li>
          </Link>
          <Link to="/packaging">
            <li>Packaging</li>
          </Link>
          <Link to="/offer">
            <li>Offer</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <div className="flex gap-3 items-center">
        <FaSearch className="text-amber-900" />
        <FaCartArrowDown size={20} className="text-amber-900" />

        <Link to="/login">
          <button className="border border-amber-900 py-1 px-4 rounded-3xl">
            Sign in / sign Up
          </button>
        </Link>

        <FaBars className="block md:hidden" />
      </div>
    </header>
  );
}

export default Header
