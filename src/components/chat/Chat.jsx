import React from "react";
import more from "../../assets/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="border border-blue-600 w-[520px]">
      {/* <div className="flex flex-col justify-between h-full"> */}
      <div className="flex justify-between items-center bg-blue-900 p-3">
        <span className="text-white text-xl">John</span>
        <div>
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
      {/* </div> */}
    </div>
  );
};

export default Chat;
