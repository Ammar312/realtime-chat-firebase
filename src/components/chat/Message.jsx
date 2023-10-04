import React, { useState } from "react";

const Message = () => {
  const [owner, setOwner] = useState(true);

  return (
    <div className={owner ? "flex flex-row-reverse mb-4 gap-2" : "flex mb-4"}>
      <div className="flex flex-col">
        <img
          src="https://images.pexels.com/photos/13193108/pexels-photo-13193108.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-xs text-slate-500">Just now</span>
      </div>
      <div
        className={`max-w-[80%] flex flex-col gap-2 ${owner && "items-end"}`}
      >
        <p
          className={`bg-white p-2 max-w-max ${
            owner ? "rounded-tl-xl bg-blue-300 text-white" : "rounded-tr-xl"
          }  rounded-br-xl rounded-bl-xl`}
        >
          Hey Dy!
        </p>
        <img
          src="https://images.pexels.com/photos/17720157/pexels-photo-17720157/free-photo-of-wood-landscape-water-summer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="w-[50%]"
        />
      </div>
    </div>
  );
};

export default Message;
