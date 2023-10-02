import React from "react";
import more from "../../assets/more.png";

const Chat = () => {
  return (
    <div className="border border-blue-600 w-[520px]">
      <div className="flex justify-between items-center bg-blue-900 p-3">
        <span className="text-white text-xl">John</span>
        <div>
          <img src={more} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
