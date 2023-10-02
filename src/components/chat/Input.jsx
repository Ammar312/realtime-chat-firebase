import React from "react";
import attach from "../../assets/attach.png";
import img from "../../assets/img.png";

const Input = () => {
  return (
    <div className="overflow-hidden">
      <div className=" bg-white p-4 flex justify-between">
        <input type="text" className="w-full" placeholder="Type a message..." />
        <div className="flex items-center">
          <img src={attach} alt="" />
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Input;
