import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getAuthors = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/users`);
        setAuthors(response?.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getAuthors();
  }, []);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="px-4 py-8 md:px-8 md:py-12">
      {authors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {authors.map(({ _id, avatar, name, posts }) => (
            <Link
              className="bg-white rounded-xl p-4 flex items-center gap-4 transition ease-in-out delay-150 hover:shadow-lg"
              key={_id}
              to={`/posts/users/${_id}`}
            >
              <div className="w-16 h-16 overflow-hidden">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src={`${
                    import.meta.env.VITE_APP_ASSETS_URL
                  }/uploads/${avatar}`}
                  alt={`Image of ${name}`}
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm text-gray-600">{posts} Posts</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-xl font-semibold mt-8">
          No users or authors found.
        </h2>
      )}
    </section>
  );
};

export default Authors;
