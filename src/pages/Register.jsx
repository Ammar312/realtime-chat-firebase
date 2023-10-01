import React from "react";

const Register = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex justify-center items-center">
      <div>
        <div className=" bg-white px-8 py-16">
          <p className=" text-center">Register</p>
          <form className="flex flex-col gap-3">
            <input type="text" placeholder="Username" className="p-2" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="file" name="" id="" />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
