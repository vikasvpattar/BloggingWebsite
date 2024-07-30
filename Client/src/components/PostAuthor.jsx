import React from "react";
import { Link } from "react-router-dom";

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/vfdfv`} className="flex gap-4 mt-4 items-start">
      <div>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
          alt=""
          className="w-8 h-8 rounded-2xl object-cover "
        />
      </div>
      <div>
        <h5>By: Michal whon</h5>
        <small>Just now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
