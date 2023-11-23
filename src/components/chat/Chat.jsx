import React, { useContext } from "react";
import more from "../../assets/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="border border-blue-600 w-[520px]">
      {/* <div className="flex flex-col justify-between h-full"> */}
      <div className="flex justify-between items-center bg-blue-900 p-3">
        <span className="text-white text-xl">{data.user.displayName}</span>
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
