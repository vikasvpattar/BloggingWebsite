import React, { useState, useEffect } from "react";
import PostsItem from "../components/PostsItem.jsx";
import axios from "axios";
import Loader from "../components/Loader.jsx";
import { useParams } from "react-router-dom";
const CategoryPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const { category } = useParams();

  const fetchPosts = async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/posts/categories/${category}`
      );
      setPosts(response?.data);
    } catch (error) {
      setError(error.response.data.message);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, [category]);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="p-4 min-h-screen">
      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(
            ({
              _id,
              thumbnail,
              category,
              title,
              description,
              creator,
              createdAt,
            }) => (
              <PostsItem
                key={_id}
                postID={_id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={creator}
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

export default CategoryPosts;
