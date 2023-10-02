import React from "react";

const Chats = () => {
  return (
    <div>
      <div className=" flex items-center cursor-pointer p-2 gap-3 text-white hover:bg-purple-950">
        <img
          src="https://images.pexels.com/photos/17977042/pexels-photo-17977042/free-photo-of-smiling-woman-in-purple-dress-on-vacation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className=" w-12 h-12 rounded-full object-cover"
        />
        <div>
          <span className=" font-semibold text-[1.1rem]">Jack More</span>
          <p className="text-slate-300 text-sm">Hello mike</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
