import React, { useState, useContext } from "react";
import {
  collection,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

const SearchBar = () => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [searchUser, setSearchUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dbRef = collection(db, "users");
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

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Find a buddy"
            className="p-2 w-full bg-transparent border-b border-b-transparent focus:border-b-white text-white outline-none "
            onChange={(e) => setSearchUser(e.target.value)}
            value={searchUser}
          />
        </form>
      </div>
      {user && (
        <div className=" flex items-center cursor-pointer p-2 gap-3 text-white hover:bg-purple-950">
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
