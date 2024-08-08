import React, { useState, useEffect } from "react";
import PostsItem from "./PostsItem";
import { DummyPosts } from "../data.js";
import axios from "axios";
import Loader from "./Loader.jsx";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    const fetchPosts = async () => {
      setError("");
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/posts`);
        setPosts(response?.data);
      } catch (error) {
        setError(error.response.data.message);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, []);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="p-4 bg-gray-100 min-h-screen">
      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(
            ({
              _id,
              thumbnail,
              category,
              title,
              description,
              authorID,
              createdAt,
            }) => (
              <PostsItem
                key={_id}
                postId={_id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={authorID}
                createdAt={createdAt}
              />
            )
          )}
        </div>
      ) : (
        <h2 className="text-center pt-20 text-xl text-gray-500">
          No posts found
        </h2>
      )}
    </section>
  );
};

export default Posts;
