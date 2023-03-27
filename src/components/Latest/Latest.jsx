import React from "react";
import { BsStarFill } from "react-icons/bs";
export default function Latest() {
  return (
    <div className="flex flex-col gap-6 px-8 pt-2 w-full">
      <div className="flex flex-col">
        <h2 className="font-bold text-md ">Our Latest Products</h2>
        <p className=" text-gray-400 text-[10px]">
          There are many variations of passages of Lorem
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <div>
          <img
            src="https://source.unsplash.com/random/368*290"
            alt="Imagen random"
          />
          <div>
            <div className="flex flex-col border-gray-200 border-[1px] gap-1 pb-2">
              <h3 className="text-xs font-bold">Product Name</h3>
              <p className="text-[9px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nemo aliquam molestias.
              </p>
            </div>
            <div className=" border-gray-200 border-b-[1px]">
              <div className="flex flex-row gap-1 border-gray-200 border-x-[1px] border-b-[1px] items-center  p-[2px]">
                <div className="flex flex-row">
                  <BsStarFill size={9} />
                  <BsStarFill size={9} />
                  <BsStarFill size={9} />
                  <BsStarFill size={9} />
                  <BsStarFill size={9} />
                </div>
                <span className="text-[8px]">(100) Reviews</span>
              </div>
              <p className="border-gray-200 border-x-[1px]">$299</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random/368*290"
            alt="Imagen random"
          />
          <div>
            <div className="flex flex-col border-gray-200 border-[1px] gap-1 pb-2">
              <h3 className="text-xs font-bold">Product Name</h3>
              <p className="text-[9px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nemo aliquam molestias.
              </p>
            </div>
            <div className=" border-gray-200 border-b-[1px]">
              <div className="flex flex-row gap-1 border-gray-200 border-x-[1px] border-b-[1px] items-center p-[2px] ">
                <div className="flex flex-row">
                  <BsStarFill size={9} />
                  <BsStarFill size={9} />
                  <BsStarFill size={9} />
                  <BsStarFill size={9} />
                  <BsStarFill size={9} />
                </div>
                <span className="text-[8px]">(100) Reviews</span>
              </div>
              <p className="border-gray-200 border-x-[1px]">$299</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random/368*290"
            alt="Imagen random"
          />
          <div>
            <div className="flex flex-col border-gray-200 border-[1px] gap-1 pb-2">
              <h3 className="text-xs font-bold">Product Name</h3>
              <p className="text-[9px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nemo aliquam molestias.
              </p>
            </div>
            <div className=" border-gray-200 border-b-[1px]">
              <div className="flex flex-row gap-1 border-gray-200 border-x-[1px] border-b-[1px] items-center p-[2px] ">
                <div className="flex flex-row">
                  <BsStarFill size={9} />
                  <BsStarFill size={9} />
                  <BsStarFill size={9} />
                  <BsStarFill size={9} />
                  <BsStarFill size={9} />
                </div>
                <span className="text-[8px]">(100) Reviews</span>
              </div>
              <p className="border-gray-200 border-x-[1px]">$299</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
