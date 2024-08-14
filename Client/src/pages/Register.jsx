import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const inputChangeHandler = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  const registerUser = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/users/register`, userData);
      const newUser = await response.data;
      if (!newUser) {
        setError("Couldn't register user. Please try again.");
      }
      toast.success("Succesfully Registered");
      navigate("/login");
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data);
    }
    setIsLoading(false);
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-800 p-4">
      <div className="flex flex-col w-full max-w-md p-6 rounded-lg shadow-lg bg-gray-900/60 backdrop-blur-md border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>
        <form onSubmit={registerUser} className="flex flex-col space-y-4">
          <p
            className={`bg-red-500 text-white px-3 py-1 text-sm rounded-lg ${
              error ? "" : "hidden"
            }`}
          >
            {error}
          </p>
          <input
            className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={userData.name}
            onChange={inputChangeHandler}
          />
          <input
            className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={userData.email}
            onChange={inputChangeHandler}
          />
          <input
            className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={userData.password}
            onChange={inputChangeHandler}
          />
          <input
            className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm Password"
            value={userData.password2}
            onChange={inputChangeHandler}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 w-full rounded-lg text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 self-center"
          >
            Register
          </button>
        </form>
        <small className="text-center text-white mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Sign In
          </Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
