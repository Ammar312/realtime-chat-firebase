import React, { useContext } from "react";
import attach from "../../assets/attach.png";
import img from "../../assets/img.png";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Input = () => {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  return (
    <div className="overflow-hidden">
      <div className=" bg-white p-4 flex justify-between">
        <input
          type="text"
          className="w-full outline-none"
          placeholder="Type a message..."
        />
        <div className="flex items-center gap-2">
          <img src={attach} alt="" className="w-6 cursor-pointer" />
          <img src={img} alt="" className="w-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Input;
