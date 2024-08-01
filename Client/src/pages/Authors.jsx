import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthorsData = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Alice Johnson",
    posts: 2,
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Bob Smith",
    posts: 2,
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1636041263374-dff82464f619?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Carol Williams",
    posts: 3,
  },
  {
    id: 4,
    avatar:
      "https://images.unsplash.com/photo-1706885093476-b1e54f3b7496?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "David Brown",
    posts: 1,
  },
  {
    id: 5,
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Emma Davis",
    posts: 5,
  },
];

const Authors = () => {
  const [authors, setAuthors] = useState(AuthorsData);
  return (
    <section className="px-4 py-8 md:px-8 md:py-12">
      {authors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {authors.map(({ id, avatar, name, posts }) => (
            <Link
              className="bg-white rounded-xl p-4 flex items-center gap-4 transition ease-in-out delay-150 hover:shadow-lg"
              key={id}
              to={`/posts/users/${id}`}
            >
              <div className="w-16 h-16 overflow-hidden">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src={avatar}
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
