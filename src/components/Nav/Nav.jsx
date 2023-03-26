import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className=" flex w-full flex-col">
      <div className=" flex flex-row justify-between border-b-2 border-b-slate-100 p-3 pb-2 w-full text-xs">
        <ul className=" flex flex-row gap-1">
          <li>About Us</li>
          <li>Order Tracking</li>
          <li>Contact Us</li>
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
        <div className="flex flex-row justify-between border-b-2 border-b-slate-100 p-3 pb-2 w-full text-xs">
          <div className="flex flex-row gap-2">
            <img
              src="https://source.unsplash.com/random/50x25"
              alt="Imagen random"
            />
            <div className="flex flex-row">
              <div className="flex flex-row"></div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
