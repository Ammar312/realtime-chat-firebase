import React, { useContext, useEffect, useState } from "react";
import {
  doc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Chats = () => {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        // console.log("Current data: ", doc.data());
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log(Object.entries(chats));
  const handleSelect = (userinfo) => {
    dispatch({ type: "CHANGE_USER", payload: userinfo });
  };
  return (
    <div>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => {
          return (
            <div
              className=" flex items-center cursor-pointer p-2 gap-3 text-white hover:bg-purple-950"
              key={chat[0]}
              onClick={() => {
                handleSelect(chat[1].userInfo);
              }}
            >
              <img
                src={chat[1].userInfo.photoURL}
                alt=""
                className=" w-12 h-12 rounded-full object-cover"
              />
              <div>
                <span className=" font-semibold text-[1.1rem]">
                  {chat[1].userInfo.displayName}
                </span>
                <p className="text-slate-300 text-sm">
                  {chat[1].lastMessage?.text}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Chats;
