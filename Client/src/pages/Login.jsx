import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const inputChangeHandler = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <section className="">
      <div className="flex flex-col w-full space-y-4 max-w-lg mx-auto h-full">
        <h2>Sign In</h2>
        <form action=" " className="flex flex-col space-y-3">
          <p className="bg-red-500 text-white px-3 py-1 text-sm rounded-lg">
            This is an error message
          </p>

          <input
            className="px-3 py-2 outline-none rounded-lg"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={userData.email}
            onChange={inputChangeHandler}
          />
          <input
            className="px-3 py-2 outline-none rounded-lg"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={userData.password}
            onChange={inputChangeHandler}
          />
          <button
            type="submit"
            className="px-3 py-2 bg-blue-700 rounded-lg text-white w-1/3 self-center	"
          >
            Login
          </button>
        </form>
        <small className="mx-auto">
          Already have an account?{" "}
          <Link to="/register" className="">
           Sign Up
          </Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
