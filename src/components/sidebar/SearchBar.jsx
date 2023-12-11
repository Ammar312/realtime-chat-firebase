import React, { useState, useContext, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  doc,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

const SearchBar = () => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [searchUser, setSearchUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dbRef = collection(db, "user");
    const q = query(dbRef, where("displayName", "==", searchUser));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUser(doc.data());
        console.log(user);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const response = await getDoc(doc(db, "chats", combinedId));
      if (!response.exists()) {
        console.log("function working");
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
      setUser(null);
      setSearchUser("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" border-b-white">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Find a buddy &#xF52A;"
            className="p-2 w-full bg-transparent border-b border-b-transparent focus:border-b-white text-white outline-none "
            onChange={(e) => setSearchUser(e.target.value)}
            value={searchUser}
          />
        </form>
      </div>
      {user && (
        <div
          className=" flex items-center cursor-pointer p-2 gap-3 text-white hover:bg-purple-950"
          onClick={() => handleSelect()}
        >
          <img
            src={user.photoURL}
            alt=""
            className=" w-12 h-12 rounded-full object-cover"
          />
          <div>
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
