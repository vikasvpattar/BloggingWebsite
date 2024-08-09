import React, { useContext, useEffect, useState } from "react";
import { DummyPosts } from "../data";
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
  // redirect to login page if the user is not logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
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
    fetchPosts();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="w-3/4 mx-auto mt-10 ">
      {posts.length > 0 ? (
        <div className="flex flex-col gap-3">
          {posts.map((post) => {
            return (
              <article
                className=" p-3 bg-white flex gap-2 items-center justify-between  rounded-xl"
                key={post._id}
              >
                <div className="flex gap-2 items-center">
                  <div className="size-16 rounded-xl overflow-hidden">
                    <img
                      className="object-cover size-full"
                      src={`${import.meta.env.VITE_APP_ASSETS_URL}/uploads/${
                        post.thumbnail
                      }`}
                      alt={post.title}
                    />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="flex gap-2">
                  <Link
                    className="px-4 py-1 text-white rounded-xl bg-gray-400"
                    to={`/posts/${post._id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="px-4 py-1 text-white rounded-xl bg-blue-400"
                    to={`/posts/${post._id}/edit`}
                  >
                    Edit
                  </Link>
               
                  <DeletePost postID={post._id}>Delete</DeletePost>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2>No posts are there</h2>
      )}
    </section>
  );
};

export default Dashboard;
