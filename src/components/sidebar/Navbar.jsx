import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-blue-800 flex items-center justify-between gap-2 p-3">
      <div className="text-xl text-white">Mess Chat</div>
      <div className=" flex items-center gap-2">
        <img src="" alt="" className="w-8 h-8 rounded-full border-2" />
        <span>Ronald Duck</span>
      </div>
      <div className="p-1 border border-white bg-slate-400 text-xs">Logout</div>
    </div>
  );
};

export default Navbar;
