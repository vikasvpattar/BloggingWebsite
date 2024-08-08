import React from "react";
import { Link } from "react-router-dom";

const DeletePost = () => {
  return (
    <Link
      to={`/posts/nsbs/delete`}
      className="px-3 py-1 bg-red-700 text-white rounded-md text-sm"
    >
      Delete
    </Link>
  );
};

export default DeletePost;
