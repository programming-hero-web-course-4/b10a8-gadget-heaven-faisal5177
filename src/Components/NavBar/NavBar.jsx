import React, { useEffect, useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md'; 
import { AiOutlineHeart } from 'react-icons/ai';  
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  
  const location = useLocation(); 
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const storedCartList = JSON.parse(localStorage.getItem('cart-list')) || [];
    const storedWishList = JSON.parse(localStorage.getItem('wish-list')) || [];

    setCartCount(storedCartList.length);
    setWishlistCount(storedWishList.length);

    const handleStorageChange = () => {
      const updatedCartList = JSON.parse(localStorage.getItem('cart-list')) || [];
      const updatedWishList = JSON.parse(localStorage.getItem('wish-list')) || [];
      
      setCartCount(updatedCartList.length);
      setWishlistCount(updatedWishList.length);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <nav className="navbar bg-base-100 px-10">
      <div className="navbar-start">
        <NavLink className={`font-bold text-xl ${isHomePage ? 'text-white' : 'text-black'}`} to="/">Gadget Heaven</NavLink>
      </div>
      <div className="navbar-center">
        <NavLink className={`hover:text-[#9538E2] font-bold mx-4 ${isHomePage ? 'hover:text-black text-white' : 'text-black'}`} to="/">Home</NavLink>
        <NavLink className={`hover:text-[#9538E2] font-bold mx-4 ${isHomePage ? 'hover:text-black text-white' : 'text-black'}`} to="/statistics">Statistics</NavLink>
        <NavLink className={`hover:text-[#9538E2] font-bold mx-4 ${isHomePage ? 'hover:text-black text-white' : 'text-black'}`} to="/dashboard">Dashboard</NavLink>
      </div>
      <div className="navbar-end">
        <Link to="/cart" className="btn btn-sm font-bold hover:bg-[#9538E2] hover:text-white rounded-full mr-3">
          <MdOutlineShoppingCart />
          <span>{cartCount}</span>
        </Link>
        <Link to="/wishlist" className="btn btn-sm rounded-full font-bold hover:bg-[#9538E2] hover:text-white">
          <AiOutlineHeart />
          <span>{wishlistCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
