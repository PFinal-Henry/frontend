import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sales() {
  return (
    <div className="py-4 px-8">
      <div className="flex flex-row gap-2 ">
        <div className="w-3/5 py-5 px-8  text-start bg-slate-100">
          <h1 className="text-xs font-bold">Mega Sale Up To 50%</h1>
          <p className="text-[10px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            itaque similique
          </p>
          <button className="bg-[#3056D3] text-white py-[6px] px-4 text-xs mt-2">
            Grab the offer
          </button>
        </div>
        <div className="flex flex-col gap-2 w-2/5 ">
          <div className=" bg-slate-100 h-1/2">
            <h3 className="text-[10px] pt-5 pb-2 font-bold">
              Summer Trvel Colection
            </h3>
            <Link>
              <p className="text-[10px] font-bold">Discover Now</p>
            </Link>
          </div>
          <div className=" bg-slate-100 h-1/2">
            <h3 className="text-[10px] pt-5 pb-2 font-bold">
              Summer Trvel Colection
            </h3>
            <Link>
              <p className="text-[10px] font-bold">Shop Now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
