import React from "react";
import { BsStarFill } from "react-icons/bs";
export default function Customer() {
  return (
    <div className="py-3">
      <h2 className="font-bold text-sm">Customer Reviews</h2>
      <div className="flex flex-row px-8 pt-2 gap-2">
        <div className="flex flex-col gap-1 items-start border-gray-200 border-[1px] p-2">
          <div className="flex flex-row">
            <BsStarFill size={9} />
            <BsStarFill size={9} />
            <BsStarFill size={9} />
            <BsStarFill size={9} />
            <BsStarFill size={9} />
          </div>
          <div>
            <p className="text-[8px] text-start">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            </p>
          </div>
          <div className="flex flex-row justify-start gap-2">
            <div>
              <img
                src="https://source.unsplash.com/random/50*50"
                alt="Imagen random"
                className="rounded-[50%] h-[35px] w-[35px]"
              />
            </div>
            <div>
              <h4 className="text-[10px] text-bold ">John Doe</h4>
              <p className="text-[8px]">Founder</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start border-gray-200 border-[1px] p-2">
          <div className="flex flex-row">
            <BsStarFill size={9} />
            <BsStarFill size={9} />
            <BsStarFill size={9} />
            <BsStarFill size={9} />
            <BsStarFill size={9} />
          </div>
          <div>
            <p className="text-[8px] text-start">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            </p>
          </div>
          <div className="flex flex-row justify-start gap-2">
            <div>
              <img
                src="https://source.unsplash.com/random/50*50"
                alt="Imagen random"
                className="rounded-[50%] h-[35px] w-[35px]"
              />
            </div>
            <div>
              <h4 className="text-[10px] text-bold">John Doe</h4>
              <p className="text-[8px]">Founder</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start border-gray-200 border-[1px] p-2">
          <div className="flex flex-row">
            <BsStarFill size={9} />
            <BsStarFill size={9} />
            <BsStarFill size={9} />
            <BsStarFill size={9} />
            <BsStarFill size={9} />
          </div>
          <div>
            <p className="text-[8px] text-start">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            </p>
          </div>
          <div className="flex flex-row justify-start gap-2">
            <div>
              <img
                src="https://source.unsplash.com/random/50*50"
                alt="Imagen random"
                className="rounded-[50%] h-[35px] w-[35px]"
              />
            </div>
            <div>
              <h4 className="text-[10px] text-bold">John Doe</h4>
              <p className="text-[8px]">Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
