import React, { useContext, useEffect, useState } from "react";
import { DummyPosts } from "../data";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Dashboard = () => {
  const [posts, setPosts] = useState(DummyPosts);
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  const navigate = useNavigate();
  // redirect to login page if the user is not logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });
  return (
    <section className="w-3/4 mx-auto mt-10 ">
      {posts.length > 0 ? (
        <div className="flex flex-col gap-3">
          {posts.map((post) => {
            return (
              <article
                className=" p-3 bg-white flex gap-2 items-center justify-between  rounded-xl"
                key={post.id}
              >
                <div className="flex gap-2 items-center">
                  <div className="size-16 rounded-xl overflow-hidden">
                    <img
                      className="object-cover size-full"
                      src={post.thumbnail}
                      alt={post.title}
                    />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="flex gap-2">
                  <Link
                    className="px-4 py-1 text-white rounded-xl bg-gray-400"
                    to={`/posts/${post.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="px-4 py-1 text-white rounded-xl bg-blue-400"
                    to={`/posts/${post.id}/edit`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="px-4 py-1 text-white rounded-xl bg-red-400"
                    to={`/posts/${post.id}/delete`}
                  >
                    Delete
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        h2
      )}
    </section>
  );
};

export default Dashboard;
