import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const inputChangeHandler = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form className="flex flex-col space-y-4">
          <p className="bg-red-500 text-white px-3 py-1 text-sm rounded-lg">
            This is an error message
          </p>
          <input
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={userData.name}
            onChange={inputChangeHandler}
          />
          <input
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={userData.email}
            onChange={inputChangeHandler}
          />
          <input
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={userData.password}
            onChange={inputChangeHandler}
          />
          <input
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm Password"
            value={userData.password2}
            onChange={inputChangeHandler}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 rounded-lg text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 self-center"
          >
            Register
          </button>
        </form>
        <small className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 hover:underline">
            Sign In
          </Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
