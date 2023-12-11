import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-blue-200 min-h-screen flex flex-col justify-center items-center">
        <div className=" bg-white px-8 pt-10 pb-6 w-[360px]">
          <p className=" text-center font-semibold text-4xl mb-6 text-blue-600">
            Login
          </p>
          <div>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="p-3 border-2 "
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 border-2 "
              />

              <button
                type="submit"
                className=" bg-blue-400 text-white p-2 text-lg hover:rounded-md transition-all mt-5"
              >
                Login
              </button>
            </form>
          </div>
          <div className=" text-center my-4 text-blue-900">
            Don't Have Account? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
