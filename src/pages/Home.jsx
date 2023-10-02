import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Chat from "../components/chat/Chat";

const Home = () => {
  return (
    <div className="bg-green-300 min-h-screen flex justify-center items-center">
      <div className="border-2 border-white flex h-[510px] w-[850px] overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
