// import {useState} from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-2">
      <img src={logo} alt="coffee point logo" className="w-full h-auto max-w-[4em] "/>
      <nav>
        <ul className="hidden md:flex gap-4">
          <Link to="/product" className="flex items-center gap-2">
            <li>Products</li>
            <IoIosArrowDown />
          </Link>
          <Link to="/product">
            <li>Special Offer</li>
          </Link>
          <Link to="/product">
            <li>The Process</li>
          </Link>
          <Link to="/product">
            <li>Packaging</li>
          </Link>
          <Link to="/product">
            <li>Offer</li>
          </Link>
        </ul>
          </nav>
          <div className="flex gap-3 items-center">
              <FaSearch />
              <FaCartArrowDown />
              <button>
                  Sign in / sign Up
              </button>
          <FaBars className="block md:hidden"/> 
          </div>
    </header>
  );
}

export default Header
