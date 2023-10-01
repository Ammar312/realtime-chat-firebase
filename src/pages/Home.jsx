import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Chat from "../components/chat/Chat";

const Home = () => {
  return (
    <div>
      <Sidebar />;
      <Chat />
    </div>
  );
};

export default Home;
