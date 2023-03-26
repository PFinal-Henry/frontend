import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="p-4 flex flex-row w-full bg-blue-100 ">
      <div className="flex flex-col justify-center items-center w-1/2">
        <span className="text-[10px] mb-1 text-blue-400">Stared From $50</span>
        <h1 className="text-xs font-bold">
          Ultra HD 4K TV with HDR and Dolby Vision
        </h1>
        <p className="text-[10px] mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
        <button className="bg-[#3056D3] text-white py-2 px-4  w-fit text-xs rounded-full">
          Shop Now
        </button>
      </div>
      <div className="flex flex-col w-1/2">
        <img
          src="https://source.unsplash.com/random/500x500"
          alt="Imagen random"
        />
      </div>
    </div>
  );
}
