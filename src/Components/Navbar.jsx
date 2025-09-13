import React, { useState } from 'react'
import logo from "../assets/yogaLogo.jpg"
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimes,
  faBarsProgress,
  faHeart
} from "@fortawesome/free-solid-svg-icons"
import { useSelector } from 'react-redux'
import { FaHeart } from 'react-icons/fa'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    let navigate=useNavigate()
      const wishList = useSelector((state) => state.wishList);
  const count = wishList.length;
  return (
     <nav className="bg-white shadow-md  w-full top-0 left-0 z-50">
<div className="container mx-auto">
          <div className="max-w-7xl mx-auto  py-2 flex justify-between items-center">
        
        {/* Logo */}
        <div className="">
          <img src={logo} alt="logo image" className='w-[65px] '/>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
            <NavLink to={"/"} className={({ isActive }) =>
                  isActive ? "bg-purple-600 text-white px-2 py-1.5 rounded-lg" : "" }><li >Home</li></NavLink>
            <NavLink to={"/about"} className={({ isActive }) =>
                  isActive ? "bg-purple-600 text-white px-2 py-1.5 rounded-lg" : "" }><li >About</li></NavLink>
            <NavLink to={"/classes"} className={({ isActive }) =>
                  isActive ? "bg-purple-600 text-white px-2 py-1.5 rounded-lg" : "" }><li >Classes</li></NavLink>
            <NavLink to={"/contact"} className={({ isActive }) =>
                  isActive ? "bg-purple-600 text-white px-2 py-1.5 rounded-lg" : "" }><li >Contact</li></NavLink>
            <NavLink to={"/Favourite"} className="relative"><i><FaHeart className='text-2xl'/> <span className='absolute bg-purple-600 text-white px-0.5 right-[-10px] top-[-80%] text-xl rounded-[30%]'>{count}</span></i></NavLink>
            
        </ul>
<ul className="flex space-x-8 text-gray-700 font-medium items-center">
  {/* <li><NavLink to={"/login"}>LogIn</NavLink></li> */}
<li onClick={()=>{navigate("/login")}}><NavLink >SignOut</NavLink></li>
</ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FontAwesomeIcon icon={faTimes} size="lg" /> : <FontAwesomeIcon icon={faBarsProgress} size="lg" />}
          {/* open */}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">
            <NavLink to={"/"}><li onClick={() => setIsOpen(false)}>Home</li></NavLink>
            <NavLink to={"/about"}><li onClick={() => setIsOpen(false)}>About</li></NavLink>
            <NavLink to={"/classes"}><li onClick={() => setIsOpen(false)}>Classes</li></NavLink>
            <NavLink to={"/contact"}><li onClick={() => setIsOpen(false)}>Contact</li></NavLink>
            <NavLink to={"/Favourite"}><li onClick={() => setIsOpen(false)}><FaHeart /></li></NavLink>
            

          </ul>
        </div>
      )}
</div>
    </nav>
  )
}

export default Navbar