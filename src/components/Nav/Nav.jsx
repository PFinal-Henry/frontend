import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
export default function Nav() {
  return (
    <div className=" flex w-full flex-col">
      <div className=" flex flex-row justify-between border-b-2 border-b-slate-100 p-2 pb-1 w-full text-[10px] font-sans">
        <ul className=" flex flex-row gap-1">
          <Link>
            <li>About Us</li>
          </Link>
          <Link>
            <li>Order Tracking</li>
          </Link>
          <Link>
            <li>Contact Us</li>
          </Link>
        </ul>
        <ul>
          <select>
            <option>English</option>
            <option>Spanish</option>
          </select>
          <select>
            <option>USD</option>
            <option>PEN</option>
            <option>PES</option>
          </select>
        </ul>
      </div>
      <div>
        <div className="flex flex-row justify-between border-b-2 border-b-slate-100 p-2 w-full text-xs">
          <div className="flex flex-row gap-7 justify-center items-center ">
            <img
              src="https://source.unsplash.com/random/50x25"
              alt="Imagen random"
            />
            <ul className="flex flex-row gap-2">
              <Link>
                <li>Home</li>
              </Link>
              <Link>
                <li>Shop</li>
              </Link>
              <Link>
                <li>Accesories</li>
              </Link>
              <Link>
                <li>Contact</li>
              </Link>
            </ul>
            <div className="flex flex-row justify-center gap-2">
              <FaSearch />
              <FaUserAlt />
              <FaHeart />
              <FaShoppingCart />
            </div>
          </div>
        </div>
      </div>
      <div id="my-signin2"></div>
    </div>
  );
}
