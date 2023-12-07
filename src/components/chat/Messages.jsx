import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { BaseUrlContext } from "../../context/BaseUrlContext";
import { db } from "../../firebase";
import {
  doc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const Messages = () => {
  // const [owner, setOwner] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const { selectedImage, setSelectedImage } = useContext(BaseUrlContext);
  const [messages, setMessages] = useState([]);
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
        messages?.length > 0 &&
        messages[messages.length - 1].senderId === currentUser.uid
          ? "items-end"
          : ""
      }`}
    >
      {messages?.map((message) => (
        <Message message={message} key={message.id} />
      ))}
      <div className="absolute bottom-28  w-[480px]  backdrop-blur-md">
        {selectedImage && (
          <>
            <img
              className="w-16 h-16  object-cover"
              src={selectedImage}
              alt="selected image"
            />
            <button
              onClick={() => setSelectedImage("")}
              className="absolute top-3 right-4"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Messages;
