import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Message = ({ message }) => {
  // const [owner, setOwner] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div
      className={
        message.senderId === currentUser.uid
          ? "flex flex-row-reverse mb-4 gap-2"
          : "flex mb-4"
      }
    >
      <div className="flex flex-col">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-xs text-slate-500">Just now</span>
      </div>
      <div
        className={`max-w-[80%] flex flex-col gap-2 ${
          message.senderId === currentUser.uid && "items-end"
        }`}
      >
        <p
          className={`bg-white p-2 max-w-max ${
            message.senderId === currentUser.uid
              ? "rounded-tl-xl "
              : "rounded-tr-xl"
          }  rounded-br-xl rounded-bl-xl`}
        >
          {message.text}
        </p>
        {message.img && <img src={message.img} alt="" className="w-[50%]" />}
      </div>
    </div>
  );
};
// "https://images.pexels.com/photos/13193108/pexels-photo-13193108.jpeg?auto=compress&cs=tinysrgb&w=600"

export default Message;
