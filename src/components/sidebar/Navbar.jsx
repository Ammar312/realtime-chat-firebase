import React, { useContext } from "react";
import { auth } from "../../firebase";
import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className=" bg-blue-950 flex items-center justify-between gap-2 p-3">
      <div className=" flex items-center gap-2">
        <img
          src={currentUser.photoURL}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-white">{currentUser.displayName}</span>
      </div>
      <div
        className="p-1  text-white text-base cursor-pointer hover:text-red-500 transition-all"
        onClick={() => signOut(auth)}
      >
        Logout
        <i className="bi bi-box-arrow-right mx-1 text-sm"></i>
      </div>
    </div>
  );
};

export default Navbar;
