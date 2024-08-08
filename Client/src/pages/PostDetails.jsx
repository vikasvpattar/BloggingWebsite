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
        setCreatorID(response?.data.creator);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getPost();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="bg-white mx-auto p-4 rounded-xl max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl mt-6 sm:mt-8 md:mt-10 lg:mt-12">
      {error && <p className="text-red-500">{error}</p>}
      {post && (
        <div>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
              {currentUser?.id == post.creator && (
                <div className="flex gap-2 mt-2 sm:mt-0">
                  <Link
                    to={`/posts/${post?._id}/edit`}
                    className="px-3 py-1 bg-blue-700 text-white rounded-md text-sm"
                  >
                    Edit
                  </Link>
                  <DeletePost postID={id} />
                </div>
              )}
            </div>
            <h1 className="text-xl font-bold">{post.title}</h1>
            <div className="">
              <img
                src={`${import.meta.env.VITE_APP_ASSETS_URL}/uploads/${
                  post.thumbnail
                }`}
                alt=""
                className=" inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-4 mt-4">
            <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PostDetails;
