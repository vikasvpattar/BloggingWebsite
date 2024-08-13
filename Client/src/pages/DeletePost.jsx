import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/userContext";
import axios from "axios";
import Loader from "../components/Loader";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const DeletePost = ({ postID }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  // redirect to login page if the user is not logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  const removePost = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`${BASE_URL}/posts/${id}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status == 200) {
        if (location.pathname == `/myposts/${currentUser.id}`) {
          navigate(0);
        } else {
          navigate("/");
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Couldn't delete the post.");
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Link
      onClick={() => removePost(postID)}
      className="px-3 py-1 bg-red-700 text-white rounded-md text-sm"
    >
      Delete
    </Link>
  );
};

export default DeletePost;
