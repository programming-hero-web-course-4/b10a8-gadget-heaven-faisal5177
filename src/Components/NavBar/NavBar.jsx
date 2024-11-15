import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md'; 
import { AiOutlineHeart } from 'react-icons/ai';  
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation(); 
  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar bg-base-100 px-10">
      <div className="navbar-start">
        <NavLink className={`font-bold text-xl ${isHomePage ? 'text-white' : 'text-black'}`} to="/">Gadget Heaven</NavLink>
      </div>
      <div className="navbar-center">
        <NavLink className={`hover:text-[#9538E2] font-bold mx-4 ${isHomePage ? 'text-white' : 'text-black'}`} to="/">Home</NavLink>
        <NavLink className={`hover:text-[#9538E2] font-bold mx-4 ${isHomePage ? 'text-white' : 'text-black'}`} to="/statistics">Statistics</NavLink>
        <NavLink className={`hover:text-[#9538E2] font-bold mx-4 ${isHomePage ? 'text-white' : 'text-black'}`} to="/dashboard">Dashboard</NavLink>
      </div>
      <div className="navbar-end">
        <Link to="/cart" className="btn btn-md rounded-full mr-3">
          <MdOutlineShoppingCart />
          <span></span>
        </Link>
        <Link to="/wishlist" className="btn btn-md rounded-full">
          <AiOutlineHeart />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
