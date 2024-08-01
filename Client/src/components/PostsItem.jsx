import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostsItem = ({
  postID,
  title,
  thumbnail,
  description,
  authorID,
  category,
}) => {
  const shortDesc =
    description.length > 145 ? description.substr(0, 145) + "..." : description;
  const postTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;

  return (
    <article className="bg-white p-4 pb-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="rounded-md h-48 sm:h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={thumbnail}
          alt={title}
        />
      </div>
      <div className="mt-4">
        <Link to={`posts/${postID}`}>
          <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
            {postTitle}
          </h3>
        </Link>
        <p className="mt-2 text-gray-600">{shortDesc}</p>
        <div className="flex justify-between items-center mt-4">
          <PostAuthor />
          <Link
            className="text-sm text-white bg-blue-500 rounded-md px-3 py-1 hover:bg-blue-600 transition-colors duration-200"
            to={`/posts/categories/${category}`}
          >
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostsItem;
