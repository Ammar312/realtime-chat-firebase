import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Chat from "../components/chat/Chat";

const Home = () => {
  return (
    <div className=" bg-gradient-to-r from-[#24243e] via-[#302b63] to-[#0f0c29] min-h-screen flex justify-center items-center">
      <div className="flex h-[510px] w-[850px] overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
