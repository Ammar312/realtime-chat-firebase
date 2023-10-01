import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const SideBar = () => {
  return (
    <div className="border-red-500 border w-[330px] bg-blue-950">
      <Navbar />
      <SearchBar />
    </div>
  );
};

export default SideBar;
