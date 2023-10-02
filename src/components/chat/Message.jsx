import React from "react";

const Message = () => {
  return (
    <div className="flex mb-4">
      <div className="flex flex-col">
        <img
          src="https://images.pexels.com/photos/13193108/pexels-photo-13193108.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-xs text-slate-500">Just now</span>
      </div>
      <div>
        <p>Hey Dy!</p>
      </div>
    </div>
  );
};

export default Message;
