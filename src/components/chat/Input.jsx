import React, { useContext, useRef, useState } from "react";
import {
  doc,
  onSnapshot,
  arrayUnion,
  updateDoc,
  Timestamp,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";
import { v4 as uuid } from "uuid";
import { db, storage } from "../../firebase";
import attach from "../../assets/attach.png";
import imge from "../../assets/img.png";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { BaseUrlContext } from "../../context/BaseUrlContext";
import moment from "moment";

const Input = () => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const { setSelectedImage } = useContext(BaseUrlContext);
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  // const [selectedImage, setSelectedImage] = useState("");|
  const handleSubmit = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("File available at", downloadURL);
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                time: moment().format("YYYYMMDDhmmss"),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
          time: moment().format("YYYYMMDDhmmss"),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: { text },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: { text },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setText("");
    setImg(null);
    console.log("img: ", img);
    setSelectedImage("");
  };

  return (
    <div className="overflow-hidden">
      <div className=" bg-white p-4 flex justify-between">
        <textarea
          type="text"
          className="w-full outline-none resize-none"
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
          value={text}
          rows="1"
        ></textarea>
        <div className="flex items-center gap-2">
          <input
            type="file"
            id="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              setImg(e.target.files[0]);
              const base64Url = URL.createObjectURL(e.target.files[0]);
              setSelectedImage(base64Url);
            }}
          />
          {/* <img src={attach} alt="" className="w-6 cursor-pointer " /> */}
          <label htmlFor="file">
            <img src={imge} alt="" className="w-6 cursor-pointer" />
          </label>
        </div>
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

export default Input;
