import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/userContext";
import axios from "axios";
import Loader from "../components/Loader.jsx";
import DeletePost from "./DeletePost.jsx";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const { id } = useParams();
  const navigate = useNavigate();

  // Redirect to login page if the user is not logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/posts/users/${id}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, [id, token]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="w-11/12 sm:w-3/4 mx-auto mt-10 min-h-[70vh]">
      {posts.length > 0 ? (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <article
              className="p-4 bg-slate-800/60 backdrop-blur-md hover:bg-slate-800 border border-slate-700 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between rounded-xl flex-wrap"
              key={post._id}
            >
              <div className="flex items-center gap-4 w-full sm:w-auto flex-grow">
                <div className="w-16 h-16 min-w-[4rem] rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    className="object-cover w-full h-full"
                    src={post.thumbnail}
                    alt={post.title}
                  />
                </div>
                <h5 className="text-white text-lg truncate  flex-grow">
                  {post.title}
                </h5>
              </div>
              <div className="flex gap-3 mt-4 sm:mt-0 sm:ml-auto flex-wrap">
                <Link
                  className="px-4 py-1 text-gray-900 rounded-xl bg-gray-400 hover:bg-gray-500"
                  to={`/posts/${post._id}`}
                >
                  View
                </Link>
                <Link
                  className="px-4 py-1 text-white rounded-xl bg-blue-500 hover:bg-blue-600"
                  to={`/posts/${post._id}/edit`}
                >
                  Edit
                </Link>
                <DeletePost postID={post._id}>Delete</DeletePost>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <h2 className="text-white text-center mt-10">No posts are there</h2>
      )}
    </section>
  );
};

export default Dashboard;
