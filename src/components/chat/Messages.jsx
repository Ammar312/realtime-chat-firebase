import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import {
  doc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const Messages = () => {
  const [owner, setOwner] = useState(true);
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unsub();
    };
  }, [data.chatId]);
  return (
    <div
      className={`bg-purple-100 h-[385px] overflow-y-auto p-2 flex flex-col ${
        owner && "items-end"
      }`}
    >
      {messages?.map((messag) => (
        <Message messag={messag} key={messag.id} />
      ))}
    </div>
  );
};

export default Messages;
