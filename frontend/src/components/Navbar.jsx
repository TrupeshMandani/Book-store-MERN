"use client";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RiUser3Line } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";
import { GoHeart } from "react-icons/go";
import { list } from "postcss";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/order" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const currentUser = true;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(isDropdownOpen);

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 bg-green-500">
      <nav className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <FaBarsStaggered className="size-6" />
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
                  <div className=" absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
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
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <RiUser3Line className="size-6" />
              </Link>
            )}
          </div>

          <button>
            <GoHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="size-6" />
            <span className="text-sm font-semi">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;