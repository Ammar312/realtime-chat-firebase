import React from "react";
import addAvatar from "../assets/addAvatar.png";

const Register = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex justify-center items-center">
      <div className=" bg-white px-8 pt-10 pb-6 w-[360px]">
        <p className=" text-center font-semibold text-4xl mb-6 text-blue-600">
          Register
        </p>
        <div>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Username"
              className="p-2 border-2 "
            />
            <input type="email" placeholder="email" className="p-2 border-2 " />
            <input
              type="password"
              placeholder="password"
              className="p-2 border-2 "
            />
            <label
              htmlFor="file"
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src={addAvatar} alt="addavatar" className="w-10" />
              <span className=" text-blue-800">Add Your Image</span>
            </label>
            <input type="file" name="" id="file" className="hidden" />
            <button
              type="submit"
              className=" bg-blue-400 text-white p-2 text-lg hover:rounded-md transition-all mt-5"
            >
              Signup
            </button>
          </form>
        </div>
        <div className=" text-center my-4 text-blue-900">
          Already Have Account? Login
        </div>
      </div>
    </div>
  );
};

export default Register;
