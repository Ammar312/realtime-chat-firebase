import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Chats from "./Chats";

const SideBar = () => {
  return (
    <div className="border-red-500 border w-[330px] bg-blue-950">
      <Navbar />
      <SearchBar />
      <Chats />
    </div>
  );
};

export default SideBar;
