import React, { useRef, useState } from "react";
import addAvatar from "../assets/addAvatar.png";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";
import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

import { auth, storage, db } from "../firebase";
import { Navigate, useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState("");
  const fileRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(response.user);

      const storageRef = ref(storage, username);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        // "state_changed",
        // (snapshot) => {
        //   // Observe state change events such as progress, pause, and resume
        //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        //   const progress =
        //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //   console.log("Upload is " + progress + "% done");
        //   switch (snapshot.state) {
        //     case "paused":
        //       console.log("Upload is paused");
        //       break;
        //     case "running":
        //       console.log("Upload is running");
        //       break;
        //   }
        // },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("File available at", downloadURL);
            await updateProfile(response.user, {
              displayName: username,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "user", response.user.uid), {
              uid: response.user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", response.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    }
  };
  return (
    <div className="bg-blue-200 min-h-screen flex justify-center items-center">
      <div className=" bg-white px-8 pt-10 pb-6 w-[360px]">
        <p className=" text-center font-semibold text-4xl mb-6 text-blue-600">
          Register
        </p>
        <div>
          <div className=" flex justify-center items-center mb-2">
            {selectedImg ? (
              <img
                src={selectedImg}
                className="w-16 h-16 rounded-full border border-black object-cover"
                alt=""
              />
            ) : (
              <i className="bi bi-person-circle text-6xl text-blue-400"></i>
            )}
          </div>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="p-2 border-2 "
              required
            />
            <input
              type="email"
              required
              placeholder="email"
              className="p-2 border-2 "
            />
            <input
              type="password"
              placeholder="password"
              required
              className="p-2 border-2 "
            />
            <label
              htmlFor="file"
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src={addAvatar} alt="addavatar" className="w-10" />
              <span className=" text-blue-800">Add Your Image</span>
            </label>
            <input
              type="file"
              name=""
              id="file"
              className="hidden"
              required
              accept="image/*"
              onChange={(e) => {
                const base64Url = URL.createObjectURL(e.target.files[0]);
                setSelectedImg(base64Url);
              }}
            />
            <button
              type="submit"
              className=" bg-blue-400 text-white p-2 text-lg hover:rounded-md transition-all mt-5"
            >
              Signup
            </button>
          </form>
        </div>
        <div className=" text-center my-4 text-blue-900">
          Already Have Account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
