import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-blue-800 flex items-center justify-between gap-2 p-3">
      <div className=" flex items-center gap-2">
        <img
          src="https://images.pexels.com/photos/17977042/pexels-photo-17977042/free-photo-of-smiling-woman-in-purple-dress-on-vacation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <span>Ronald Duck</span>
      </div>
      <div className="p-1 border border-white bg-slate-400 text-xs">Logout</div>
    </div>
  );
};

export default Navbar;
