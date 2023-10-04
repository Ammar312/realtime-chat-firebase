import React, { useState } from "react";
import Message from "./Message";

const Messages = () => {
  const [owner, setOwner] = useState(true);
  return (
    <div
      className={`bg-purple-100 h-[385px] overflow-y-auto p-2 flex flex-col ${
        owner && "items-end"
      }`}
    >
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
