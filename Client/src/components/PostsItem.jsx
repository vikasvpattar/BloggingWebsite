import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostsItem = ({
  postId,
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
    <article className="bg-white p-4 pb-8 rounded-lg transition delay-100 hover:shadow-md">
      <div className="rounded-md h-64 overflow-hidden">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="mt-6">
        <Link to={`posts/${postId}`}>
          <h3 className="font-bold">{postTitle}</h3>
        </Link>
        <p>{shortDesc}</p>
        <div className="flex justify-between items-end">
          <PostAuthor />
          <Link
            className="bg-gray-200 rounded-md px-2 py-1"
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
