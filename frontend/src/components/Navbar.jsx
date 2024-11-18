/* This code snippet is a React component called `Navbar` that represents a navigation bar for a web
application. Here's a breakdown of what the code does: */
"use client";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RiUser3Line } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";
import { GoHeart } from "react-icons/go";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const { currentUser, logoutUser } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logoutUser();
    setIsDropdownOpen(false); // Close dropdown after logout
  };

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <FaBarsStaggered className="text-xl" />
          </Link>
          {/* Search Input */}
          <div className="relative flex items-center mx-2">
            <LuSearch className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-1 bg-[#eaeaea] rounded-lg w-full"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex relative items-center gap-5">
          <div className="relative">
            {currentUser ? (
              <div>
                <button
                  className="flex items-center"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <img
                    src={avatarImg}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul>
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            className="block px-4 py-2 text-sm hover:bg-slate-200 rounded-sm"
                            to={item.href}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li
                        onClick={handleLogOut}
                        className="block px-4 py-2 text-sm w-full text-left hover:bg-slate-200 rounded-sm cursor-pointer"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <RiUser3Line className="text-xl" />
              </Link>
            )}
          </div>

          <button>
            <GoHeart className="text-xl" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="text-xl" />
            <span className="text-sm font-semibold ml-2">
              {cartItems.length || 0}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
