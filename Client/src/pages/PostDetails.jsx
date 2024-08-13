import React, { useContext, useEffect, useState } from "react";
import PostAuthor from "../components/PostAuthor";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/userContext.jsx";
import DeletePost from "./DeletePost.jsx";
import Loader from "../components/Loader.jsx";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(UserContext);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/posts/${id}`);
        setPost(response?.data);
      } catch (error) {
        setError(error.response?.data?.message || "An error occurred");
      }
      setIsLoading(false);
    };
    getPost();
  }, [id, BASE_URL]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="flex items-center justify-center min-h-screen  p-4">
      <div className="w-full max-w-3xl bg-gray-800 backdrop-blur-md border border-gray-700 rounded-lg p-6 shadow-lg">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {post && (
          <div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <PostAuthor
                  authorID={post.creator}
                  createdAt={post.createdAt}
                />
                {currentUser?.id === post.creator && (
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <Link
                      to={`/posts/${post?._id}/edit`}
                      className="px-3 py-1 bg-blue-700 text-white rounded-md text-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Edit
                    </Link>
                    <DeletePost postID={id} />
                  </div>
                )}
              </div>
              <h1 className="text-2xl font-bold text-white break-words">
                {post.title}
              </h1>
              <div className="relative w-full h-80">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-4 mt-4">
              <p
                className="text-white break-words overflow-hidden custom-content"
                dangerouslySetInnerHTML={{ __html: post.description }}
              ></p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PostDetails;
