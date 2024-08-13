import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";
import { toast } from "react-toastify";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  const inputChangeHandler = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(`${BASE_URL}/users/login`, userData);
      const user = await response.data;
      setCurrentUser(user);
      toast.success("Succesfully loged in");
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-800 p-4">
      <div className="flex flex-col w-full max-w-md p-6 rounded-lg shadow-lg bg-gray-900/60 backdrop-blur-md border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-white">Sign In</h2>
        <form onSubmit={loginUser} className="flex flex-col space-y-4">
          <p
            className={`bg-red-500 text-white px-3 py-1 text-sm rounded-lg ${
              error ? "" : "hidden"
            }`}
          >
            {error}
          </p>
          <input
            className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={userData.email}
            onChange={inputChangeHandler}
          />
          <input
            className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={userData.password}
            onChange={inputChangeHandler}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 rounded-lg text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <small className="text-center text-white mt-6">
          Already have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
